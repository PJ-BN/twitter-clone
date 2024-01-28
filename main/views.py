from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json
from rest_framework.parsers import JSONParser
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login
from .models import *
from .serializers import *
from django.conf import settings
from PIL import Image

# Create your views here.

def home(request):
    return render(request, 'index.html')


# @api_view(['GET'])
@csrf_exempt
def signup(request):
    
    if(request.method == "POST"):
        data = json.loads(request.body)
        signinData(request , data)
            
        print('Received data:', data)

            
        return JsonResponse({'status': 'success'})
    
    return JsonResponse({'status': 'failed'})
    
    
@csrf_exempt
def loginUser(request):
    
    if(request.method == "POST"):
        data = json.loads(request.body)
            
        print('Received data:', data)
        UserName = data['key1']
        Password = data['key2']
        
        user = authenticate(request, username= UserName, password=Password)
        print(user)
        
        if user is not None:
            login(request , user)
            print(" done")
                    
            return JsonResponse({'status': 'success'})
    
    return JsonResponse({'status': 'failed'})
    

@csrf_exempt
def profile(request):
    img = settings.MEDIA_ROOT + settings.MEDIA_URL + 'profile.jpg'
    try:
        data = json.loads(request.body)
        user = data['key1']
        print(user)
    except:
        print(" no data found")
    if user:
        # userdata = User.objects.get(username = user)
        userdata = UserData.objects.get(username= user)
        print(userdata)
        serializerUser = UserDataSerializer(userdata)
        return JsonResponse(serializerUser.data, safe=False)
    print("error")
    return JsonResponse({'user': user})
    
    
def signinData(request, data):
    if data:
        UserName = data["key1"] 
        Password = data["key2"] 
        firstName = data["key3"] 
        lastName = data["key4"] 
        email = data["key5"] 
        phoneNumber = data["key6"] 
        address = data["key7"] 
        gender = data["key8"] 
        dateOfBirth = data["key9"]
        
        user = User.objects.create_user(username=UserName, password=Password , first_name = firstName, last_name = lastName, email= email )
        if user is not None:
            user.save()
            Userdata = UserData(id = user,username = UserName, firstname = firstName, lastname = lastName, email = email, phoneNumber = phoneNumber ,address = address, gender = gender, dateOfBirth = dateOfBirth)
            Userdata.save()
        
        us = authenticate(request, username= UserName, password=Password)
        login(request , us)

            
    
@csrf_exempt
def gettweet(request):
    try:
        data = json.loads(request.body)
        print(data)
    except:
        print(" no data found")
    if data:
        return JsonResponse({"status":"success"})
    
    return JsonResponse({"status":"failed"})
    
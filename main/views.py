from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json
from rest_framework.decorators import api_view
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login
from .models import *

# Create your views here.

def home(request):
    return render(request, 'index.html')


# @api_view(['GET'])
@csrf_exempt
def signup(request):
    if(request.method =="GET"):
        return JsonResponse({'data': " 1234", 
                            'data2': "234"})
    elif(request.method == "POST"):
        data = json.loads(request.body)
        user = signinData(request , data)
        # login(request, user)
            
        print('Received data:', data)

            
        return JsonResponse({'status': 'success'})
    
@csrf_exempt
def login(request):
    if(request.method =="GET"):
        return JsonResponse({'data': " 1234", 
                            'data2': "234"})
    elif(request.method == "POST"):
        data = json.loads(request.body)
            
        print('Received data:', data)

            
        return JsonResponse({'status': 'success'})
    
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
            Userdata = UserData(id = user, phoneNumber = phoneNumber ,address = address, gender = gender, dateOfBirth = dateOfBirth)
            Userdata.save()
        
        # us = authenticate(request, username= UserName, password=Password)
        # return us
            
    

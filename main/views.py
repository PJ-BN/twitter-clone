from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json
from rest_framework.decorators import api_view
from django.contrib.auth.models import User

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
    
def singinData():
    # user = User.objects.create_user(username=username, password=password , first_name = first_name, last_name = last_name, email= email )
    pass
    

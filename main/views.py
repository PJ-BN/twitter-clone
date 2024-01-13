from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json
from rest_framework.decorators import api_view
from rest_framework.response import Response

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
    


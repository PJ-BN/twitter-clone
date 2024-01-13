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
def testapi(request):
    return JsonResponse({'data': " 1234", 
                         'data2': "234"})
    

# Your Django views.py

from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json

@csrf_exempt
def handle_data(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            # Handle the data as needed
            print('Received data:', data)
            return JsonResponse({'status': 'success'})
        except json.JSONDecodeError:
            return JsonResponse({'status': 'error', 'message': 'Invalid JSON'})
    else:
        return JsonResponse({'status': 'error', 'message': 'Unsupported method'})

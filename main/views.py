from django.shortcuts import render
from django.http import JsonResponse

# Create your views here.

def home(request):
    return render(request, 'index.html')

def testapi(request):
    return JsonResponse({'data': " 1234", 
                         'data2': "234"})
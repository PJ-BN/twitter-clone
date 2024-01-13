from django.urls import path
from .views import *

urlpatterns = [
    path('', home , name = "home"),
    path('test', testapi, name = "test"),
    path('signin', testapi, name = "home"),
    
]

from django.urls import path
from .views import *

urlpatterns = [
    path('', home , name = "home"),
    path('test', home, name = "test"),
    path('signin', signup, name = "signup"),
    path('login', loginUser, name = "login"),
    path('profile/', profile, name = 'profile'),
    
    
]

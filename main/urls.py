from django.urls import path
from .views import *


urlpatterns = [
    path('', home , name = "home"),
    path('test', home, name = "test"),
    path('signin', signup, name = "signup"),
    path('login', loginUser, name = "login"),
    path('profile/', profile, name = 'profile'),
    path('tweet/', gettweet, name = "tweet"),
    path('tweet/<int:pk>/', sendtweet, name = "send_tweet"),
    path('profile/<str:pk>/' , sendname, name = "send_name"),
    path('follow/', followuser, name = "follow_user"),
    path('get/followers/', getfollowers, name = "get_followers"),
    path('message', send_message, name = "message"),
]

"""
URL patterns for the main application.

This module defines the URL patterns for the main application of the Twitter clone backend.
"""

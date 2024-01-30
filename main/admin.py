from django.contrib import admin
from .models import *

# Register your models here.

class UserDisplay(admin.ModelAdmin):
    list_display = ( "id", "phoneNumber", "address", "gender", "dateOfBirth")
    
class TweetDisplay(admin.ModelAdmin):
    list_display = ("id", "username", "tweet", "date","like","retweet", "comment")
    

admin.site.register(UserData, UserDisplay)
admin.site.register(TweetData, TweetDisplay)
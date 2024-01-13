from django.contrib import admin
from .models import *

# Register your models here.

class UserDisplay(admin.ModelAdmin):
    list_display = ( "id", "phoneNumber", "address", "gender", "dateOfBirth")
    

admin.site.register(UserData, UserDisplay)
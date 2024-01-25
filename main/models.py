from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class UserData(models.Model):
    id = models.OneToOneField(User ,on_delete = models.CASCADE, primary_key = True )
    username = models.CharField(max_length = 30)
    firstname = models.CharField(max_length = 30)
    lastname = models.CharField(max_length = 30)
    email = models.EmailField(max_length=254)
    phoneNumber = models.CharField(max_length = 15)
    address = models.CharField(max_length = 150)
    gender = models.CharField(max_length = 15)
    dateOfBirth = models.CharField(max_length = 15)
    
    class Meta:
        ordering = ['username']



    


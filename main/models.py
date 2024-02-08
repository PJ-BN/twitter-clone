from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class UserData(models.Model):
    id = models.OneToOneField(User ,on_delete = models.CASCADE, primary_key = True )
    username = models.CharField(max_length = 30, unique = True)
    firstname = models.CharField(max_length = 30)
    lastname = models.CharField(max_length = 30)
    email = models.EmailField(max_length=254)
    phoneNumber = models.CharField(max_length = 15)
    address = models.CharField(max_length = 150)
    gender = models.CharField(max_length = 15)
    dateOfBirth = models.CharField(max_length = 15)
    
    class Meta:
        ordering = ['username']

class TweetData(models.Model):
    id = models.AutoField(primary_key = True)
    username = models.ForeignKey(UserData, on_delete = models.CASCADE)
    tweet = models.CharField(max_length = 150)
    date = models.DateTimeField(auto_now_add=True)
    like = models.IntegerField(default = 0)
    comment = models.IntegerField(default = 0)
    retweet = models.IntegerField(default = 0)
    
    class Meta:
        ordering = ['date']
        
    
class UserFollowInfos(models.Model):
    username = models.ForeignKey(UserData, on_delete=models.CASCADE)
    follow = models.ForeignKey(UserData, on_delete= models.CASCADE, related_name = "following")
    
    
    class Meta:
        ordering = ['username']


from rest_framework import serializers
from .models import * 

class UserDataSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserData
        fields = ['id', 'username', 'firstname', 'lastname', 'email','phoneNumber', 'address', 'gender', 'dateOfBirth']
        
class TweetDataSerializer(serializers.ModelSerializer):
    class Meta:
        model = TweetData
        fields = '__all__'
        
    
class UserFollowInfosSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserFollowInfos
        fields = '__all__'
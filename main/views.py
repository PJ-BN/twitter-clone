from django.shortcuts import render
from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json
from rest_framework.pagination import PageNumberPagination
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login
from .models import *
from .serializers import *
from django.conf import settings
from PIL import Image

class CustomPagination(PageNumberPagination):
    page_size = 10

def home(request):
    """
    Renders the home page.

    Args:
        request: The HTTP request object.

    Returns:
        The rendered home page.
    """
    return render(request, 'index.html')


@csrf_exempt
def signup(request):
    """
    Handles the signup functionality.

    Args:
        request: The HTTP request object.

    Returns:
        A JSON response indicating the status of the signup process.
    """
    if(request.method == "POST"):
        data = json.loads(request.body)
        signinData(request , data)
        print('Received data:', data)
        return JsonResponse({'status': 'success'})
    
    return JsonResponse({'status': 'failed'})
    

@csrf_exempt
def loginUser(request):
    """
    Handles the login functionality.

    Args:
        request: The HTTP request object.

    Returns:
        A JSON response indicating the status of the login process.
    """
    if(request.method == "POST"):
        data = json.loads(request.body)
        print('Received data:', data)
        UserName = data['key1']
        Password = data['key2']
        user = authenticate(request, username= UserName, password=Password)
        print(user)
        if user is not None:
            login(request , user)
            print(" done")
            return JsonResponse({'status': 'success'})
    
    return JsonResponse({'status': 'failed'})
    

@csrf_exempt
def profile(request):
    """
    Retrieves the user profile data.

    Args:
        request: The HTTP request object.

    Returns:
        A JSON response containing the user profile data.
    """
    # img = settings.MEDIA_ROOT + settings.MEDIA_URL + 'profile.jpg'
    try:
        data = json.loads(request.body)
        user = data['key1']
        logged_user = data['key2']
        print(user,logged_user)
        if user:
            userdata = UserData.objects.get(username= user)
            count_tweet = TweetData.objects.filter(username = userdata).count()
            count_following = UserFollowInfos.objects.filter(username = userdata).count()
            count_follower = UserFollowInfos.objects.filter(follow = userdata).count()
            
            if(user != logged_user):
                check_user = UserData.objects.get(username= logged_user)
                check_follow = UserFollowInfos.objects.filter(username = check_user).values('follow')
                print("followed: ", check_follow)
                print("user: ", userdata.id.id)
                item_to_check = check_follow.filter(follow = userdata.id.id)
                if(item_to_check):
                    button_value ="Unfollow"
                    
                else:
                    button_value = "Follow"
                    
            else:
                button_value = "Edit"

                
            
            print(userdata)
            serializerUser = UserDataSerializer(userdata)
            return_data = {
                "data":serializerUser.data,
                "tweet_count":count_tweet,
                "count_follower":count_follower,
                "count_following": count_following,
                "follow_button":button_value,
            }
            return JsonResponse(return_data, safe=False)
    except:
        print(" no data found")
    print("error")
    return JsonResponse({'user': user})
    
    
def signinData(request, data):
    """
    Handles the signup data.

    Args:
        request: The HTTP request object.
        data: The signup data.

    Returns:
        None
    """
    if data:
        UserName = data["key1"] 
        Password = data["key2"] 
        firstName = data["key3"] 
        lastName = data["key4"] 
        email = data["key5"] 
        phoneNumber = data["key6"] 
        address = data["key7"] 
        gender = data["key8"] 
        dateOfBirth = data["key9"]
        
        user = User.objects.create_user(username=UserName, password=Password , first_name = firstName, last_name = lastName, email= email )
        if user is not None:
            user.save()
            Userdata = UserData(id = user,username = UserName, firstname = firstName, lastname = lastName, email = email, phoneNumber = phoneNumber ,address = address, gender = gender, dateOfBirth = dateOfBirth)
            Userdata.save()
        
        us = authenticate(request, username= UserName, password=Password)
        login(request , us)

            
    
@csrf_exempt
def gettweet(request):
    """
    Retrieves the tweet data.

    Args:
        request: The HTTP request object.

    Returns:
        A JSON response indicating the status of the tweet retrieval process.
    """
    try:
        data = json.loads(request.body)
        username = data['user']
        user = UserData.objects.get(username = username)
        tweetdata = TweetData(username = user, tweet = data['content'], date = data['date']) 
        tweetdata.save()
        print(data)
    except:
        print(" no data found")
    if data:
        return JsonResponse({"status":"success"})
    
    return JsonResponse({"status":"failed"})
    
@csrf_exempt
def sendtweet(request, pk):
    """
    Sends the tweet data.

    Args:
        request: The HTTP request object.

    Returns:
        A JSON response indicating the status of the tweet sending process.
    """
    try:
        data = json.loads(request.body)
        print(data)
        username = data['username']
        user = UserData.objects.get(username = username)
        tweetdata = TweetData.objects.filter(username = user)
        # paginator = CustomPagination()
        # paginated_items = paginator.paginate_queryset(tweetdata, request)
        # print("the item is",paginated_items)
        page = request.GET.get('page', 1)
        paginator = Paginator(tweetdata, 10)
        
        # Show 10 tweets per page
        try:
            tweetdata_page = paginator.page(page)
        except PageNotAnInteger:
            tweetdata_page = paginator.page(1)
        except EmptyPage:
            tweetdata_page = paginator.page(paginator.num_pages)

        
        # Send the tweet and store its ID in our database for future reference
        
        
    except:
        print(" no data found")
    if data:
        
        serializerTweet = TweetDataSerializer(tweetdata_page, many = True).data
        response_data = {
            'status': 'success',
            'total_pages': paginator.num_pages,
            'data': serializerTweet,
        }
        return JsonResponse(response_data, safe=False)
        
    
    return JsonResponse({"status":"failed"})



@csrf_exempt
def sendname(request, pk):
    """
    Retrieves the user's name.

    Args:
        request: The HTTP request object.
        pk: The primary key.

    Returns:
        A JSON response containing the user's name.
    """
    # count_follower = UserFollowInfos.objects.filter(username = user).count()
    try:
        data = json.loads(request.body)
        print(data)
        print(pk)
        username = data['username']
        user = User.objects.get(username = username)
        print("user:",user)
        
        # follower = UserFollowInfos.objects.filter(username = user)
        # print(" follower" ,follower)
        print(user.first_name)
        return JsonResponse({"name":user.first_name + " " + user.last_name})
    except:
        try:
            print(pk)
            user = User.objects.get( username= pk)
            print(user)
            follower = UserFollowInfos.objects.filter(username = user)
            print(" follower" ,follower)
            print(user.first_name)
            return JsonResponse({"name":user.first_name + " " + user.last_name})
        except:
            print(" no data found")
    return JsonResponse({"status":"failed"})


@csrf_exempt
def followuser(request):
    """
    Follows a user.

    Args:
        request: The HTTP request object.

    Returns:
        A JSON response indicating the status of the user following process.
    """
    try:
        data = json.loads(request.body)
        print(data)
        username = data['username']
        follow = data['follow']
        condition = data['follow_button']
        user = UserData.objects.get(username = username)
        print(user)
        follow_user = UserData.objects.get(username = follow)
        print(follow_user)
        if condition == "Unfollow":
            UserFollowInfos.objects.filter(username = user, follow = follow_user).delete()
            follow_button = "Follow"
        else :
            followdata = UserFollowInfos(username = user, follow = follow_user)
            followdata.save()
            follow_button = "Unfollow"
            print("done")
    except:
        print(" no data found")
    if data:
        response = {
            "status":"success",
            "follow_button":follow_button,
        }
        return JsonResponse(response)
    
    return JsonResponse({"status":"failed"})
from django.forms import model_to_dict
from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from .models import AppUser as User, GameData
from django.core import serializers
from django.contrib.auth import authenticate, login, logout
from rest_framework.decorators import api_view
from django.views.decorators.csrf import csrf_exempt
import json
from django.db.models import F


def home(request):
    theIndex = open('static/index.html').read()
    return HttpResponse(theIndex)


@api_view(['POST'])
def sign_up(request):
    print(request.data)
    try:
        User.objects.create_user(password=request.data['password'],character=None, username=request.data['email'],email=request.data['email'])
        return JsonResponse({'signup': 'success'})
    except Exception as e:
        print(str(e))
    return JsonResponse({'signup': 'failure'})

@api_view(['POST'])
def log_in(request):
    # DRF assumes that the body is JSON, and automatically parses it into a dictionary at request.data
    email = request.data['email']
    password = request.data['password']
    # user = authenticate(username=email, password=password, email=email)
    user = authenticate(username=email, password=password)
    print('user?')
    print(user.email)
    print(user.password)
    if user is not None:
        if user.is_active:
            try:
                # access the base request, not the DRF request
                # this starts a login session for this user
                login(request._request, user)
            except Exception as e:
                print('except')
                print(str(e))
            return HttpResponse('success!')
            # Redirect to a success page.
        else:
            return HttpResponse('not active!')
            # Return a 'disabled account' error message
    else:
        return HttpResponse('no user!')
        # Return an 'invalid login' error message.

@api_view(['POST'])
def log_out(request):
    logout(request)
    return HttpResponse('Logged you out!')

@api_view(['GET'])
def who_am_i(request):
    # Make sure that you don't send sensitive information to the client, such as password hashes
    # raise Exception('oops')
    if request.user.is_authenticated:
        data = serializers.serialize("json", [request.user], fields=['email', 'username','first_name','last_name','date_joined','character'])
        return HttpResponse(data)
    else:
        return JsonResponse({'user':None})

@api_view(['POST'])
def create_character(request):
    if request.user.is_authenticated:
        char_data = request.data
       
        GameData.objects.create(
            type=char_data['type'],
            accuracy = char_data['accuracy'],
            evasion = char_data['evasion'],
            strength = char_data['strength'],
            defense = char_data['defense'],
            user=request.user).save()
        return HttpResponse("success")
    return JsonResponse({'user':None})


@api_view(['POST'])
def delete_character(request):
    User.objects.filter(username=request.user).update(character=None)
    return HttpResponse("success")
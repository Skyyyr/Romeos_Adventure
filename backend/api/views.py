from locale import currency
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
        User.objects.create_user(password=request.data['password'], username=request.data['email'],
                                 email=request.data['email'],first_name=request.data['first_name'],last_name=request.data['last_name'])
        return JsonResponse({'signup': 'success'})
    except Exception as e:
        print(str(e))
    return JsonResponse({'signup': 'failure'})


@api_view(['POST'])
def log_in(request):
    # DRF assumes that the body is JSON, and automatically parses it into a dictionary at request.data
    email = request.data['email']
    password = request.data['password']
    user = authenticate(username=email, password=password)
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
        data = serializers.serialize("json", [request.user],
                                     fields=['email', 'username', 'date_joined','first_name','last_name'])
        return HttpResponse(data)
    else:
        return JsonResponse({'user': None})


@api_view(['POST', 'GET', 'DELETE', 'PUT'])
def game_data(request):
    if request.user.is_authenticated:
        results = GameData.objects.filter(user=request.user).exists()

        if request.method == 'POST':
            char_data = request.data

            new_data = GameData.objects.create(
                type=char_data['type'],
                accuracy=char_data['accuracy'],
                evasion=char_data['evasion'],
                strength=char_data['strength'],
                defense=char_data['defense'],
                user=request.user).save()

            return JsonResponse({'game_data': new_data})

        elif request.method == 'GET':
            if results:
                load_data = GameData.objects.get(user=request.user)
                return JsonResponse({'get_data': model_to_dict(load_data), 'results': results})

            return JsonResponse({'no_data': results})

        elif request.method == 'DELETE':
            if results:
                GameData.objects.get(user=request.user).delete()
                return JsonResponse({'result' : 'success'})

        elif request.method == 'PUT':
            print(request.data)
            if 'advancestage' in request.data:
                GameData.objects.filter(user=request.user).update(stage=request.data['advancestage']['stage'],currency=request.data['advancestage']['currency'])
                return JsonResponse({'result': 'advanced stage'})

            if 'statincrease' in request.data:
                stat = request.data['statincrease']['stat']
                GameData.objects.filter(user=request.user).update(**{stat:request.data['statincrease']['value'],'currency':request.data['statincrease']['currency']})
                return JsonResponse({'result': 'stat increase'})

            return({'result': 'no updates'})

    return JsonResponse({'game_data': None})

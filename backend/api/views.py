from django.http import HttpResponse
from django.shortcuts import render


def home(request):
    theIndex = open('static/index.html').read()
    return HttpResponse(theIndex)

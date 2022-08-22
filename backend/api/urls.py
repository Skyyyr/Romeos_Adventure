from django.urls import path
from . import views

urlpatterns = [
    path('', views.home),
    path('signup', views.sign_up),
    path('login', views.log_in),
    path('logout', views.log_out),
    path('whoami', views.who_am_i),
    path('gamedata', views.game_data),
]

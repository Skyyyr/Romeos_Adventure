from locale import currency
from django.db import models
from django.contrib.auth.models import AbstractUser


# # Create your models here.
class AppUser(AbstractUser):
    email = models.EmailField(
        verbose_name='email address',
        max_length=255,
        unique=True,
    )
    #character = models.CharField(max_length=255,null=True)

class GameData():
    strength = models.IntegerField()
    defense = models.IntegerField()
    accuracy = models.IntegerField()
    evasion = models.IntegerField()
    currency = models.IntegerField(default=0)
    
    #frontend/backend/fullstack
    type = models.CharField(max_length=255,null=True)
    user = models.OneToOneField(AppUser, on_delete=models.CASCADE)
    stage =  models.IntegerField(default=0)



    


from django.contrib import admin
from .models import CustomUser, Favorite

# Register your models here.
admin.register(CustomUser)
admin.register(Favorite)

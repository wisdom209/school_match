from django.urls import path
from . import views

urlpatterns = [
    path('create-account', views.CustomUserView.as_view()),
    path('favorites', views.FavoriteView.as_view()),
        
]
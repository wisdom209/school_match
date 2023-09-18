from django.urls import path
from . import views
from rest_framework.authtoken.views import obtain_auth_token

urlpatterns = [
    path('create-account', views.user_view, name="user_account"),
    path('favorites', views.FavoriteView.as_view()),
    path('login/', obtain_auth_token, name="login"),
    path('profile', views.user_profile, name="user_profile"),
    path('logout/', views.logout),
    
        
]
from django.urls import path
from . import views
from rest_framework.authtoken.views import obtain_auth_token

urlpatterns = [
    path('create-account', views.user_view, name="user_account"),
    path('favorites/<int:user_id>', views.FavoriteView.as_view()),
    path('favorites/<int:user_id>/<int:id>', views.DelFavorite.as_view()),
    path('login/', obtain_auth_token, name="login"),
    path('profile', views.user_profile, name="user_profile"),
    path('logout/', views.logout),
    path('profile/<int:id>', views.UserUpdate.as_view()),
    path('favorite/', views.FavoriteSearch.as_view({'get':'list'})),
    
        
]
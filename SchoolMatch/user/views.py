from django.shortcuts import render, redirect
from rest_framework import status, generics
from rest_framework.response import Response 
from rest_framework.views import APIView
from rest_framework.decorators import api_view, authentication_classes, permission_classes
from .serializers import UserSerializer, FavoriteSerializer
from .models import Favorite
from django.contrib.auth.models import User
from rest_framework.authtoken.models import Token
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework.authtoken.views import obtain_auth_token

# Create your views here.
@api_view(['POST'])
def user_view(request):
    serializer = UserSerializer(data=request.data)
    if serializer.is_valid():
        password = serializer.validated_data.get('password')
        confirm_password = serializer.validated_data.get('confirm_password')
        if password != confirm_password:
            return Response({'error': 'Password mismatch'})
        else:
            user = serializer.save()
            user.set_password(request.data['password'])
            user.save()
            return Response({'success': True, 'message': 'Registration successful', 'data': serializer.data}, status=status.HTTP_201_CREATED)
    return Response({'success': False, 'errors': serializer.errors}, status=status.HTTP_400_BAD_REQUEST) 


@api_view()
@authentication_classes([TokenAuthentication])
@permission_classes([IsAuthenticated])
def user_profile(request):
    user = request.user
    serializer = UserSerializer(user)
    return Response(serializer.data)


@api_view(['POST'])
def login(request):
    response = obtain_auth_token(request._request)
    if response.status_code == 200:
        token = response.data.get('token')
        return Response({"token": token, "redirect_url": '/api/user/profile'})
    else:
        return redirect('login')    
    
    
@api_view(['POST'])
@authentication_classes([TokenAuthentication])
@permission_classes([IsAuthenticated])
def logout(request):
    #get user associated with the request
    user = request.user
    
    # delete associated token
    Token.objects.filter(user=user).delete()
    
    return Response({"detail": "Logout successfully"}, 200)
    
        
class FavoriteView(generics.ListCreateAPIView):
    queryset = Favorite.objects.all()
    serializer_class = FavoriteSerializer
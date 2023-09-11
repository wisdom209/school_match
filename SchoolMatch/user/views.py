from django.shortcuts import render
from rest_framework import status, generics
from rest_framework.response import Response 
from rest_framework.views import APIView
from .serializers import CustomUserSerializer, FavoriteSerializer
from .models import CustomUser, Favorite

# Create your views here.
class CustomUserView(APIView):
    def post(self, request):
        serializer = CustomUserSerializer(data=request.data)
        if serializer.is_valid():
            password = serializer.validated_data.get('password')
            confirm_password = serializer.validated_data.get('confirm_password')
            if password != confirm_password:
                return Response({'error': 'Password mismatch'})
            else:
                user = serializer.save()
                user.set_password(request.data['password'])
                user.save()
                return Response({'success': True, 'message': 'Registration successful'}, status=status.HTTP_201_CREATED)
        return Response({'success': False, 'errors': serializer.errors}, status=status.HTTP_400_BAD_REQUEST)
    
class FavoriteView(generics.ListCreateAPIView):
    queryset = Favorite.objects.all()
    serializer_class = FavoriteSerializer
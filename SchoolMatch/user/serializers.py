from .models import Favorite 
from rest_framework import serializers
from django.contrib.auth.models import User 

class UserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)
    confirm_password = serializers.CharField(write_only=True)
    
    class Meta:
        model = User
        fields = ['id', 'first_name', 'last_name', 'username', 'email', 'password', 'confirm_password']

    def create(self, validated_data):
        # extra and remove the 'password' field from the validated data
        password = validated_data.pop('password')
        confirm_password = validated_data.pop('confirm_password', None)
        
        if 'password' in validated_data and confirm_password != validated_data['password']:
            raise serializers.ValidationError("Password do not match")
        
        # create the user with the remaining validated data
        user = User.objects.create_user(**validated_data)
        
        # set user's password separately
        user.set_password(password)
        user.save()
        
        return user

class FavoriteSerializer(serializers.ModelSerializer):    
    class Meta:
        model = Favorite
        fields = ['id', 'user', 'department']
        depth = 2


class FavoritePostSerializer(serializers.ModelSerializer):    
    class Meta:
        model = Favorite
        fields = ['id', 'user', 'department']

        # read_only_fields = ['user', 'department']
        
        # def create(self, validated_data):
        #     validated_data.pop('user', None)
        #     validated_data.pop('department', None)
        #     return super().create(validated_data)
        
        # def update(self, instance, validated_data):
        #     validated_data.pop('user', None)
        #     validated_data.pop('department', None)
        #     return super().update(instance, validated_data)
from django.db import models
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin
from school.models import Department
from django.contrib.auth.models import Group, Permission
from django.utils.translation import gettext as _
from django.contrib.auth.models import User

# Create your models here.
# class CustomUser(AbstractBaseUser, PermissionsMixin):
#     first_name = models.CharField(max_length=255)
#     last_name = models.CharField(max_length=255)
#     email = models.EmailField(unique=True)
#     is_active = models.BooleanField(default=False)
#     date_joined = models.DateTimeField(auto_now_add=True)
    
#     USERNAME_FIELD = 'email'
#     REQUIRED_FIELDS = ['first_name', 'last_name', 'email']
    
#     # Provide unique related_name values for the conflicting fields to enable migration
#     user_permissions = models.ManyToManyField(
#         Permission,
#         verbose_name=_('user permissions'),
#         blank=True,
#         related_name='customuser_set'
#     )
#     groups = models.ManyToManyField(
#         Group,
#         verbose_name=_('groups'),
#         blank=True,
#         related_name='customuser_set'
#     )
    
#     def __str__(self):
#         return self.first_name + " " + self.last_name


class Favorite(models.Model):
    name = models.CharField(max_length=255, blank=True)
    user = models.ForeignKey(User, on_delete=models.PROTECT)
    department = models.ForeignKey(Department, on_delete=models.PROTECT)
    
    def __str__(self):
        return str(self.user_id) + " " + str(self.department_id)
    
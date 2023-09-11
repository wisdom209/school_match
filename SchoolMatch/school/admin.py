from django.contrib import admin
from .models import Degree, Grade, Department, Program, School

# Register your models here.
admin.register(Degree)
admin.register(Grade)
admin.register(Department)
admin.register(Program)
admin.register(School)

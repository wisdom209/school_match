from rest_framework import serializers
from .models import Degree, Grade, Department, Program, School
from rest_framework.validators import UniqueValidator

class DegreeSerializer(serializers.ModelSerializer):
    title = serializers.CharField(
        max_length=50,
        validators = [UniqueValidator(queryset=Degree.objects.all())]
    )
    class Meta:
        model = Degree
        fields = ['id', 'slug', 'title']
        
class GradeSerializer(serializers.ModelSerializer):
    grade = serializers.CharField(
        max_length = 10,
        validators = [UniqueValidator(queryset=Grade.objects.all())]
    )
    class Meta:
        model = Grade
        fields = ['id', 'slug', 'grade']
        

class ProgramSerializer(serializers.ModelSerializer):
    name = serializers.CharField(
        max_length = 10,
        validators = [UniqueValidator(queryset=Program.objects.all())]
    )
    class Meta:
        model = Program
        fields = ['id', 'name', 'program_detail']
        
        
class SchoolSerializer(serializers.ModelSerializer):
    name = serializers.CharField(
        max_length = 10,
        validators = [UniqueValidator(queryset=School.objects.all())]
    )
    class Meta:
        model = School
        fields = ['id', 'name', 'school_type', 'school_link', 'country']
        

class DepartmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Department
        fields = ['id', 'title', 'programID', 'degreeID', 'schoolID', 'gradeID']
        

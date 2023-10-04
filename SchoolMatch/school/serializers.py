from rest_framework import serializers
from .models import Degree, Grade, Department, Program, School, Image, Course
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
        max_length = 100,
        validators = [UniqueValidator(queryset=Grade.objects.all())]
    )
    class Meta:
        model = Grade
        fields = ['id', 'slug', 'grade']
        

class ProgramSerializer(serializers.ModelSerializer):
    name = serializers.CharField(
        max_length = 100,
        validators = [UniqueValidator(queryset=Program.objects.all())]
    )
    class Meta:
        model = Program
        fields = ['id', 'name', 'program_detail']
        
class CourseSerializer(serializers.ModelSerializer):
    name = serializers.CharField(
        max_length = 100,
        validators = [UniqueValidator(queryset=Course.objects.all())]
    )
    
    class Meta:
        model = Course
        fields = ['id', 'name']
        
        
class SchoolSerializerA(serializers.ModelSerializer):
    name = serializers.CharField(
        max_length = 255,
        validators = [UniqueValidator(queryset=School.objects.all())]
    )
    class Meta:
        model = School
        fields = ['id', 'name', 'school_type', 'image', 'country']
        depth = 1


class SchoolSerializer(serializers.ModelSerializer):
    name = serializers.CharField(
        max_length = 255,
        validators = [UniqueValidator(queryset=School.objects.all())]
    )
    class Meta:
        model = School
        fields = ['id', 'name', 'school_type', 'image', 'school_link', 'country']
        depth = 1
                

class DepartmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Department
        fields = ['id', 'program']
        depth = 1


class DepartmentSerializerRestricted(serializers.ModelSerializer):
    course = CourseSerializer()
    school = SchoolSerializerA()
    class Meta:
        model = Department
        fields = ['id', 'degree', 'school', 'grade', 'course']
        depth = 3
        
        
class ImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Image
        fields = ['id', 'title', 'image', 'file_path']

from django.shortcuts import render
from rest_framework import status, generics
from rest_framework.response import Response
from .models import Degree, Grade, Program, School, Department
from .serializers import DegreeSerializer, GradeSerializer, ProgramSerializer, SchoolSerializer, DepartmentSerializer


# Create your views here.
class DegreeView(generics.ListCreateAPIView):
    queryset = Degree.objects.all()
    serializer_class = DegreeSerializer
    
class GradeView(generics.ListCreateAPIView):
    queryset = Grade.objects.all()
    serializer_class = GradeSerializer
    
    
class ProgramView(generics.ListCreateAPIView):
    queryset = Program.objects.all()
    serializer_class = ProgramSerializer
    
    
class SchoolView(generics.ListCreateAPIView):
    queryset = School.objects.all()
    serializer_class = SchoolSerializer
    
class DepartmentView(generics.ListCreateAPIView):
    queryset = Department.objects.all()
    serializer_class = DepartmentSerializer

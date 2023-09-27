from django.shortcuts import render
from rest_framework import status, generics, viewset
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
    
        
class SearchViewSet(viewset.ModelViewSet):
    queryset = Department.objects.all()
    serializer_class = DepartmentSerializer
    
    
    #implement search field and filtering
    def get_queryset(self):
        queryset = super().get_queryset()
        
        # filter parameter
        grade = self.request.query_params.get('grade_', None)
        degree_type = self.request.query_params.get('degree_type', None)
        school_type = self.request.query_params.get('school_type', None)
        school_name = self.request.query_params.get('school_name', None)
        program = self.request.query_params.get('program', None)
        search = self.request.query_params.get('search', None)
        
        if grade:
            queryset = queryset.filter(grade__grade=grade)
        
        if degree_type:
            queryset = queryset.filter(degree__title=degree_type)
        
        if school_type:
            queryset = queryset.filter(school__type=school_type)
            
        if school__name:
            queryset = queryset.filter(school__name=school_name)
            
        if program:
            queryset = queryset.filter(program__name=program)
            
        if search:
            search_field = ['title', 'school__name', 'degree__title', 'grade__grade', 'program__name']
            
            queries = [Q(**{field + '__icontains': search}) | Q(**{field + '__istartswith': search}) for field in search]
            queryset = queryset.filter(*queries)
            
        return queryset

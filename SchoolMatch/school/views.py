from django.shortcuts import render
from rest_framework import status, generics, viewsets
from rest_framework.response import Response
from .models import Degree, Grade, Program, School, Department, Image, Course
from .serializers import DegreeSerializer, GradeSerializer, ProgramSerializer, SchoolSerializer, DepartmentSerializer, ImageSerializer, CourseSerializer, DepartmentSerializerRestricted
from django.core.paginator import Paginator, EmptyPage
from django.db.models import Q
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated

# Create your views here.
class DegreeView(generics.ListCreateAPIView):
    queryset = Degree.objects.all()
    serializer_class = DegreeSerializer
    
class GradeView(generics.ListCreateAPIView):
    queryset = Grade.objects.all()
    serializer_class = GradeSerializer
    
    
class ImageView(generics.ListCreateAPIView):
    queryset = Image.objects.all()
    serializer_class = ImageSerializer    
    
class ProgramView(generics.ListCreateAPIView):
    queryset = Program.objects.all()
    serializer_class = ProgramSerializer
    

class CourseView(generics.ListCreateAPIView):
    queryset = Course.objects.all()
    serializer_class = CourseSerializer


class SingleCourseView(generics.RetrieveUpdateAPIView):
    queryset = Course.objects.all()
    serializer_class = CourseSerializer
    
    
class SchoolView(generics.ListCreateAPIView):
    queryset = School.objects.all()
    serializer_class = SchoolSerializer
    

class SingleSchoolView(generics.RetrieveUpdateAPIView):
    queryset = School.objects.all()
    serializer_class = SchoolSerializer


class DepartmentView(generics.ListCreateAPIView):
    queryset = Department.objects.all()
    serializer_class = DepartmentSerializer 
    

class SingleDepartmentView(generics.RetrieveAPIView):
    queryset = Department.objects.all()
    serializer_class = DepartmentSerializer
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]
    lookup_field = 'id'
    
    def get_object(self):
        queryset = self.get_queryset()
        obj = generics.get_object_or_404(queryset, **self.kwargs)
        obj.program_detail = obj.program.program_detail
        
        return obj
    
        
class SearchViewSet(viewsets.ModelViewSet):
    queryset = Department.objects.all()
    serializer_class = DepartmentSerializerRestricted
    search_fields = ['department__school__name', 'department__degree__title', 'department__grade__grade', 'department__course__name', 'department__program__name', 'department__school__country']
    
    
    #implement search field and filtering
    
    def get_queryset(self):
        queryset = super().get_queryset()
    
        # Filter parameters
        grade = self.request.query_params.get('grade', None)
        degree_type = self.request.query_params.get('degree', None)
        school_type = self.request.query_params.get('type', None)
        school_name = self.request.query_params.get('school', None)
        country = self.request.query_params.get('country', None)
        course = self.request.query_params.get('course', None)
        program = self.request.query_params.get('program', None)
        search = self.request.query_params.get('search', None)
    
        # Build a Q object to accumulate search conditions
        search_conditions = Q()
    
        if grade:
            search_conditions &= Q(grade__grade__icontains=grade)
    
        if degree_type:
            search_conditions &= Q(degree__title__icontains=degree_type)
    
        if school_type:
            search_conditions &= Q(school__school_type__icontains=school_type)
        
        if school_name:
            search_conditions &= Q(school__name__icontains=school_name)
        
        if course:
            search_conditions &= Q(course__name__icontains=course)
        
        if country:
            search_conditions &= Q(school__country__icontains=country)
        
        if program:
            search_conditions &= Q(program__name__icontains=program)
    
        if search:
            search_fields = ['course__name', 'school__name', 'degree__title', 'grade__grade', 'program__name', 'school__country']
            search_query = Q()
            for field in search_fields:
                search_query |= Q(**{field + '__icontains': search})
        
            search_conditions &= search_query
    
        return queryset.filter(search_conditions)
    
    
    def list(self, request, *args, **kwargs):
        queryset = self.get_queryset()
        
        # for pagination
        per_page = int(self.request.query_params.get('perpage', default=10))
        page = int(self.request.query_params.get('page', default=1))
        
        paginator = Paginator(queryset, per_page) #initialize the paginator object where the number of items per per equal perpage
        try:
            queryset = paginator.page(page)
        except EmptyPage:
            queryset = []
            
        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)

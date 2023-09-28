from django.shortcuts import render
from rest_framework import status, generics, viewsets
from rest_framework.response import Response
from .models import Degree, Grade, Program, School, Department, Image
from .serializers import DegreeSerializer, GradeSerializer, ProgramSerializer, SchoolSerializer, DepartmentSerializer, ImageSerializer
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
    
    
class ProgramView(generics.ListCreateAPIView):
    queryset = Program.objects.all()
    serializer_class = ProgramSerializer
    

class ImageView(generics.ListCreateAPIView):
    queryset = Image.onjects.all()
    serializer_class = ImageSerializer
    
    
class SchoolView(generics.ListCreateAPIView):
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
    
        
class SearchViewSet(viewsets.ModelViewSet):
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
        country = self.request.query_params.get('country', None)
        program = self.request.query_params.get('program', None)
        search = self.request.query_params.get('search', None)        
        
        if grade:
            queryset = queryset.filter(grade__grade=grade)
        
        if degree_type:
            queryset = queryset.filter(degree__title=degree_type)
        
        if school_type:
            queryset = queryset.filter(school__type=school_type)
            
        if school_name:
            queryset = queryset.filter(school__name=school_name)
            
        if country:
            queryset = queryset.filter(school__country=country)
            
        if program:
            queryset = queryset.filter(program__name=program)
            
        if search:
            search_fields = ['title', 'school__name', 'degree__title', 'grade__grade', 'program__name', 'school__country']
            
            queries = [Q(**{field + '__icontains': search}) | Q(**{field + '__istartswith': search_fields}) for field in search]
            queryset = queryset.filter(*queries)
            
        
        # for pagination
        per_page = int(request.query_params.get('perpage', default=10))
        page = int(request.query_params.get('page', default=1))
        
        paginator = Paginator(queryset, per_page) #initialize the paginator object where the number of items per per equal perpage
        try:
            queryset = paginator.page(page)
        except EmptyPage:
            queryset = []
            
        return queryset
    
    def list(self, request, *args, **kwargs):
        queryset = self.get_queryset()
        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)

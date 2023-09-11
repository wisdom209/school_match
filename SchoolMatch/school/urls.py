from django.urls import path
from . import views


urlpatterns = [
    path('degree', views.DegreeView.as_view()),
    path('grade', views.GradeView.as_view()),
    path('program', views.ProgramView.as_view()),
    path('school', views.SchoolView.as_view()),
    path('department', views.DepartmentView.as_view()),
     
]
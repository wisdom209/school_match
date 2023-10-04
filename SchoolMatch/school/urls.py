from django.urls import path
from . import views


urlpatterns = [
    path('degree', views.DegreeView.as_view()),
    path('grade', views.GradeView.as_view()),
    path('program', views.ProgramView.as_view()),
    path('school', views.SchoolView.as_view()),
    path('school/<int:pk>', views.SingleSchoolView.as_view()),
    path('department', views.DepartmentView.as_view()),
    path('course', views.CourseView.as_view()),
    path('course/<int:pk>', views.SingleCourseView.as_view()),
    path('search', views.SearchViewSet.as_view({'get':'list'})),
    path('program/<int:id>', views.SingleDepartmentView.as_view()),
    path('image-upload/', views.ImageView.as_view()),
    
]
from django.db import models

# Create your models here.
class Degree(models.Model):
    slug = models.SlugField()
    title = models.CharField(max_length=50)
    
    def __str__(self):
        return self.title
    
class Grade(models.Model):
    slug = models.SlugField()
    grade = models.CharField(max_length=10)

    def __str__(self):
        return self.grade 

class Program(models.Model):
    name = models.CharField(max_length=255)
    program_detail = models.TextField()
    
    def __str__(self):
        return self.name


class School(models.Model):
    name = models.CharField(max_length=255)
    school_type = models.CharField(max_length=50)
    school_link = models.URLField()
    country = models.CharField(max_length=100)
    
    def __str__(self):
        return self.name
       
class Department(models.Model): 
    title = models.CharField(max_length=255)
    programID = models.ForeignKey(Program, on_delete=models.PROTECT)
    schoolID = models.ForeignKey(School, on_delete=models.PROTECT)
    gradeID = models.ForeignKey(Grade, on_delete=models.PROTECT)
    degreeID = models.ForeignKey(Degree, on_delete=models.PROTECT)
    
    def __str__(self):
        return self.title 
     
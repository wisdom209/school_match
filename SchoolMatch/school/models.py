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

class Course(models.Model):
    name = models.CharField(max_length=255)
    program = models.ForeignKey(Program, on_delete=models.PROTECT)
    
    def __str__(self):
        return f"{self.name} - {self.program.name}"   

class Image(models.Model):
    title = models.CharField(max_length=255)
    image = models.ImageField(upload_to='images/')
    file_path = models.CharField(max_length=255, blank=True, null=True)

    def save(self, *args, **kwargs):
        # Save the file path before saving the model instance
        self.file_path = self.image.name
        super().save(*args, **kwargs)
        
    def __str__(self):
        return self.title
    
    
class School(models.Model):
    name = models.CharField(max_length=255)
    school_type = models.CharField(max_length=50)
    image = models.ForeignKey(Image, on_delete=models.PROTECT, default=1)
    school_link = models.URLField()
    country = models.CharField(max_length=100)
    
    def __str__(self):
        return f"{self.name} - {self.school_type} - {self.country}"

       
class Department(models.Model): 
    program = models.ForeignKey(Program, on_delete=models.PROTECT)
    course = models.ForeignKey(Course, on_delete=models.PROTECT, default=1)
    school = models.ForeignKey(School, on_delete=models.PROTECT)
    grade = models.ForeignKey(Grade, on_delete=models.PROTECT)
    degree = models.ForeignKey(Degree, on_delete=models.PROTECT)
    
    def __str__(self):
        return f"{self.course}" 
     
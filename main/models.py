from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class UserData(models.Model):
    id = models.OneToOneField(User ,on_delete = models.CASCADE, primary_key = True )
    phoneNumber = models.CharField(max_length = 15)
    address = models.CharField(max_length = 150)
    gender = models.CharField(max_length = 15)
    dateOfBirth = models.CharField(max_length = 15)
    

    # class Meta:
    #     verbose_name = _("")
    #     verbose_name_plural = _("s")

    def __str__(self):
        return self.name

    


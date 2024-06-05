from django.db import models
from ecommapp.models import CustomUser

class Vendor(models.Model):
    user = models.OneToOneField(CustomUser, on_delete=models.CASCADE)
    name = models.CharField(max_length=255)
    email = models.EmailField(unique=True)
    city = models.CharField(max_length=255)
    phone = models.IntegerField()
    # password = models.CharField(max_length=50)
    # password2 = models.CharField(max_length=50,verbose_name="conform password",)

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = ["name","phone"]

    def __str__(self):
        return self.email
    
class Category(models.Model):
    user = models.ForeignKey(Vendor, on_delete=models.CASCADE)
    category_name = models.CharField(max_length=100)
    REQUIRED_FIELDS = ["category_name"]

    def __str__(self):
        return self.category_name


class Product(models.Model):
    user = models.ForeignKey(Vendor, on_delete=models.CASCADE)
    category = models.CharField(max_length=100,null=False)
    name  = models.CharField(max_length=100,verbose_name="Product Name")
    in_stock = models.BooleanField(default=True)
    price = models.FloatField(default=0)
    detail = models.CharField(max_length=255)
    image =  models.ImageField(upload_to='product-image/', blank=True,null=True)

    def __str__(self):
        return self.name

    



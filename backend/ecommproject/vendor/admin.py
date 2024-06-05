from django.contrib import admin
from .models import Vendor,Category,Product
# Register your models here.

admin.site.register(Vendor)
admin.site.register(Category)
admin.site.register(Product)

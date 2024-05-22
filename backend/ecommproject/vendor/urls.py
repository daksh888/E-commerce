from django.urls import path
from .views import VendorRegister,CategoryCreateView, ProductCreateView

urlpatterns = [
    path('vendor-register/', VendorRegister.as_view(), name='vendor-register'),
    path('create-category/', CategoryCreateView.as_view(), name='create-category'),
    path('create-product/', ProductCreateView.as_view(), name='create-product'),
    
]
from django.urls import path
from .views import VendorRegister,CategoryCreateView, ProductCreateView,GetAllCategory,GetAllProduct,UpdateProductView,UpdateVendorView

urlpatterns = [
    path('vendor-register/', VendorRegister.as_view(), name='vendor-register'),
    path('create-category/', CategoryCreateView.as_view(), name='create-category'),
    path('create-product/', ProductCreateView.as_view(), name='create-product'),
    path('get-category/', GetAllCategory.as_view(), name='get-category'),
    path('get-product/', GetAllProduct.as_view(), name='get-product'),
    path('update-product/<int:pk>/', UpdateProductView.as_view(), name='update-product'),
    path('update-vendor/<int:pk>/', UpdateVendorView.as_view(), name='update-vendor'),
    
]
from django.shortcuts import render
from .models import Vendor,Category, Product
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework import status
from .serializers import VendorSerializer, CategorySerializers, ProductSerializers
from .permissions import IsVendor

class VendorRegister(APIView):
    queryset = Vendor.objects.all()
    permission_classes = [IsAuthenticated]
    def post(self, request, format=None):
        serializer = VendorSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
class CategoryCreateView(APIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializers
    permission_classes = [IsAuthenticated, IsVendor]

class ProductCreateView(APIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializers
    permission_classes = [IsAuthenticated, IsVendor]

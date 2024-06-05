from django.shortcuts import render
from .models import Vendor,Category, Product
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework import status
from .serializers import VendorSerializer, CategorySerializers, ProductSerializers,GetAllCategorySerializer,GetAllProductSerializer,UpdateProductSerializer,UpdateVendorSerializer
from .permissions import IsVendor

class VendorRegister(APIView):
    queryset = Vendor.objects.all()
    permission_classes = [IsAuthenticated]
    def post(self, request, format=None):
        print("vendor data", request.data)
        print("vendor user", request.user)
        serializer = VendorSerializer(data=request.data, context={'request': request})
        if serializer.is_valid():
            
            serializer.save()

            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
class UpdateVendorView(APIView):
    def put(self, request, pk, format=None):
        try:
            vendor = Vendor.objects.get(pk=pk)
        except Product.DoesNotExist:
            return Response({"error": "Vendor not found."}, status=status.HTTP_404_NOT_FOUND)
        
        serializer = UpdateVendorSerializer(vendor, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
class CategoryCreateView(APIView):
    queryset = Category.objects.all()
    permission_classes = [IsAuthenticated, IsVendor]

    def post(self, request, format=None):
        print("data",request.data)
        serializer = CategorySerializers(data=request.data, context={'request': request})
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class GetAllCategory(APIView):
    permission_classes = [IsAuthenticated, IsVendor]

    def get(self, request, format=None):
        all_categories = Category.objects.all()
        serializer = GetAllCategorySerializer(all_categories, many=True)
        return Response(serializer.data)
    

class ProductCreateView(APIView):
    queryset = Product.objects.all()
    permission_classes = [IsAuthenticated, IsVendor]

    def post(self, request, format=None):
        serializer = ProductSerializers(data=request.data, context={'request': request})
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class GetAllProduct(APIView):
    permission_classes = [IsAuthenticated, IsVendor]

    def get(self, request, format=None):
        all_product = Product.objects.all()
        serializer = GetAllProductSerializer(all_product, many=True)
        return Response(serializer.data)
    
class UpdateProductView(APIView):
    def put(self, request, pk, format=None):
        try:
            product = Product.objects.get(pk=pk)
        except Product.DoesNotExist:
            return Response({"error": "Product not found."}, status=status.HTTP_404_NOT_FOUND)
        
        serializer = UpdateProductSerializer(product, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
      

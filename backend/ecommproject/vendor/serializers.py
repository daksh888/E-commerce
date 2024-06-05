# serializers.py
from rest_framework import serializers
from .models import Vendor,Category,Product
from ecommapp.models import CustomUser

class VendorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Vendor
        fields = ('id', 'email', 'name', 'city', 'phone')

    def validate(self, attrs):
        phone = attrs.get('phone')
        
        if phone is not None and len(str(phone)) != 10:
            raise serializers.ValidationError("Please Enter a valid Phone number")
   
        return attrs
    
    def create(self, validated_data):
        user = self.context['request'].user
        find_user = CustomUser.objects.filter(email=user.email).first()
       
        if find_user is None:
            raise serializers.ValidationError("User not found.")
        
        # Use the find_user.id for the id field in the validated_data
        validated_data['user'] = find_user
        
        # Create the Vendor instance with the validated data
        vendor = Vendor.objects.create(**validated_data)
        return vendor

class CategorySerializers(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['category_name']  # Exclude 'user' from fields

    def create(self, validated_data):
        user = self.context['request'].user 
        find_user = Vendor.objects.filter(email=user.email).first() # Get the user from the request context
        validated_data['user'] = find_user
        category = Category.objects.create(  **validated_data)
        return category
    
class GetAllCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'


class ProductSerializers(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ['category','name','in_stock','price','detail'] 

    def create(self, validated_data):
        user = self.context['request'].user 
        vendor_user = Vendor.objects.filter(email=user.email).first()
        validated_data['user'] = vendor_user
        product = Product.objects.create(  **validated_data)
        return product

class GetAllProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = '__all__'

class UpdateProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = '__all__'

    
class UpdateVendorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Vendor
        fields = '__all__'

    
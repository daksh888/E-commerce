# serializers.py
from rest_framework import serializers
from .models import Vendor,Category,Product

class VendorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Vendor
        fields = ('id', 'email', 'name', 'city', 'phone')

    def validate(self, attrs):
        # password = attrs.get('password')
        # password2 = attrs.get('password2')
        phone = attrs.get('phone')

        # if password != password2:
        #     raise serializers.ValidationError("Password and Confirm Password doesn't match")
        
        if phone is not None and len(str(phone)) != 10:
            raise serializers.ValidationError("Please Enter a valid Phone number")
   
        return attrs
    
    # def create(self, validated_data):
    #     user = Vendor.objects.create_user(**validated_data)
    #     return user

class CategorySerializers(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'

class ProductSerializers(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = '__all__'
from rest_framework import permissions

class IsVendor(permissions.BasePermission):
    """
    Custom permission to only allow vendors to create products and categories.
    """
    def has_permission(self, request, view):
        # Check if the user is authenticated
        if not request.user.is_authenticated:
            return False

        # Check if the user is a vendor
        if hasattr(request.user, 'vendor'):
            return True
        
        return False

from rest_framework import viewsets
from product_sparrer.users.serializers import UserSerializer
from .models import CustomUser


class UsersViewSet(viewsets.ModelViewSet):
    queryset = CustomUser.objects.all().order_by('-id')
    serializer_class = UserSerializer

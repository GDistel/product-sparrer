from rest_framework import viewsets
from rest_framework.authtoken.models import Token
from product_sparrer.users.serializers import UserSerializer
from django.contrib.auth.hashers import make_password
from .models import CustomUser


class UsersViewSet(viewsets.ModelViewSet):
    queryset = CustomUser.objects.all().order_by('-id')
    serializer_class = UserSerializer

    def perform_create(self, serializer):
        serializer.save(password=make_password(self.request.data.get('password')))

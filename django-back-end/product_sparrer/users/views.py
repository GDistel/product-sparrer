import os
from rest_framework import viewsets
from rest_framework.authtoken.models import Token
from product_sparrer.users.serializers import UserSerializer
from django.contrib.auth.hashers import make_password
from .models import CustomUser
from product_sparrer.utils.email import send_gmail

url = str(os.environ.get('HOST_URL')) + '/verify-email/{0}'
verification_email = '''Thank you for registering to Product-Sparrer.
                        Please click in the following link to validate your account: {0}'''

class UsersViewSet(viewsets.ModelViewSet):
    queryset = CustomUser.objects.all().order_by('-id')
    serializer_class = UserSerializer

    def perform_create(self, serializer):
        serializer.save(password=make_password(self.request.data.get('password')))
        user = CustomUser.objects.get(username = self.request.data.get('username'))
        send_gmail(
            destinatary = user.email,
            subject = 'Product-Sparrer: Please validate your account',
            body = verification_email.format(url.format(user.id)))

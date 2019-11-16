import json
from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.authtoken.models import Token
from rest_framework.response import Response
from product_sparrer.users.models import CustomUser
from rest_framework.exceptions import PermissionDenied


def home(request):
    return render(request, 'home.html')

class CustomObtainAuthToken(ObtainAuthToken):
    def post(self, request, *args, **kwargs):
        try:
            user = CustomUser.objects.get(username=request.data['username'])
            if user.verified_email:
                response = super(CustomObtainAuthToken, self).post(request, *args, **kwargs)
                token = Token.objects.get(key=response.data['token'])
                return Response( {'token': token.key, 'user': { 'username': user.username, 'email': user.email }} )
            else:
                raise PermissionDenied({
                        "message": "The user\'s email address has not been verified"
                    })
        except CustomUser.DoesNotExist:
                raise PermissionDenied({
                        "message": "The user does not exist"
                    })

def verify_email(request, pk):
    if request.method == 'GET':
        try:
            user = CustomUser.objects.get(pk=pk)
            user.verified_email = True
            user.save()
            return JsonResponse({
                    'username': user.username,
                    'password': user.password,
                    'verified_email': user.verified_email})
        except CustomUser.DoesNotExist:
            return JsonResponse({
                    'username': None,
                    'password': None,
                    'verified_email': False})
    else:
        return HttpResponse('Method not allowed. Only GET is allowed.')

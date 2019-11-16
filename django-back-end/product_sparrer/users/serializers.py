from django.contrib.auth.models import User, Group
from rest_framework import serializers
from .models import CustomUser
from product_sparrer.tickets.models import TicketsModel

class UserSerializer(serializers.ModelSerializer):
    tickets = serializers.PrimaryKeyRelatedField(
        many=True,
        queryset=TicketsModel.objects.all(),
        required=False
    )

    class Meta:
        model = CustomUser
        fields = ('id', 'username', 'email', 'password', 'tickets', 'verified_email')
        extra_kwargs = {'password': {'write_only': True}}

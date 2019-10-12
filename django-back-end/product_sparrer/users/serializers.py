from django.contrib.auth.models import User, Group
from rest_framework import serializers
from .models import CustomUser
from product_sparrer.tickets.models import TicketsModel

class UserSerializer(serializers.ModelSerializer):
    tickets = serializers.PrimaryKeyRelatedField(many=True, queryset=TicketsModel.objects.all())

    class Meta:
        model = CustomUser
        fields = ('id', 'username', 'email', 'tickets')

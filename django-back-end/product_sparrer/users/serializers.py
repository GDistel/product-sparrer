from django.contrib.auth.models import User, Group
from rest_framework import serializers
from .models import CustomUser
from product_sparrer.tickets.models import TicketsModel

class UserSerializer(serializers.ModelSerializer):
    tickets = serializers.PrimaryKeyRelatedField(many=True, queryset=TicketsModel.objects.all(), required=False)

    class Meta:
        model = CustomUser
        fields = ('id', 'username', 'email', 'password', 'tickets')
        extra_kwargs = {'password': {'write_only': True}}

    # def create(self, validated_data):
    #     user = CustomUser.objects.create(
    #         email = validated_data['email'],
    #         username = validated_data['username'],
    #         password = make_password(validated_data['password']
    #         tickets = validated_data['tickets'])
    #     )
    #     return user

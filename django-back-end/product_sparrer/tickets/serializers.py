from django.contrib.auth.models import User, Group
from rest_framework import serializers
from .models import TicketsModel


class TicketsSerializer(serializers.HyperlinkedModelSerializer):
    owner = serializers.ReadOnlyField(source='owner.username')

    class Meta:
        model = TicketsModel
        fields = ('owner', 'id', 'url', 'type', 'status', 'subject', 'body')


class UserSerializer(serializers.ModelSerializer):
    tickets = serializers.PrimaryKeyRelatedField(many=True, queryset=TicketsModel.objects.all())

    class Meta:
        model = User
        fields = ('id', 'username', 'tickets')

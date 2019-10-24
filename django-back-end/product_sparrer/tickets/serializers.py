from django.contrib.auth.models import User, Group
from rest_framework import serializers
from .models import TicketsModel, TicketsDeploymentModel


class TicketsSerializer(serializers.HyperlinkedModelSerializer):
    owner = serializers.ReadOnlyField(source='owner.username')

    class Meta:
        model = TicketsModel
        fields = ('owner', 'id', 'url', 'type', 'status', 'subject', 'body')


class TicketsDeploymentSerializer(serializers.ModelSerializer):
    owner = serializers.ReadOnlyField(source='owner.username')

    class Meta:
        model = TicketsDeploymentModel
        fields = ('owner','destinatary','deploy',)

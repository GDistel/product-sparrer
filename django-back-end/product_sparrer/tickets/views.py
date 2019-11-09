import json
from rest_framework import viewsets
from rest_framework.authtoken.models import Token
from product_sparrer.tickets.serializers import TicketsSerializer, TicketsDeploymentSerializer
from .models import TicketsModel, TicketsDeploymentModel
from .tasks import deploy_tickets

class TicketsViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows tickets to be viewed or edited.
    """
    queryset = TicketsModel.objects.all().order_by('-id')
    serializer_class = TicketsSerializer

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)

    def get_queryset(self):
        user = self.request.user
        return TicketsModel.objects.filter(owner=user).order_by('-id')


class TicketsDeploymentViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows tickets to be deployed.
    """
    queryset = TicketsDeploymentModel.objects.all().order_by('-id')
    serializer_class = TicketsDeploymentSerializer

    def perform_create(self, serializer):
        destinatary = self.request.data.get('destinatary')
        request_user = self.request.user
        serializer.save(owner=request_user)
        deploy_tickets.apply_async([request_user.email, destinatary])

    def get_queryset(self):
        user = self.request.user
        return TicketsDeploymentModel.objects.filter(owner=user).order_by('-id')

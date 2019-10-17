from rest_framework import viewsets
from rest_framework.authtoken.models import Token
from product_sparrer.tickets.serializers import TicketsSerializer
from .models import TicketsModel


class TicketsViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows tickets to be viewed or edited.
    """
    queryset = TicketsModel.objects.all().order_by('-id')
    serializer_class = TicketsSerializer

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)

    def get_queryset(self):
        # token = self.request.META.get('HTTP_AUTHORIZATION').split(' ')[1]
        # user = Token.objects.get(key=token).user
        user = self.request.user
        return TicketsModel.objects.filter(owner=user)

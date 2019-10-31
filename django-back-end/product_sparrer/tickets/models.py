from django.db import models
from django.contrib import auth
from django.dispatch import receiver
from django.db.models.signals import post_save
from product_sparrer.settings.base import AUTH_USER_MODEL

class TicketsModel(models.Model):
    TICKET_TYPE = (
        ('Bug', 'Bug'),
        ('UX issue', 'UX issue'),
        ('Process-related', 'Process-related'),
    )

    TICKET_STATUS = (
        ('Ready', 'Ready'),
        ('Draft', 'Draft'),
    )

    owner = models.ForeignKey(AUTH_USER_MODEL, related_name='tickets', on_delete=models.CASCADE)
    type = models.CharField(max_length=20, unique=False, choices=TICKET_TYPE)
    status = models.CharField(max_length=10, unique=False, choices=TICKET_STATUS)
    subject = models.CharField(max_length=20, unique=True, blank=False, help_text="e.g. Academy Ticket 'S8'")
    body = models.TextField(max_length=1000, unique=False, blank=False, db_index=False)

    def __str__(self):
        return self.subject

class TicketsDeploymentModel(models.Model):
    owner = models.ForeignKey(AUTH_USER_MODEL, related_name='deployments', on_delete=models.CASCADE)
    destinatary = models.EmailField()
    deploy = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return 'Deploy to {}'.format(self.destinatary)

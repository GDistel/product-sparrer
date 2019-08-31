from django.db import models
from django.contrib import auth
from django.dispatch import receiver
from django.db.models.signals import post_save

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

    owner = models.ForeignKey('auth.User', related_name='tickets', on_delete=models.CASCADE)
    type = models.CharField(max_length=20, unique=False, choices=TICKET_TYPE)
    status = models.CharField(max_length=10, unique=False, choices=TICKET_STATUS)
    subject = models.CharField(max_length=20, unique=True, blank=False, help_text="e.g. Academy Ticket 'S8'")
    body = models.TextField(max_length=1000, unique=False, blank=False, db_index=False)

    def __str__(self):
        return self.subject

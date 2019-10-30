import time
import random
from celery import shared_task
from product_sparrer.utils import email
from .models import TicketsModel, TicketsDeploymentModel
from product_sparrer.users.models import CustomUser


@shared_task
def deploy_tickets(owner_email, destinatary):
    deployment_instance = TicketsDeploymentModel.objects.last()
    owner = CustomUser.objects.get(email=owner_email)
    all_tickets = TicketsModel.objects.filter(owner=owner, status='Ready')
    print('Sending tickets to {}...'.format(destinatary))

    for counter,ticket in enumerate(all_tickets):
        try:
            email.send_email(destinatary=destinatary, subject=ticket.subject, body=ticket.body)
            sent_tickets = '{} out of {}'.format(counter + 1, len(all_tickets))
            print(sent_tickets + ' tickets have been sent.')
            time.sleep(random.randint(2,5))
        except:
            return print('An exception occurred: most probably an HTTP connection error.')

    deployment_instance.deploy = False
    deployment_instance.save()
    return print('All tickets have been sent')

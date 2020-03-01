import os
from django.core.mail import send_mail
from django.conf import settings

from sendgrid import SendGridAPIClient
from sendgrid.helpers.mail import Mail

def send_email(destinatary='product-sparrer@mailinator.com', subject=' ', body='Empty'):
    message = Mail(
        from_email='noreply@product-sparrer.com',
        to_emails= destinatary,
        subject=subject,
        html_content=body
    )
    try:
        sg = SendGridAPIClient(os.environ.get('SENDGRID_API_KEY'))
        response = sg.send(message)
    except Exception as e:
        print(str(e))

def send_gmail(destinatary='product-sparrer@mailinator.com', subject=' ', body='Empty'):
    email_from = settings.EMAIL_HOST_USER
    recipient_list = [destinatary,]
    send_mail( subject, body, email_from, recipient_list )

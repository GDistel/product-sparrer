import os
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
        print(response.status_code)
    except Exception as e:
        print(str(e))

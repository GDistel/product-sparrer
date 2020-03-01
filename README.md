# product-sparrer
Application to create, maintain and deploy a pool of hypothetical product issues for the purpose of training support teams. For example, in tech companies such as SaaS startups or similar.

A live example can be found at https://product-sparrer.herokuapp.com/

If you do not want to create a user, here are some test credentials:

Username: product-sparrer-test
Password: ps989898

## About the application architecture

Angular front-end decoupled from a Django back-end (Django Rest Framework).
It's a basic CRUD app. I used Angular Material for the user interface (UI).
It uses Token authentication and I've tried to implement a 'Fachade' design pattern, even if it is way overkill for such a small project. This can be seen in each feature's directory in the angular-front-end folder.

I've used python's Sendgrid package for emailing.
The app uses Celery and RabbitMQ for async tasks.

## Use concept and further development

The idea behind this small application is to create and deploy fake tickets. These tickets can then be dealt with by a team member being onboarded at your organization (for example). We simulate a pool of product issues that our new colleague needs to solve. Ideally those issues are based on real past ones. A more experienced colleague (maybe his/her mentor during onboarding/training) could then have a talk with him/her to discuss the correct answers.

Tickets are sent at random intervals of 2 to 5 seconds. A more realistic approach would be for them to be sent at
irregular times in broader intervals (e.g. 1 second to 50 minutes). This would be a new feature to develop, if custom time is required, or a small parameters adjustment in the Tickets deployment view in Django.

Also, the tickets categorization (type field) is constrained to three different categories for the moment:

* Bug: self-explanatory

* Process-related: issues that relate more to lack of training or user error (sometimes more prone to happen when teams collaborate together).

* UX issue: bad UX that gets in the users way and causes an issue.

These three are somewhat arbitrary and the next step would be to develop a custom categorization feature, in which
the user can define his/her own categories.

For the moment testing is missing, both Unit tests and E2E tests.

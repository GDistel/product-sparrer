from .base import *
import dj_database_url

db_from_env = dj_database_url.config(conn_max_age=500)
DATABASES['default'].update(db_from_env)

STATICFILES_STORAGE = 'whitenoise.storage.CompressedManifestStaticFilesStorage'

ALLOWED_HOSTS = [
    'product-sparrer.herokuapp.com',
]

BROKER_URL = os.environ.get('CLOUDAMQP_URL', '')
BROKER_POOL_LIMIT = 1
BROKER_HEARTBEAT = None
BROKER_CONNECTION_TIMEOUT = 30
CELERY_BROKER_URL = os.environ.get('CLOUDAMQP_URL')
CELERY_BROKER_POOL_LIMIT = 1
CELERY_BROKER_HEARTBEAT = None # We're using TCP keep-alive instead
CELERY_BROKER_CONNECTION_TIMEOUT = 30 # May require a long timeout due to Linux DNS timeouts etc
CELERY_RESULT_BACKEND = None # AMQP is not recommended as result backend as it creates thousands of queues
CELERY_EVENT_QEUE_EXPIRES = 60 # Will delete all celeryev. queues without consumers after 1 minute.
CELERY_WORKER_PREFETCH_MULTIPLIER = 1 # Disable prefetching, it's causes problems and doesn't help performance
CELERY_WORKER_CONCURRENCY = 50 # If you tasks are CPU bound, then limit to the number of cores, otherwise increase substainally

REST_FRAMEWORK['DEFAULT_AUTHENTICATION_CLASSES'] = ('rest_framework.authentication.TokenAuthentication',)

CORS_ORIGIN_WHITELIST = (
    'https://product-sparrer.herokuapp.com',
)

DEBUG = False
SECURE_SSL_REDIRECT = True
CSRF_COOKIE_SECURE = False
SESSION_COOKIE_SECURE = True
X_FRAME_OPTIONS = 'DENY'
SECURE_BROWSER_XSS_FILTER = True
SECURE_CONTENT_TYPE_NOSNIFF = True

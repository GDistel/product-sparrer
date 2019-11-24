from .base import *

CORS_ORIGIN_WHITELIST = (
    'http://localhost:4200',
    'http://127.0.0.1:8000'
)

CELERY_BROKER_POOL_LIMIT = 1
CELERY_BROKER_HEARTBEAT = None # We're using TCP keep-alive instead
CELERY_BROKER_CONNECTION_TIMEOUT = 30 # May require a long timeout due to Linux DNS timeouts etc
CELERY_RESULT_BACKEND = None # AMQP is not recommended as result backend as it creates thousands of queues
CELERY_EVENT_QEUE_EXPIRES = 60 # Will delete all celeryev. queues without consumers after 1 minute.
CELERY_WORKER_PREFETCH_MULTIPLIER = 1 # Disable prefetching, it's causes problems and doesn't help performance
CELERY_WORKER_CONCURRENCY = 50 # If you tasks are CPU bound, then limit to the number of cores, otherwise increase substainally

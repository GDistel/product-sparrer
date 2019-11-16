from django.urls import include, path
from django.contrib import admin
from rest_framework.authtoken.views import obtain_auth_token
from . import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.home, name='home'),
    path('api/', include('product_sparrer.tickets.urls')),
    path('api/', include('product_sparrer.users.urls')),
    path('api-token-auth/', views.CustomObtainAuthToken.as_view(), name='api_token_auth'),
    path('verify-email/<uuid:pk>', views.verify_email, name='verify_email')
]

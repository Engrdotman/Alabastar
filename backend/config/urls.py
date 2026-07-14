from django.contrib import admin
from django.urls import path
from django.http import JsonResponse


def home(request):
    return JsonResponse({'message': 'Welcome to Alabastar API'})

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', home, name='home'),
]

from django.urls import path
from .views import HabitacionListAPIView

urlpatterns = [
    path("api/habitacion/", HabitacionListAPIView.as_view(), name="habitacionesAPI")
]

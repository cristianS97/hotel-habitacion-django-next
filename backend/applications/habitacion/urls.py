from django.urls import path
from .views import HabitacionListAPIView, HotelRetrieveUpdateDeleteAPIView

urlpatterns = [
    path("api/habitacion/", HabitacionListAPIView.as_view(), name="habitacionesAPI"),
    path("api/habitacion/<int:pk>", HotelRetrieveUpdateDeleteAPIView.as_view(), name="habitacionesAPI")
]

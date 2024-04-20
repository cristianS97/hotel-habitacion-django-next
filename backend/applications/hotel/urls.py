from django.urls import path
from .views import HotelListCreateAPIView, HotelRetrieveUpdateDeleteAPIView

urlpatterns = [
    path("api/hotel/", HotelListCreateAPIView.as_view(), name="hoteles"),
    path("api/hotel/<int:pk>", HotelRetrieveUpdateDeleteAPIView.as_view(), name="hotel")
]
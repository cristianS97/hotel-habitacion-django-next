from django.urls import path
from .views import HotelListView, HotelListAPIView, HotelCreateAPIView

urlpatterns = [
    path("hotel/", HotelListView.as_view(), name="hoteles"),
    path("api/hotel/", HotelListAPIView.as_view(), name="hotelesAPI"),
    path("api/hotel/crear/", HotelCreateAPIView.as_view(), name="crearHotelAPI")
]

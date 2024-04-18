from django.urls import path
from .views import HotelListView, HotelListAPIView, HotelCreateAPIView, HotelRetrieveAPIView, HotelUpdateAPIView

urlpatterns = [
    path("hotel/", HotelListView.as_view(), name="hoteles"),
    path("api/hotel/", HotelListAPIView.as_view(), name="hotelesAPI"),
    path("api/hotel/<int:pk>", HotelRetrieveAPIView.as_view(), name="hotelAPI"),
    path("api/hotel/crear/", HotelCreateAPIView.as_view(), name="crearHotelAPI"),
    path("api/hotel/actualizar/<int:pk>", HotelUpdateAPIView.as_view(), name="actualizarHotelAPI")
]

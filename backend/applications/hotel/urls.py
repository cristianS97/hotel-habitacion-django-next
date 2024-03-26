from django.urls import path
from .views import HotelListView, HotelListAPIView

urlpatterns = [
    path("hotel/", HotelListView.as_view(), name="hoteles"),
    path("api/hotel/", HotelListAPIView.as_view(), name="hotelesAPI")
]

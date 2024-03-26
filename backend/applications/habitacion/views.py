from django.shortcuts import render
from .models import Habitacion
from applications.hotel.models import Hotel
from rest_framework import generics
from .serializers import HabitacionSerializer

# Create your views here.
class HabitacionListAPIView(generics.ListAPIView):
    model = Habitacion
    serializer_class = HabitacionSerializer

    def get_queryset(self):
        if len(self.request.GET) > 0:
            hotel = Hotel.objects.get(pk=self.request.GET["idHotel"])
            return Habitacion.objects.filter(hotel=hotel)
        else:
            return Habitacion.objects.all()
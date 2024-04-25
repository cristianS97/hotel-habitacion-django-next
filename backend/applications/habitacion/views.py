from django.shortcuts import render
from .models import Habitacion
from applications.hotel.models import Hotel
from rest_framework import generics, status
from rest_framework.response import Response
from .serializers import HabitacionSerializer

class HabitacionListAPIView(generics.ListCreateAPIView):
    serializer_class = HabitacionSerializer

    def get_queryset(self):
        if len(self.request.GET) > 0:
            hotel = Hotel.objects.get(pk=self.request.GET["idHotel"])
            return Habitacion.objects.filter(hotel=hotel)
        else:
            return Habitacion.objects.all()

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)

class HotelRetrieveUpdateDeleteAPIView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = HabitacionSerializer
    queryset = Habitacion.objects.all()
from django.shortcuts import render
from django.views.generic import ListView
from .models import Hotel
from rest_framework import generics
from .serializers import HotelSerializer

# Create your views here.
class HotelListView(ListView):
    model=Hotel
    template_name="hoteles.html"

class HotelListAPIView(generics.ListAPIView):
    model = Hotel
    serializer_class = HotelSerializer
    queryset = Hotel.objects.all()

class HotelRetrieveAPIView(generics.RetrieveAPIView):
    model = Hotel
    serializer_class = HotelSerializer
    queryset = Hotel.objects.all()

class HotelCreateAPIView(generics.CreateAPIView):
    model = Hotel
    serializer_class = HotelSerializer
    queryset = Hotel.objects.all()

class HotelUpdateAPIView(generics.UpdateAPIView):
    model = Hotel
    serializer_class = HotelSerializer
    queryset = Hotel.objects.all()
from django.shortcuts import render
from django.views.generic import ListView
from .models import Hotel
from rest_framework import generics
from .serializers import HotelSerializer

# Create your views here.
class HotelListView(ListView):
    model=Hotel
    template_name="hoteles.html"

class HotelListCreateAPIView(generics.ListCreateAPIView):
    serializer_class = HotelSerializer
    queryset = Hotel.objects.all()

class HotelRetrieveUpdateDeleteAPIView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = HotelSerializer
    queryset = Hotel.objects.all()
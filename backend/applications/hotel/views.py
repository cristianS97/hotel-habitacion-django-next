from django.shortcuts import render
from django.views.generic import ListView
from .models import Hotel

# Create your views here.
class HotelListView(ListView):
    model=Hotel
    template_name="hoteles.html"
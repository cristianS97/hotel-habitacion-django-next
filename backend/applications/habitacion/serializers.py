from rest_framework import serializers
from .models import Habitacion

class HabitacionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Habitacion
        fields = ['id', 'hotel', 'numero', 'ocupado']
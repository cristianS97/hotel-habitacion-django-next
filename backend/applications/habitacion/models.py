from django.db import models
from applications.hotel.models import Hotel

# Create your models here.
class Habitacion(models.Model):
    OCUPADO_CHOICES = [
        ("si", "Si"),
        ("no", "No")
    ]
    hotel = models.ForeignKey(Hotel, verbose_name="Hotel", on_delete=models.CASCADE)
    numero = models.IntegerField(verbose_name="Número de la habitación")
    ocupado = models.CharField(verbose_name="Ocupada", max_length=2, choices=OCUPADO_CHOICES)

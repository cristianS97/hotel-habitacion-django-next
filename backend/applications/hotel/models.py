from django.db import models

# Create your models here.
class Hotel(models.Model):
    nombre = models.CharField(verbose_name="Nombre", max_length=50)
    calle = models.CharField(verbose_name="Calle", max_length=50)
    numero = models.IntegerField(verbose_name="Número dirección")
    comuna = models.CharField(verbose_name="Comuna", max_length=50)
    telefono = models.IntegerField(verbose_name="Número telefonico")
    email = models.EmailField(verbose_name="Correo eléctronico")

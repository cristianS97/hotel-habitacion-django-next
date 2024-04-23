from django.test import TestCase
from rest_framework import status
from rest_framework.test import APIClient
from applications.habitacion.models import Habitacion, Hotel
from applications.habitacion.serializers import HabitacionSerializer

# Create your tests here.
client = APIClient()

class HotelTests(TestCase):
    def setUp(self) -> None:
        Hotel.objects.create(
            nombre="Hotel de prueba",
            calle="Calle 13",
            numero=123,
            comuna="Santiago",
            telefono=12345678,
            email="correo@correo.com"
        )
        Hotel.objects.create(
            nombre="Hotel de prueba 2",
            calle="Calle 13 2",
            numero=1232,
            comuna="Santiago",
            telefono=12345679,
            email="correo2@correo.com"
        )

        Habitacion.objects.create(
            hotel=Hotel.objects.get(pk=1),
            numero=1,
            ocupado='si'
        )
        Habitacion.objects.create(
            hotel=Hotel.objects.get(pk=1),
            numero=2,
            ocupado='si'
        )
        Habitacion.objects.create(
            hotel=Hotel.objects.get(pk=1),
            numero=3,
            ocupado='si'
        )
        
        Habitacion.objects.create(
            hotel=Hotel.objects.get(pk=2),
            numero=101,
            ocupado='si'
        )
        Habitacion.objects.create(
            hotel=Hotel.objects.get(pk=2),
            numero=102,
            ocupado='no'
        )
        Habitacion.objects.create(
            hotel=Hotel.objects.get(pk=2),
            numero=103,
            ocupado='si'
        )
        Habitacion.objects.create(
            hotel=Hotel.objects.get(pk=2),
            numero=104,
            ocupado='si'
        )

    def test_get_all_rooms(self):
        response = client.get('/api/habitacion/')
        habitaciones = Habitacion.objects.all()
        serializer = HabitacionSerializer(habitaciones, many=True)

        self.assertEqual(response.data, serializer.data)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(len(response.data), 7)

    def test_get_rooms_1(self):
        response = client.get('/api/habitacion/?idHotel=1')
        habitaciones = Habitacion.objects.filter(hotel_id=1)
        serializer = HabitacionSerializer(habitaciones, many=True)

        self.assertEqual(response.data, serializer.data)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(len(response.data), 3)

    def test_get_rooms_1(self):
        response = client.get('/api/habitacion/?idHotel=2')
        habitaciones = Habitacion.objects.filter(hotel_id=2)
        serializer = HabitacionSerializer(habitaciones, many=True)

        self.assertEqual(response.data, serializer.data)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(len(response.data), 4)

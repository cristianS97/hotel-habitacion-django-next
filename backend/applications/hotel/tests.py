from django.test import TestCase
from rest_framework import status
from rest_framework.test import APIClient
from applications.hotel.models import Hotel
from applications.hotel.serializers import HotelSerializer

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

    def test_get_all_hotels(self):
        response = client.get('/api/hotel/')
        hoteles = Hotel.objects.all()
        serializer = HotelSerializer(hoteles, many=True)

        self.assertEqual(response.data, serializer.data)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(len(response.data), 2)
        self.assertEqual(response.data[0]['nombre'], "Hotel de prueba")
        self.assertEqual(response.data[1]['nombre'], "Hotel de prueba 2")
        self.assertEqual(response.data[0]['id'], 6)
        self.assertEqual(response.data[1]['id'], 7)

    def test_get_hotel(self):
        response = client.get('/api/hotel/6')
        hotel = Hotel.objects.get(pk=6)
        serializer = HotelSerializer(hotel, many=False)

        self.assertEqual(response.data, serializer.data)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data['nombre'], "Hotel de prueba")

    def test_update_hotel(self):
        response = client.get('/api/hotel/7')
        hotel = Hotel.objects.get(pk=7)
        serializer = HotelSerializer(hotel, many=False)

        self.assertEqual(response.data, serializer.data)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data['nombre'], "Hotel de prueba")

        client.put('/api/hotel/1', {"nombre":"Hotel de prueba 2", "calle":"Calle 13 2", "numero":1232, "comuna":"Santiago", "telefono":12345679, "email":"correo2@correo.com"})
        response = client.get('/api/hotel/1')
        hotel = Hotel.objects.get(pk=1)
        serializer = HotelSerializer(hotel, many=False)

        self.assertEqual(response.data, serializer.data)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data['nombre'], "Hotel de prueba 2")

    def test_create_hotel(self):
        client.post('/api/hotel/', {"nombre":"Hotel de prueba 3", "calle":"Calle 13 2", "numero":1232, "comuna":"Santiago", "telefono":12345679, "email":"correo2@correo.com"})
        response = client.get('/api/hotel/')
        hoteles = Hotel.objects.all()
        serializer = HotelSerializer(hoteles, many=True)

        self.assertEqual(response.data, serializer.data)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(len(response.data), 3)

    def test_delete_hotel(self):
        response = client.get('/api/hotel/')
        hoteles = Hotel.objects.all()
        serializer = HotelSerializer(hoteles, many=True)

        self.assertEqual(response.data, serializer.data)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(len(response.data), 2)

        client.delete('/api/hotel/1')
        response = client.get('/api/hotel/')
        hoteles = Hotel.objects.all()
        serializer = HotelSerializer(hoteles, many=True)

        self.assertEqual(response.data, serializer.data)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(len(response.data), 2)

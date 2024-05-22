# hotel-habitacion-django-next

Breve descripción de lo que hace tu proyecto.

## Tabla de Contenidos

1. [Descripción](#descripción)
2. [Tecnologías Utilizadas](#tecnologías-utilizadas)
3. [Requisitos](#requisitos)
4. [Instalación](#instalación)
5. [Uso](#uso)
6. [Configuración](#configuración)
7. [Dependencias del Backend](#dependencias-del-backend)
8. [Pruebas](#pruebas)
9. [Despliegue](#despliegue)

## Descripción

Describe detalladamente el propósito del proyecto, sus características principales y cualquier información relevante sobre su funcionalidad.

## Tecnologías Utilizadas

- **Backend**: Django, Django REST Framework
- **Base de Datos**: PostgreSQL
- **Frontend**: Next.js, Tailwind CSS
- **CI/CD**: GitHub Actions
- **Contenedores**: Docker y Docker Compose

## Requisitos

Lista de requisitos necesarios para ejecutar el proyecto:

- Docker
- Docker Compose
- Node.js (para el frontend)
- Python (para el backend)

## Instalación

Pasos para instalar y configurar el entorno de desarrollo:

1. Clonar el repositorio:
    ```bash
    git clone https://github.com/cristianS97/hotel-habitacion-django-next.git
    cd hotel-habitacion-django-next
    ```

2. Construir y ejecutar los contenedores con Docker Compose:
    ```bash
    docker-compose up --build
    ```

## Uso

Instrucciones básicas para usar el proyecto una vez que esté configurado:

1. Acceder a la aplicación:
    - Backend: `http://localhost:8000`
        - Credenciales:
            - user: `admin`
            - password: `admin`
    - Frontend: `http://localhost:3000`
    - Base de datos (Adminer): `http://localhost:8080`

## Configuración

Las variables de entorno necesarias para el proyecto se encuentran directamente en el archivo `docker-compose.yml`.

## Dependencias del Backend

Lista de dependencias utilizadas en el backend (Django):

- asgiref==3.8.1
- Django==4.2.11
- django-cors-headers==4.3.1
- django-filter==24.1
- djangorestframework==3.15.1
- importlib_metadata==7.1.0
- Markdown==3.6
- psycopg2==2.9.9
- sqlparse==0.4.4
- typing_extensions==4.10.0
- tzdata==2024.1
- zipp==3.18.1

Estas dependencias se encuentran en el archivo `requirements.txt` y se instalan automáticamente durante el proceso de construcción del contenedor Docker.

## Pruebas

Cómo ejecutar las pruebas para el proyecto:

1. Para el backend (Django y Django REST Framework):
    ```bash
    docker-compose exec backend python manage.py test
    ```

2. Para el frontend (Next.js con Tailwind CSS):
    ```bash
    cd frontend
    npm test
    ```

## Despliegue

Pasos para desplegar el proyecto en un entorno de producción:

1. Configurar las variables de entorno para producción.
2. Construir las imágenes de Docker para producción.
    ```bash
    docker-compose up --build
    ```

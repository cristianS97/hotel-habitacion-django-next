'use client'
import { useState, useEffect } from "react";
import Link from 'next/link';

interface IHotel {
  "id": number,
  "nombre": string,
  "calle": string,
  "numero": number,
  "comuna": string,
  "telefono": number,
  "email": string
}

export default function Hotel() {
  const [hoteles, setHoteles] = useState<IHotel[]>([]);

  useEffect(() => {
    const getHoteles = () => {
      fetch("http://localhost:8000/api/hotel")
        .then(response => response.json())
        .then(data => setHoteles(data));
    }

    getHoteles();
  }, [])

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1>Listado de hoteles</h1>

      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Id
              </th>
              <th scope="col" className="px-6 py-3">
                Nombre
              </th>
              <th scope="col" className="px-6 py-3">
                Calle
              </th>
              <th scope="col" className="px-6 py-3">
                Número
              </th>
              <th scope="col" className="px-6 py-3">
                Comuna
              </th>
              <th scope="col" className="px-6 py-3">
                Telefono
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Acción
              </th>
            </tr>
          </thead>
          <tbody>
            {hoteles.map(hotel => (
              <tr key={hotel.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {hotel.id}
                </th>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {hotel.nombre}
                </th>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {hotel.calle}
                </th>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  #{hotel.numero}
                </th>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {hotel.comuna}
                </th>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {hotel.telefono}
                </th>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {hotel.email}
                </th>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  <Link className="font-medium text-blue-600 dark:text-blue-500 hover:underline" href={'habitacion?idHotel=' + hotel.id}>Habitaciones</Link>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}

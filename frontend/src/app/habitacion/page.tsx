'use client'
import { useState, useEffect } from "react";
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

interface IHabitacion {
  "id": number,
  "hotel": number,
  "numero": number,
  "ocupado": string,
}

export default function Hotel() {
  const searchParams = useSearchParams();
  const idHotel = searchParams.get("idHotel");
  const [habitaciones, setHabitaciones] = useState<IHabitacion[]>([]);

  useEffect(() => {
    const getHabitaciones = () => {
      fetch("http://localhost:8000/api/habitacion?idHotel="+idHotel)
        .then(response => response.json())
        .then(data => setHabitaciones(data));
    }

    getHabitaciones();
  }, [])

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1>Listado de habitaciones<br/><Link className="font-medium text-blue-600 dark:text-blue-500 hover:underline" href={'hotel'}>Volver a hoteles</Link></h1>

      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Id
              </th>
              <th scope="col" className="px-6 py-3">
                Número
              </th>
              <th scope="col" className="px-6 py-3">
                Ocupada
              </th>
            </tr>
          </thead>
          <tbody>
            {habitaciones.map(habitacion => (
              <tr key={habitacion.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {habitacion.id}
                </th>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {habitacion.numero}
                </th>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {habitacion.ocupado}
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}

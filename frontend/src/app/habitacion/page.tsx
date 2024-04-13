'use client'
import { useState, useEffect } from "react";
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import IHabitacion from '@/interfaces/interfaceHabitacion';
import IHotel from "@/interfaces/interfaceHotel";
import { useFetchData } from "@/hooks/useFetchData";
import { Table } from "@/components/Table";
import { THead } from "@/components/THead";
import { Row } from "@/components/Row";
import { TH } from "@/components/TH";
import { TBody } from "@/components/TBody";
import { Cell } from "@/components/Cell";

export default function HabitacionView() {
  const searchParams = useSearchParams();
  const idHotel = searchParams.get("idHotel");
  const [habitaciones, setHabitaciones] = useState<IHabitacion[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    useFetchData({
      url: "http://localhost:8000/api/habitacion?idHotel="+idHotel,
      setData: (data: IHotel[] | IHabitacion[]) => setHabitaciones(data as IHabitacion[]),
      setLoading: setLoading
    });
  }, [])

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1>Listado de habitaciones<br/><Link className="font-medium text-blue-600 dark:text-blue-500 hover:underline" href={'hotel'}>Volver a hoteles</Link></h1>

      {loading ? 
        <div className="loader mt-5"></div>
        :
        <div className="relative overflow-x-auto">
          <Table>
            <THead>
              <Row headerRow={true}>
                <TH value="Id" />
                <TH value="Número" />
                <TH value="Ocupada" />
              </Row>
            </THead>
            <TBody>
              {habitaciones.map(habitacion => (
                <Row key={habitacion.id} headerRow={false}>
                  <Cell value={habitacion.id} />
                  <Cell value={habitacion.numero} />
                  <Cell value={habitacion.ocupado} />
                </Row>
              ))}
            </TBody>
          </Table>
        </div>
      }
    </main>
  );
}

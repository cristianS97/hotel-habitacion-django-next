'use client'
import { useState, useEffect } from "react";
import Link from 'next/link';
import IHotel from "@/interfaces/interfaceHotel";
import { useFetchData } from "@/hooks/useFetchData";
import { Table } from "@/components/Table";
import { THead } from "@/components/THead";
import { Row } from "@/components/Row";
import { TH } from "@/components/TH";
import { TBody } from "@/components/TBody";
import { Cell } from "@/components/Cell";

export default function Hotel() {
  const [hoteles, setHoteles] = useState<IHotel[]>([]);

  useEffect(() => {
    useFetchData("http://localhost:8000/api/hotel", setHoteles);
  }, [])

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1>Listado de hoteles</h1>

      <div className="relative overflow-x-auto">
        <Table>
          <THead>
            <Row headerRow={true}>
              <TH value="Id" />
              <TH value="Nombre" />
              <TH value="Calle" />
              <TH value="Número" />
              <TH value="Comuna" />
              <TH value="Telefono" />
              <TH value="Email" />
              <TH value="Acción" />
            </Row>
          </THead>
          <TBody>
            {hoteles.map(hotel => (
              <Row key={hotel.id} headerRow={false}>
                <Cell value={hotel.id} />
                <Cell value={hotel.nombre} />
                <Cell value={hotel.calle} />
                <Cell value={hotel.numero} />
                <Cell value={hotel.comuna} />
                <Cell value={hotel.telefono} />
                <Cell value={hotel.email} />
                <Cell value={<Link className="font-medium text-blue-600 dark:text-blue-500 hover:underline" href={'habitacion?idHotel=' + hotel.id}>Habitaciones</Link>} />
              </Row>
            ))}
          </TBody>
        </Table>
      </div>
    </main>
  );
}

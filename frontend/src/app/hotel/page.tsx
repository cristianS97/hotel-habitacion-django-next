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
import { Modal } from "@/components/Modal";

export default function Hotel() {
  const [hoteles, setHoteles] = useState<IHotel[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [visibleModal, setVisibleModal] = useState<boolean>(false);

  useEffect(() => {
    useFetchData("http://localhost:8000/api/hotel", setHoteles, setLoading);
  }, [])

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1>Listado de hoteles</h1>

      {loading ? 
        <div className="loader mt-5"></div>
        :
        <div className="relative overflow-x-auto">
          <button onClick={() => setVisibleModal(true)} className="text-white bg-blue-800 dark:bg-blue-700 hover:bg-blue-800 focus:outline-none font-medium text-sm rounded-lg px-5 py-2.5 text-center mb-5">
            Registrar un hotel
          </button>
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
      }
      {visibleModal ?
        <Modal
          setVisibleModal={setVisibleModal}
        />
      : null}
    </main>
  );
}

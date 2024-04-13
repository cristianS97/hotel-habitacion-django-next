'use client'
import { useState, useEffect, ChangeEvent } from "react";
import Link from 'next/link';
import IHotel from "@/interfaces/interfaceHotel";
import IHabitacion from "@/interfaces/interfaceHabitacion";
import Hotel from "@/clases/Hotel";
import { useFetchData } from "@/hooks/useFetchData";
import { Table } from "@/components/Table";
import { THead } from "@/components/THead";
import { Row } from "@/components/Row";
import { TH } from "@/components/TH";
import { TBody } from "@/components/TBody";
import { Cell } from "@/components/Cell";
import { Modal } from "@/components/Modal";

export default function HotelView() {
  const [hoteles, setHoteles] = useState<IHotel[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [visibleModal, setVisibleModal] = useState<boolean>(false);
  const [nuevoHotel, setNuevoHotel] = useState<Hotel>({id: 0, nombre: "", calle: "", numero: 0, comuna: "", telefono: 0, email: ""});

  useEffect(() => {
    useFetchData({
      url: "http://localhost:8000/api/hotel",
      setData: (data: IHotel[] | IHabitacion[]) => setHoteles(data as IHotel[]),
      setLoading: setLoading
    });
  }, [])

  const handleHotelChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNuevoHotel({
      ...nuevoHotel,
      [name]: value
    })
  }

  const handleHotelSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    useFetchData({
      url: "http://localhost:8000/api/hotel/crear/",
      setData: (data: IHotel[] | IHabitacion[]) => setHoteles(data as IHotel[]),
      setLoading: setLoading,
      method: 'POST',
      nuevaData: nuevoHotel,
      listaObjetos: hoteles,
      setVisibleModal: setVisibleModal,
      setNuevaData: setNuevoHotel
    });
  };

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
                <TH value="Ver habitaciones" />
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
          handleHotelSubmit={handleHotelSubmit}
          handleHotelChange={handleHotelChange}
          nuevoHotel={nuevoHotel}
        />
      : null}
    </main>
  );
}

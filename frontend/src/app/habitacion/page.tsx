'use client'
import { useState, useEffect, ChangeEvent } from "react";
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import IHabitacion from '@/interfaces/interfaceHabitacion';
import Habitacion from "@/clases/Habitacion";
import { FormularioHabitacion } from "@/components/FormularioHabitacion";
import { useFetchData } from "@/hooks/useFetchHabitacion";
import { Table } from "@/components/Table";
import { THead } from "@/components/THead";
import { Row } from "@/components/Row";
import { TH } from "@/components/TH";
import { TBody } from "@/components/TBody";
import { Cell } from "@/components/Cell";
import { Modal } from "@/components/Modal";

export default function HabitacionView() {
  const searchParams = useSearchParams();
  const idHotel = searchParams.get("idHotel");
  const [habitaciones, setHabitaciones] = useState<IHabitacion[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [visibleModalRegistro, setVisibleModalRegistro] = useState<boolean>(false);
  const [visibleModalActualizar, setVisibleModalActualizar] = useState<boolean>(false);
  const [visibleModalEliminar, setVisibleModalEliminar] = useState<boolean>(false);
  const [nuevaHabitacion, setNuevaHabitacion] = useState<Habitacion>({id: 0, hotel: 0, numero: 0, ocupado: ""});

  useEffect(() => {
    useFetchData({
      url: "http://localhost:8000/api/habitacion?idHotel="+idHotel,
      setData: (data: IHabitacion[] | Habitacion | Habitacion[]) => setHabitaciones(data as IHabitacion[]),
      setLoading: setLoading
    });
  }, [])

  useEffect(() => {
    if(idHotel!==null)
    {
      setNuevaHabitacion({...nuevaHabitacion, hotel:parseInt(idHotel), ocupado:'no', numero:0})
    }
  }, [idHotel])

  const iniciaActualizacion = (idHabitacion:number):void => {
    setVisibleModalActualizar(true)
  }

  const handleDelete = (idHabitacion:number):void => {
    setVisibleModalEliminar(true)
  }

  const cancelDelete = ():void => {
    setVisibleModalEliminar(false)
    setNuevaHabitacion({id: 0, hotel: 0, numero: 0, ocupado: ""})
  }

  const confirmDelete = () => {
    useFetchData({
      url: `http://localhost:8000/api/habitacion/${nuevaHabitacion.id}`,
      setData: (data: IHabitacion[] | Habitacion | Habitacion[]) => setHabitaciones(data as IHabitacion[]),
      setLoading: setLoading,
      method: 'DELETE',
      nuevaData: nuevaHabitacion,
      listaObjetos: habitaciones,
      setVisibleModal: setVisibleModalEliminar,
      setNuevaData: setNuevaHabitacion
    });
  }

  const handleHabitacionSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    useFetchData({
      url: "http://localhost:8000/api/habitacion/",
      setData: (data: IHabitacion[] | Habitacion) => setHabitaciones(data as IHabitacion[]),
      setLoading: setLoading,
      method: 'POST',
      nuevaData: nuevaHabitacion,
      listaObjetos: habitaciones,
      setVisibleModal: setVisibleModalRegistro,
      setNuevaData: setNuevaHabitacion
    });
  };

  const handleHabitacionChange = (e: ChangeEvent<HTMLInputElement|HTMLSelectElement>) => {
    const { name, value } = e.target;
    setNuevaHabitacion({
      ...nuevaHabitacion,
      [name]: value
    })
  }

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1>Listado de habitaciones<br/><Link className="font-medium text-blue-600 dark:text-blue-500 hover:underline" href={'hotel'}>Volver a hoteles</Link></h1>

      {loading ? 
        <div className="loader mt-5"></div>
        :
        <div className="relative overflow-x-auto">
          <button onClick={() => setVisibleModalRegistro(true)} className="text-white bg-blue-800 dark:bg-blue-700 hover:bg-blue-800 focus:outline-none font-medium text-sm rounded-lg px-5 py-2.5 text-center mb-5">
            Registrar una habitación
          </button>
          <Table>
            <THead>
              <Row headerRow={true}>
                <TH value="Id" />
                <TH value="Número" />
                <TH value="Ocupada" />
                <TH value="Acciones" />
              </Row>
            </THead>
            <TBody>
              {habitaciones.map(habitacion => (
                <Row key={habitacion.id} headerRow={false}>
                  <Cell value={habitacion.id} />
                  <Cell value={habitacion.numero} />
                  <Cell value={habitacion.ocupado} />
                  <Cell value={<div className="grid grid-cols-2 gap-4">
                                  <button onClick={() => iniciaActualizacion(habitacion.id)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Editar</button>
                                  <button onClick={() => handleDelete(habitacion.id)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Eliminar</button>
                              </div>} />
                </Row>
              ))}
            </TBody>
          </Table>
        </div>
      }

      {visibleModalRegistro ?
        <Modal setVisible={setVisibleModalRegistro}>
          <FormularioHabitacion
            handleHabitacionSubmit={handleHabitacionSubmit}
            handleHabitacionChange={handleHabitacionChange}
            nuevaHabitacion={nuevaHabitacion}
            tituloModal="Registra tu habitación"
            textoBoton="Registrar"
          />
        </Modal>
      : null}

      {visibleModalActualizar ?
        <Modal setVisible={setVisibleModalActualizar}>
          <h1>Actualización de habitación</h1>
        </Modal>
      : null}

      {visibleModalEliminar ?
        <Modal setVisible={setVisibleModalEliminar}>
          <h1>Eliminar habitación</h1>
        </Modal>
      : null}

    </main>
  );
}

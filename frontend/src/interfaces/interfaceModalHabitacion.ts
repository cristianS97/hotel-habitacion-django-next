import React from "react";
import Habitacion from "@/clases/Habitacion";

export default interface IModalHabitacion {
    handleHabitacionSubmit: (e: React.FormEvent<HTMLFormElement>) => void,
    handleHabitacionChange: (e: React.ChangeEvent<HTMLInputElement|HTMLSelectElement>) => void,
    nuevaHabitacion: Habitacion,
    tituloModal: string,
    textoBoton: string
}
import React from "react"
import Hotel from "@/clases/Hotel"

export default interface IModalHotel {
    handleHotelSubmit: (e: React.FormEvent<HTMLFormElement>) => void,
    handleHotelChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    nuevoHotel: Hotel,
    tituloModal: string,
    textoBoton: string
}
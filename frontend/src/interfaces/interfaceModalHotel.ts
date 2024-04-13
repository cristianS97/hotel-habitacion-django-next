import React from "react"
import Hotel from "@/clases/Hotel"

export default interface IModal {
    setVisibleModal : (visible:boolean) => void,
    handleHotelSubmit: (e: React.FormEvent<HTMLFormElement>) => void,
    handleHotelChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    nuevoHotel: Hotel
}
import { Dispatch, SetStateAction } from 'react'
import IHotel from "./interfaceHotel"
import IHabitacion from "./interfaceHabitacion"
import Hotel from "@/clases/Hotel"

export default interface IFetch {
    url:string,
    setData: (data:IHotel[] | IHabitacion[] | Hotel) => void,
    setLoading: (loading:boolean) => void,
    method?:string,
    nuevaData?: Hotel,
    listaObjetos?:IHotel[] | IHabitacion[],
    setVisibleModal?: Dispatch<SetStateAction<boolean>>,
    setNuevaData?: (arg0:Hotel) => any
}
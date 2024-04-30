import { Dispatch, SetStateAction } from 'react'
import IHabitacion from "./interfaceHabitacion"
import Habitacion from '@/clases/Habitacion'

export default interface IFetchHabitacion {
    url:string,
    setData: (data:IHabitacion[] | Habitacion | Habitacion[]) => void,
    setLoading: (loading:boolean) => void,
    method?:string,
    nuevaData?: Habitacion,
    listaObjetos?:IHabitacion[],
    setVisibleModal?: Dispatch<SetStateAction<boolean>>,
    setNuevaData?: (arg0:Habitacion) => any
}
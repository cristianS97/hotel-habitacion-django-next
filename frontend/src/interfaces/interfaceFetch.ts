import { Dispatch, SetStateAction } from 'react'
import IHotel from "./interfaceHotel"
import Hotel from "@/clases/Hotel"

export default interface IFetch {
    url:string,
    setData: (data:IHotel[] | Hotel | Hotel[]) => void,
    setLoading: (loading:boolean) => void,
    method?:string,
    nuevaData?: Hotel,
    listaObjetos?:IHotel[],
    setVisibleModal?: Dispatch<SetStateAction<boolean>>,
    setNuevaData?: (arg0:Hotel) => any
}
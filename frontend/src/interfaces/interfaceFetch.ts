import IHotel from "./interfaceHotel"
import IHabitacion from "./interfaceHabitacion"

export default interface IFetch {
    "url":string,
    "setData": (data:IHotel[] | IHabitacion[]) => void,
    "setLoading": (loading:boolean) => void
}
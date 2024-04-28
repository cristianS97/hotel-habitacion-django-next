import IHabitacion from "@/interfaces/interfaceHabitacion";

export default class Habitacion implements IHabitacion {
    id: number;
    hotel: number;
    numero: number;
    ocupado: string;

    constructor(habitacion:IHabitacion) {
        this.id = habitacion.id;
        this.hotel = habitacion.hotel;
        this.numero = habitacion.numero;
        this.ocupado = habitacion.ocupado;
    }
}
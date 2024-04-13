import IHotel from "@/interfaces/interfaceHotel";

export default class Hotel implements IHotel {
    id: number;
    nombre: string;
    calle: string;
    numero: number;
    comuna: string;
    telefono: number;
    email: string;

    constructor(hotel:IHotel) {
        this.id = hotel.id;
        this.nombre = hotel.nombre;
        this.calle = hotel.calle;
        this.numero = hotel.numero;
        this.comuna = hotel.comuna;
        this.telefono = hotel.telefono;
        this.email = hotel.email;
    }
}
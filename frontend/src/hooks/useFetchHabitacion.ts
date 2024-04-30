import Habitacion from "@/clases/Habitacion";
import IFetchHabitacion from "@/interfaces/interfaceFetchHabitacion";

const habitacionData = {id: 0, hotel: 0, numero: 0, ocupado: ""};

export const useFetchData = ({url, setData, setLoading, method='GET', nuevaData=habitacionData, listaObjetos=[], setVisibleModal, setNuevaData} : IFetchHabitacion) : void => {
    if(method=='GET')
    {
        const getData = () => {
            fetch(url)
            .then(response => response.json())
            .then(data => setData(data))
            .finally(() => setLoading(false));
        }

        getData();
    }
    else
    {
        const hotel:Habitacion = new Habitacion(nuevaData);
        const conf = {
            method: method,
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(hotel)
        };
        fetch(url, conf)
        .then(response => response.json())
        .then(data => {
            if(method == 'POST')
            {
                setData([...listaObjetos, data])
            }
            else if(method == 'PUT')
            {
                setData([...listaObjetos.filter(objeto => objeto.id !== data.id), data])
            }
        })
        .catch(error => {
            if(method == 'DELETE')
            {
                setData(listaObjetos.filter(obj => obj.id !== nuevaData.id) as Habitacion[])
                if(setVisibleModal)
                {
                    setVisibleModal(false)
                }
            }
            else
            {
                console.log(error)
            }
        })
        .finally(() => {
            if (setNuevaData) {
                setNuevaData({id: 0, hotel: 0, numero: 0, ocupado: ""});
            }
            if(setVisibleModal)
            {
                setVisibleModal(false)
            }
            setLoading(false)
        })
    }
}
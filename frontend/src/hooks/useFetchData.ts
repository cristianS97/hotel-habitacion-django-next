import Hotel from "@/clases/Hotel";
import IFetch from "@/interfaces/interfaceFetch";

const hotelData = {id: 0, nombre: "", calle: "", numero: 0, comuna: "", telefono: 0, email: ""};

export const useFetchData = ({url, setData, setLoading, method='GET', nuevaData=hotelData, listaObjetos=[], setVisibleModal, setNuevaData} : IFetch) : void => {
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
        const hotel:Hotel = new Hotel(nuevaData);
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
                setData(listaObjetos.filter(obj => obj.id !== nuevaData.id) as Hotel[])
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
                setNuevaData({id: 0, nombre: "", calle: "", numero: 0, comuna: "", telefono: 0, email: ""});
            }
            if(setVisibleModal)
            {
                setVisibleModal(false)
            }
            setLoading(false)
        })
    }
}
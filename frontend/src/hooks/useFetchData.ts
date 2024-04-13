import IFetch from "@/interfaces/interfaceFetch";

export const useFetchData = ({url, setData, setLoading} : IFetch) => {
    const getData = () => {
        fetch(url)
        .then(response => response.json())
        .then(data => setData(data))
        .finally(() => setLoading(false));
    }

    return getData;
}
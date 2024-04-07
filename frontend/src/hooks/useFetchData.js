export const useFetchData = (url, setData, setLoading) => {
    const getData = () => {
        fetch(url)
        .then(response => response.json())
        .then(data => setData(data))
        .finally(setLoading(false));
    }

    getData();
}
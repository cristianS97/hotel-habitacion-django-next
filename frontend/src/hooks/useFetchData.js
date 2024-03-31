export const useFetchData = (url, setData) => {
    const getData = () => {
        fetch(url)
        .then(response => response.json())
        .then(data => setData(data));
    }

    getData();
}
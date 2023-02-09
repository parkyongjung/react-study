import { useEffect, useState } from "react"


export const useFetch = (url) => {
    const [data, setData] = useState([]);
    useEffect(()=> {
        fetch(url)
        // fetch("http://localhost:3001/words")
        .then(res=> {
            return res.json();
        })
        .then(data => {
            setData(data);
        })
    }, [url]);

    return data;
}
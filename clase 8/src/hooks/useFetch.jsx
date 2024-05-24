import { useEffect, useState } from "react";

const useFetch = ( url, indicePaginado ) => {    
    const [ data, setData ] = useState(null)
    const [ cargando, setCargando ] = useState(true)

    useEffect(() => {
        fetch(url)
        .then( response => response.json())
        .then( datos => {
            setData(datos)
            setCargando(false)
        })
        .catch( error => console.log(error))

    }, [indicePaginado])

    return { data, cargando } 
}

export default useFetch;
import { useState, useEffect } from "react"

const useFetch = () => {
    const [ data, setData ] = useState(null)

    useEffect(() => {
        fetch("https://rickandmortyapi.com/api/character")
        .then( res => res.json())
        .then( datos => setData(datos))

    }, [])

    return data
}

export default useFetch
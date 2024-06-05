import { createContext } from "react";
import { useState, useEffect } from "react";

const DataContext = createContext()

const DataProvider = ({ children }) => {
    const [data, setData] = useState(null)  

    useEffect(() => {
        fetch("https://rickandmortyapi.com/api/character")
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setData(data)
            })

    }, [])

    return (
        <DataContext.Provider value={data}>
            {
                children
            }
        </DataContext.Provider>
    )
}

export { DataContext, DataProvider }
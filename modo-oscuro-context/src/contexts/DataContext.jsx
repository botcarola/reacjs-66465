import { createContext } from "react";
import useFetch from "../hooks/useFetch";

const DataContext = createContext()

const DataProvider = ({ children }) => {
    const data = useFetch()
    return(
        <DataContext.Provider value={data}>
            {
                children
            }
        </DataContext.Provider>
    )
}

export { DataContext, DataProvider }
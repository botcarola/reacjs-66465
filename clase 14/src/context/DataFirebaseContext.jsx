import { createContext, useRef, useState, useEffect } from "react";
import useGetFirebase from "../hooks/useGetFirebase";

const DataFirebaseContext = createContext()

const DataFirebaseProvider = ({ children }) => {

    const dataCloud = useGetFirebase()  
    const dataProductsRef = useRef(null)
    dataProductsRef.current =  dataCloud
    const [ dataCart, setDataCart ] = useState(JSON.parse(localStorage.getItem("cart")) || [])

    const addProductToCart = (id) => {

        const getProduct = dataProductsRef?.current?.find(( product ) => {
            return product.id == id
        })
        setDataCart(prevValue => [...prevValue, getProduct])   
        localStorage.setItem("cart", JSON.stringify(dataCart))     
    }
   
    return (
        <DataFirebaseContext.Provider value={{ dataProductsRef, addProductToCart, dataCart, setDataCart }}>
            {
                children
            }
        </DataFirebaseContext.Provider>
    )
}

export { DataFirebaseContext, DataFirebaseProvider }
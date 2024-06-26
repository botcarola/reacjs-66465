import { useState, useEffect } from "react";
// asegurarnos de importar la db que nos va a permitir el acceso a nuestra colección de firebase
import { db } from "../firebaseConfig";
import { getDocs, collection } from "firebase/firestore";


const useGetFirebase = () => {

    const [ data, setData ] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, "products-ecommerce"))                
                const documents = querySnapshot?.docs?.map( document => ({id: document.id, ...document.data()}))
                setData(documents)

            } catch (error) {
                console.log(error)
            }
        }
        fetchData()
    }, [])

    return data
}

export default useGetFirebase;
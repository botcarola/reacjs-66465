import { useEffect, useState } from "react";
import { db } from "../firebaseConfig";
import { getDocs, collection } from "firebase/firestore"

const Products = () => {

    const [ data, setData ] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                //el segundo argumento de la función collection es el nombre de nuestra colección
                const querySnapshot = await getDocs(collection(db, "products-ecommerce"))
                
                // para obtener los documentos (que son los datos que contiene la colección) debo mapearlos de la siguiente manera
                const obtenerDocumentos = querySnapshot.docs.map(element => ({ id: element.id, ...element.data()}))
                setData(obtenerDocumentos)
                console.log(obtenerDocumentos)
            } catch(error) {
                console.log(error)
            }
        }

        fetchData()
    }, [])

    return (
        <>
            {
                data.length > 0 ?
                <div>
                    {
                    data.map(( element ) => (
                        <div key={element.id}>
                            <h2>
                                {
                                    element.name
                                }
                            </h2>
                            <h3>
                                {
                                    element.price
                                }
                            </h3>
                            <div>
                                <img src={element.image} />
                            </div>
                            <p>
                                {
                                    element.description
                                }
                            </p>
                        </div>                        
                    ))}
                </div>
                :
                <div>
                    <p>
                        Cargando ...
                    </p>
                </div>
            }
        </>
    )
}

export default Products;
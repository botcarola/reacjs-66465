import { db } from "../firebaseConfig";
import { addDoc, collection } from "firebase/firestore";
import dataJson from "../products.json";

const AddProducts = () => {

    const handleClickDatos = async () => {
        try{
            console.log("try")

            dataJson.forEach(( element ) => {
                addDoc(collection(db, "products-ecommerce"), element)                
            })
            alert("se han subido los datos")
        } catch ( error ) {
            console.log(error)
        }
    }

    return (
        <>
            <button onClick={handleClickDatos}>
                Cargar todos los datos
            </button>
        </>
    )
}

export default AddProducts;
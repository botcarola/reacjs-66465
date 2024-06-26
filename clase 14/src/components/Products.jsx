import { useContext } from "react";
import { DataFirebaseContext } from "../context/DataFirebaseContext";

const Products = () => {

    const { dataProductsRef, addProductToCart } = useContext(DataFirebaseContext)

    const handleClickAddToCart = ( event ) => {        
        addProductToCart(event.target.id)
    }

    return (
        <>
        {
            dataProductsRef?.current?.length > 0 ?
            <>
            {
                dataProductsRef?.current?.map(( element ) => (
                    <div key={element.id}>
                        <h2>
                            {
                                element.title
                            }
                        </h2>
                        <p>
                            {
                                element.description
                            }
                        </p>
                        <button onClick={handleClickAddToCart} id={element.id}>
                            Add Cart :D
                        </button>
                    </div>
                ))
            }
            </>
            :
            <div>
                <h2>
                    No hay datos!
                </h2>
            </div>
        }
        </>
    )
}

export default Products;
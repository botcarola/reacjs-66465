import data from "../data/data.json"
// Se importa useNavigate (hook de react router dom) para poder navegar hacia una ruta, independientemente del Link
// useNavigate genera una navegación al igual que el Link, pero no de la misma forma
// permite navegar a una ruta, pasar rutas dinámicas, como un Link
import { useParams, useNavigate, Link } from "react-router-dom"

const Products = () => {
    const { category } = useParams()
    // declarar una variable con el llamo del hook de useNavigate()
    const navigate = useNavigate()

    const handleCategoriaChange = ( event ) => {
        const categoria = event.target.value
        if ( categoria ) {
            // implementar el navigate (con el indentificador de la variable, para poder ir a esa ruta que se precisa)
            navigate(`/products/${categoria}`)
        }
    }

    const filtrarProductos = ( data ) => {
        console.log(category)
        if ( category ) {
            return data.filter(( element ) => element.category === category )
        } else {
            return data
        }
    }

    return (
        <>
            <h2>
                Productos
            </h2>
            <select onChange={handleCategoriaChange}>
                <option value="" defaultValue>
                    Ver por categoría
                </option>
                <option value="electronics">
                    Electrónica
                </option>
                <option value="jewelery">
                    Joyas
                </option>
            </select>
            <div className="container-cards">
                {
                    filtrarProductos(data).map((element) => (
                        <Link to={`/product-details/${element.title}/${element.id}`} key={element.id} className="card">
                            <h3>
                                {
                                    element.title
                                }
                            </h3>
                            <h4>
                                ${element.price}
                            </h4>
                        </Link>
                    ))
                }
            </div>
        </>
    )
}

export default Products;
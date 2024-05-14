import { useState } from "react";
import react from "../assets/react.svg"

const Icono = ({ tipoIcono }) => {
    const [cantidadProductos, setCantidadProductos] = useState(0)

    return (
        <>
            <div className="container-carrito">
                <img src={react} alt={`Imagen de ${tipoIcono}`} />
                <span className="cantidad-productos">
                    { cantidadProductos }
                </span>
            </div>
            <button onClick={() => setCantidadProductos( valorAnterior => valorAnterior + 1)}>
                Añadir al carrito
            </button>
        </>
    )
}

export default Icono;
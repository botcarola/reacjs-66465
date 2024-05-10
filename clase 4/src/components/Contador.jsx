// useState es un hook que me permite agregar una variable de estado en un componente
// para poder usar useState necesito importarlo de React

import { useState } from "react";

const Contador = () => {
    // siempre tengo que iniciar el estado dentro de la función de un componente
    // SIEMPRE TIENE QUE SER ARRIBA DE TODO DE LA FUNCIÓN
    // NUNCA TIENE QUE ESTAR EN UN BLOQUE (IF, FOR, SWITCH)
    // sintaxis: const [ state, setState ] = useState(initialState)
    const [ contador, setContador ] = useState(0)
    // A REACT NO LE INTERESA LOS CAMBIOS DE LAS VARIABLES LOCALES
    // let index = 0
    // SOLO DISPARA EL RERENDER SI CAMBIA UN ESTADO

    const handleClick = () => {
        setInterval(() => { 
            setContador( valorPrevio => valorPrevio + 1 )
        }, 1000)        
    }

    return (
        <>
            <button onClick={handleClick}>
                Sumar infinito
            </button>
            <p>
                { contador }
            </p>
        </>
    )
}

export default Contador;


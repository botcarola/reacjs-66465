// useEffect es un hook que me permite ejecutar efectos secundarios
// SE EJECUTA SIEMPRE DESPUÉS DE QUE SE MONTEN TODOS LOS COMPONENTES
// qué puede ser un efecto? un llamado a una base de datos, un servicio; la escucha de un evento; cambiar un estado, etc, manipular promesas, etc.

import { useEffect, useState } from "react";

const Contador = () => {
    const [ count, setCount ] = useState(0)

    // sintaxis
    // useEffect( callback, array de dependencias )
    // useEffect( () => {}, [] )
    // el array de dependencias
    // VA A DEFINIR SI SE REQUIERE VOLVER A EJECUTAR UN EFECTO SECUNDARIO, A TRAVÉS DE UN CAMBIO DE ESTADO

    useEffect(() => {
        console.log("El componente ejecutó un efecto nuevo")

    }, [ count ])

    const handlerClick = () => {
        setCount(value => value + 1)
    }

    return (
        <div>
            <button onClick={handlerClick}>
                Ejecutar efecto secundario
            </button>
        </div>
    )
}

export default Contador;
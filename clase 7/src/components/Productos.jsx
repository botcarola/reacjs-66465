import { useState, useEffect } from "react";

const Productos = () => {
    const [info, setInfo] = useState(null)
    const [cargando, setCargando] = useState(true)
    const [ indicePaginado, setIndicePaginado ] = useState(41)
    const [ paginasTotales, setPaginasTotales ] = useState(null)

    useEffect(() => {
        // para hacer peticiones, usamos fetch
        // fetch siempre debe utilizarse desde el hook useEffect
        // fetch recibe un argumento obligatorio: URL
        // fetch puede tener un argumento optativo 
        // sintaxis: fetch(URL, {OTRA INFO PARA VERBOS PATCH, PUT, POST, DELETE})
        // URL ES UN STRING
        // URL se puede pasar con comillas '' "" o ``

        const url = `https://rickandmortyapi.com/api/character/?page=${indicePaginado}`

        fetch(url)
            .then((respuesta) => respuesta.json())
            .then((data) => {
                setCargando(false)
                setInfo(data.results) 
                setPaginasTotales(data.info.pages)               
            })
            .catch((error) => console.log(error))
    }, [ indicePaginado ])

    const handlerClickSiguiente = () => {        
        if ( indicePaginado < paginasTotales) {
            setIndicePaginado( prevValue => prevValue + 1)            
        }
    }

    const handlerClickAnterior = () => {
        if (indicePaginado > 0 ) {
            setIndicePaginado( prevValue => prevValue - 1)                 
        }
    }

    return (
        <>
            {
                cargando ?
                    <div>
                        <h4>
                            Cargando data...
                        </h4>
                    </div>
                    :
                    <>
                        {
                            info !== null && info?.length > 0 ?
                                <div>
                                    {
                                        info.map((element) => (
                                            <h3 key={element.id}>
                                                {
                                                    element.name
                                                }
                                            </h3>
                                        ))
                                    }
                                    <button onClick={ handlerClickAnterior }>
                                        Anterior
                                    </button>
                                    <button onClick={ handlerClickSiguiente}>
                                        Siguiente
                                    </button>
                                </div>
                                :
                                <div>
                                    <p>
                                        No hay datos
                                    </p>
                                </div>
                        }
                    </>
            }
        </>
    )
}

export default Productos;
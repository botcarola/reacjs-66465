import useFetch from "../hooks/useFetch";
import { useState } from "react";

const Container = () => {
    const [indice, setIndice] = useState(1)
    const url = `https://rickandmortyapi.com/api/character/?page=${indice}`
    const { data, cargando } = useFetch(url, indice)

    const handlerClickPaginado = () => {
        setIndice(prevValue => prevValue + 1)
    }

    return (
        <div>
            {
                cargando ?
                <div>
                    Cargando datos...
                </div>
                :
                <>
                    <div>
                        {
                            data && data.results.length > 0 ?
                                <>
                                    {
                                        data.results.map(element => (
                                            <div key={element.id}>
                                                {
                                                    element.name
                                                }
                                            </div>
                                        ))
                                    }
                                </>
                                :
                                <div>
                                    No hay datos
                                </div>
                        }
                    </div>
                    <button onClick={handlerClickPaginado}>
                        Siguiente
                    </button>
                </>
            }
        </div>
    )
}

export default Container;
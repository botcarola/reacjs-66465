import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const Personaje = () => {
    const { id, nombre} = useParams()
    const [ data, setData ] = useState()

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${id}`)
        .then( response => response.json())
        .then( info => {
            setData(info)
        })
    }, [])
    
    console.log(data)

    return (
        <div>
            <h2>
                Personaje: { nombre }
            </h2>
            <div>
                {
                    data !== null ?
                    <div>
                        <img src={data?.image} alt={data?.name} />
                        <p>
                            {
                                data?.status
                            }
                        </p>
                    </div>
                    :
                    <div>
                        No hay datos
                    </div>
                }
            </div>           
        </div>
    )
}

export default Personaje;
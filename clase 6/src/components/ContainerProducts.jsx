import data from "../data/data.json";
import Card from "./Card";
import { useState, useEffect } from "react";

const ContainerProducts = () => {
    const [info, setInfo] = useState(null)
    const [cargando, setCargando] = useState(true)

    useEffect(() => {
        const obtenerData = new Promise(( resolve, reject ) => {
            setTimeout(() => {
                // resolve(data)
                reject("Servicio caído")

            }, 1500)
        })
        .then(( respuesta ) => {
            setInfo(respuesta)
            setCargando(false)
        })
        .catch(( error ) => alert(`Se produjo un error: ${error}`))

    }, [])

    console.log(data)

    return (
        <section>
            <h2>
                Productos
            </h2>
            {
                cargando ?
                    <div>
                        <h3>
                            Cargando datos
                        </h3>
                    </div>
                    :
                    <>
                        {
                            info && info.length > 0 ?
                                <>
                                    {
                                        info.map((item) => (
                                            <Card
                                                key={item.id}
                                                producto={item.title}
                                                precio={item.price}
                                                img={item.image}
                                            />
                                        ))
                                    }
                                </>
                                :
                                <div>
                                    No hay productos disponibles.
                                </div>
                        }
                    </>

            }
        </section>
    )
}

export default ContainerProducts;
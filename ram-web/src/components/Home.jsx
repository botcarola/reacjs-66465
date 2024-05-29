import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Home = () => {
    const [data, setData] = useState(null)
    const [cargandoData, setCargandoData] = useState(true)

    useEffect(() => {

        fetch("https://rickandmortyapi.com/api/character")
            .then(response => response.json())
            .then(info => {
                setData(info)
                setCargandoData(false)
            })
            .catch(error => console.log(error))

    }, [])

    return (
        <div>
            <h1>
                Rick and morty characters
            </h1>
            <p>
                Info de la serie y personajes de Rick and Morty
            </p>
            <section>
                <h2>
                    Personajes
                </h2>
                <div>
                    {
                        cargandoData ?
                            <div>
                                Cargando data...
                            </div>
                            :
                            <div>
                                {
                                    data !== null && data?.results?.length > 0 ?
                                    <div>
                                        {
                                            data.results.map( element => (
                                                <Link to={`/personaje/${element.id}/${element.name}`} key={element.id}>
                                                    <img src={element.image} alt={element.name} />
                                                </Link>
                                            ))
                                        }
                                    </div>
                                    :
                                    <div>
                                        <h2>
                                            No hay datos
                                        </h2>
                                    </div>
                                }
                            </div>
                    }
                </div>
            </section>
        </div>
    )
}

export default Home;
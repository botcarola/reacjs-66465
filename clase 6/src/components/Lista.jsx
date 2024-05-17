const Lista = () => {

    const frutas = [ "naranja", "kiwi", "melón", "frutilla", "banana" ]

    // map itera (recorre los datos) el array
    // map recibe un argumento obligatorio que es el callback
    // el callback del map tiene acceso al valor actual del elemento que itera el array

    const nuevasFrutas = frutas.map(( elementoActual, indice ) => {
        console.log(indice)
        console.log(elementoActual)
        return elementoActual.toUpperCase()      
    })

    // map no afecta al array original
    // retorna un nuevo array
    // si no uso return implícito ni explícito, map rellena los arrays con indefinidos (porque las funciones que no tienen retorno, tienen su valor por defecto como undefined)

    console.log(nuevasFrutas)
    console.log(frutas)

    return (
        <div>
            <h2>
                Lista de verdulería:
            </h2>
            <ul>
                {
                    frutas.map(( fruta, indice ) => (
                        <li key={indice}>
                            {
                                fruta
                            }
                        </li>                        
                    ))
                }
            </ul>
        </div>
    )
}

export default Lista;
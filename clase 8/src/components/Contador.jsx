import { useState } from "react";

const Contador = ({ render }) => {
    const [ contador, setContador ] = useState(0)

    const handlerClickIncremento = () => setContador( prevValue => prevValue + 1 )
    const handlerClickDecremento = () => setContador( prevValue => prevValue - 1)

    return render({ contador, handlerClickDecremento, handlerClickIncremento })
}

export default Contador;
// useRef
// hook que me permite alojar un valor que puede ser mutable o interactuar con el DOM SIN GENERAR UNA NUEVA RENDERIZACIÓN
// para utilizarlo tenemos que importar el hook
import { useRef } from "react";

const FocusComponent = () => {
    // SIEMPRE UTILIZAMOS LA REFERENCIA DENTRO DEL COMPONENTE
    const inputRef = useRef(null)

    const handlerClick = () => {
        const inputElement = inputRef.current
        inputElement.focus()
        console.log(inputRef.current)
    }

    return (
        <div>
            <input type="text" ref={inputRef} />
            <button onClick={handlerClick}>
                Añadir foco
            </button>
        </div>
    )
}

export default FocusComponent;
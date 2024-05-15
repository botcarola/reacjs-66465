import { useRef } from "react";

const ChangeBackground = () => {
    const divRef = useRef()

    const handlerClick = () => {
        divRef.current.style.backgroundColor = "red"

    }

    return(
        <div>
            <div ref={divRef}>
                Div xD
            </div>
            <button onClick={handlerClick}>
                Cambiar de color
            </button>
        </div>
    )
}

export default ChangeBackground;
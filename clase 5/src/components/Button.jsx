// los componentes pueden recibir funciones como propiedades

const Button = ({ evento }) => {
    return(
        <button onClick={evento}>
            Hazme click!
        </button>
    )
}

export default Button
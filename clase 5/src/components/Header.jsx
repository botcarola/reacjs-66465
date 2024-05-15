// este componente es un componente de presentación o dicho propiamente "stateless"
// no maneja estado interno, es decir, no usa useState
// solo se limita a visualizar un contenido que puede ser propio o heredado por propiedades (props) 

const Header = ({mensaje}) => {

    const handlerClick = () => {
        // lógica asociada a un evento
    }

    const ordenarData = ( array ) => {
        // lógica asociada a hacer sort a x data
    }
    
    return(
        <header>
            <h2>
                { mensaje }
            </h2>
        </header>
    )
}

export default Header
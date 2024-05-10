// PROPS (propiedades)
// son la forma principal de pasar datos entre componentes
// los datos pasan de un componente padre a un o unos componentes hijos.
// los hijos pueden acceder a estos datos para personalizar tu apariencia y contenido 
// un hijo que reciba propiedades, tiene que ser un componente dinámico
// las propiedades de un componente pueden estar destructuradas
// esto es un ejemplo de un componente stateless
// NO MANEJAN UN ESTADO INTERNO
// pueden tener datos estáticos o pueden tener props, pero eso no es tener un estado
// tener un estado es usar useState

const Card = ({ img, name, descripcion = "Personaje" }) => {

    return (
        <div className="card">
            <div className="container-img">
                <img src={img} alt={name} />
            </div>
            <h2>
                {name}
            </h2>
            <h3>
                Tipo: { descripcion }
            </h3>
        </div>
    )
}

export default Card;

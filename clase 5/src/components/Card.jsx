const Card = ({ nombre, precio, imagen }) => {
    return (
        <div className="card">
            <div className="container-img">
                <img src={imagen} alt={`Imagen del producto ${ nombre }`} />
            </div>
            <div>
                <h3>
                    { nombre }
                </h3>
                <h3>
                    { precio }
                </h3>
            </div>
        </div>
    )
}

export default Card;
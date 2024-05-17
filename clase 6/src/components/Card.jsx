const Card = ({ producto, precio, img }) => {

    return (
        <div className="card">
            <div className="container-card-img">
                <img 
                src={img} 
                alt={producto} 
                />
            </div>
            <div className="container-products">
                <h3>
                    {
                        producto
                    }
                </h3>
                <h4>
                    {
                        precio
                    }
                </h4>
            </div>
        </div>
    )
}

export default Card;
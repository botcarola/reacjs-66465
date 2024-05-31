// NO PUEDO AGREGAR EVENTOS NI CLASES A LOS FRAGMENTOS <></>


const EventoMouse = () => {

    const handlerMouseMove = () => {
        console.log("se mueve el mouse en esta caja")
    }
    return(
        <>
        <div onMouseMove={handlerMouseMove}>
            ACÁ VEMOS LO QUE PASA CON EL EVENTO DE MOUSE MOVE
        </div>
            
        </>
    )
}

export default EventoMouse;

const Promesa = () => {

    // Las promesas me permiten manejar asincronismo
    // las promesas tienen tres estados: pendiente (mientras se resuelve o no), resuelto ( cuando se resuelve según lo planteado) y reject (rechazado, no se pudo concretar la operación correctamente )

    const obtenerData = new Promise(( resolve, reject ) => {
        if ( true ) {
            resolve(true)
        } else {
            reject("salió todo mal")
        }
    })
    .then(( resolucion ) => console.log(resolucion))
    .catch(( error ) => console.log(error))

    console.log(obtenerData)

    return (
        <>
        </>
    )
}

export default Promesa;
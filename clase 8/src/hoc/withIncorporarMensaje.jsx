const withIncorporarMensaje = (WrappedComponent, mensaje) => {
    return (props) => {
        return <WrappedComponent {...props} mensaje={mensaje} />
    }
}

export default withIncorporarMensaje;
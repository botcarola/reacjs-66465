// children es una prop que nos permite pasar a los componentes padres, un componente hijo

const Container = ({ children, propCss }) => {

    return(
        <div className={`container ${propCss}`}>
            { children }
        </div>
    )
}

export default Container;
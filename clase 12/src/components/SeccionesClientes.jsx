import { useContext } from "react"
import { GestionContext } from "../contexts/GestionContext"

const SeccionesClientes = () => {
    const { handleClickVistaClientes, vistaClientesPendientes } = useContext(GestionContext)
    return (
        <>
            <div className="subtitle-clientes">
                <h2 onClick={handleClickVistaClientes} className={`pointer-element ${ vistaClientesPendientes && "subrayado-subtitle"}`}>
                    Clientes pendientes
                </h2>
                <h2 onClick={handleClickVistaClientes} className={`pointer-element ${ vistaClientesPendientes === false && "subrayado-subtitle"}`}>
                    Clientes gestionados
                </h2>
            </div>
        </>
    )
}

export default SeccionesClientes
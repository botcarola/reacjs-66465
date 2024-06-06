import { createContext, useState } from "react";
import data from "../data/mockdata.json";
import credentials from "../credentials.json"

const GestionContext = createContext()

const GestionProvider = ({ children }) => {
    const gestionados = []
    const pendientes = []
    const [ vistaClientesPendientes, setVistaClientesPendientes ] = useState(true) 
    const credenciales = credentials?.users[0] 
    const verificarCredenciales = credenciales.puesto === "ggf99" && credenciales.gerencial

    const handleClickVistaClientes = () => {
        if ( vistaClientesPendientes ) {
            setVistaClientesPendientes(false)
        } else {
            setVistaClientesPendientes(true)
        }
    }

    data.forEach( element => {
        if ( element.gestion ) {
            gestionados.push(element)
        } else {
            pendientes.push(element)
        }
    })

    return(
        <GestionContext.Provider value={{ gestionados, pendientes, vistaClientesPendientes, handleClickVistaClientes, verificarCredenciales }}>
            {
                children
            }
        </GestionContext.Provider>
    )
}

export { GestionContext, GestionProvider }
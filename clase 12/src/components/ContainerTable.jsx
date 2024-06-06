import ClientesTable from "./ClientesTable";
import SeccionesClientes from "./SeccionesClientes";
import { useContext } from "react";
import { GestionContext } from "../contexts/GestionContext";

const ContainerTable = () => {
    const { gestionados, pendientes, vistaClientesPendientes, verificarCredenciales  } = useContext(GestionContext)
    
    return (
        <>
        <div>
            {
                verificarCredenciales &&
                <h2>
                    ¡Bienvenido gerente!
                </h2>
            }
        </div>
            <SeccionesClientes />
            {
                vistaClientesPendientes ?
                    <ClientesTable
                        clientes={pendientes}                       
                    />
                    :
                    <ClientesTable
                        clientes={gestionados}                       
                    />
            }
        </>
    )
}

export default ContainerTable;
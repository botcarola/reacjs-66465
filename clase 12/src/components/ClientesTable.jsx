import React, { useContext } from "react"
import { GestionContext } from "../contexts/GestionContext"

// usamos React.memo para evitar renderizados innecesarios de componentes que dependan de su propiedades
// No es lo mismo el hook useMemo que React.memo

const ClientesTable = React.memo(({ clientes }) => {
    const { verificarCredenciales } = useContext(GestionContext)

    return (
        <table border="1">
            <thead>
                <tr>
                    <th>Cuenta</th>
                    <th>Nombre completo</th>
                    <th>Email</th>                      
                    {
                        verificarCredenciales &&
                        <th>
                            Modificar gestión
                        </th> 
                    }                  
                </tr>
            </thead>
            <tbody>
                {
                    clientes.map(cliente => (
                        <tr key={cliente.id}>
                            <td>{cliente.id}</td>
                            <td>{cliente.nombre_completo}</td>
                            <td>{cliente.email}</td>                               
                            {
                                verificarCredenciales &&
                                <td>
                                    <button>
                                        Modificar
                                    </button>
                                </td>
                            }                       
                        </tr>
                    ))}
            </tbody>
        </table>
    )
})

export default ClientesTable



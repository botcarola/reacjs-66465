import { useState, useEffect } from "react";

const TablaUsuarios = () => {
    const [users, setUsers] = useState(null)
    const [filtro, setFiltro] = useState("")

    useEffect(() => {
        fetch("https://664d11b4ede9a2b556529402.mockapi.io/user")
            .then(response => response.json())
            .then(data => {
                setUsers(data)
            })
    }, [])

    const handlerChange = (event) => {
        setFiltro(event.target.value)
    }

    const handlerClick = (event) => {
        console.log(event.target.id)

        const validarBorrado = confirm("Está seguro que quiere borrar al usuario?")

        if ( validarBorrado ) {

            fetch(`https://664d11b4ede9a2b556529402.mockapi.io/user/${event.target.id}`, {
                method: "DELETE"            
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
    
                })
                .catch(error => console.log(error))
        }

    }

    const usuariosFiltrados = users?.filter(usuario => {
        return usuario.name.toLowerCase().includes(filtro.toLowerCase()) || usuario.email.toLowerCase().includes(filtro.toLocaleLowerCase())
    })

    return (
        <>
            <h2>
                Lista de usuarios
            </h2>
            <input
                type="text"
                placeholder="Busque por nombre o email"
                onChange={handlerChange}
            />
            {
                users !== null &&
                <table>
                    <thead>
                        <tr>
                            <th>
                                Nombre
                            </th>
                            <th>
                                Email
                            </th>
                            <th>

                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            usuariosFiltrados.map(element => (
                                <tr key={element.id}>
                                    <td>
                                        {
                                            element.name
                                        }
                                    </td>
                                    <td>
                                        {
                                            element.email
                                        }
                                    </td>
                                    <td onClick={handlerClick} id={element.id}>
                                        Borrar
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            }
        </>
    )
}

export default TablaUsuarios;
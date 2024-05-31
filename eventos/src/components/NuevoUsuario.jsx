import { useState } from "react"

const NuevoUsuario = () => {
    const [ name, setName ] = useState(null)
    const [ email, setEmail ] = useState(null)

    const handlerSubmit = ( event ) => {
        event.preventDefault()

        fetch("https://664d11b4ede9a2b556529402.mockapi.io/user", {
            method: "POST",
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify({
                name: name,
                email: email
            })
        })
        .then( res => res.json())
        .then( data => {
            console.log(data)
            alert("El usuario ha sido dado de alta")
        })
        .catch( error => console.log(error))
    }

    return(
        <>
        <h2>
            Nuevo usuario
        </h2>
        <form onSubmit={handlerSubmit}>
            <label>
                <input 
                type="text" 
                placeholder="Name"
                onChange={(e) => setName(e.target.value)}
                required
                />
            </label>
            <label>
                <input 
                type="text" 
                placeholder="Email" 
                onChange={(e) => setEmail(e.target.value)}
                required
                />
            </label>
            <label>
                <input 
                type="submit"
                value="Enviar" 
                />
            </label>
        </form>
        </>
    )
}

export default NuevoUsuario;
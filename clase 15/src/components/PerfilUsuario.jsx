import { saludar } from "../utils/helpers"


// const PerfilUsuario = ({ nombre, descripcion, intereses }) => {
//     return (
//         <>
//             <h2>
//                 {
//                     nombre
//                 }
//             </h2>
//             <p>
//                 {
//                     descripcion
//                 }
//             </p>
//             <ul>
//                 {
//                     intereses.map((element) => (
//                         <div key={element.id}>
//                             {element.interes}
//                         </div>
//                     ))
//                 }
//             </ul>
//         </>
//     )
// }

// export default PerfilUsuario;

persona.nombre

persona["nombre"]





const SubtituloPerfil = ({nombre}) => <h2>{saludar(nombre)}</h2>
const DescripcionUsuario = ({descripcion}) => <p>{descripcion}</p>
const ListaIntereses = ({intereses}) => (
    <ul>
        {
            intereses.map((element) => (
                <li key={element.id}>
                    {
                        element.interes
                    }
                </li>
            ))
        }
    </ul>
)

const PerfilUsuario = ({nombre, descripcion, intereses}) => {
    return(
        <>
        <SubtituloPerfil nombre={nombre}/>
        <DescripcionUsuario descripcion={descripcion} />
        <ListaIntereses intereses={intereses} />        
        </>
    )

}

export default PerfilUsuario;
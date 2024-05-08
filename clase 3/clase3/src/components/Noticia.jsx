import { verificarUsuario }  from "../helpers/datos"

// REGLAS DE JSX
// 1- Retornar siempre un único elemento, si no hay un único elemento que envuelva todo el desarrollo, la aplicación tira error
// 2- Utilizar className en vez de class.
// 3- Utilizar llaves para las expresiones en JavaScript.
// 4- Siempre utilizar camelCase para la mayoría de las funciones, variables, etc.
// 5- Siempre cerrar las etiquetas, usar autocierre para elementos vacíos.

// EXPORT
// export default exporta el componente principal. Solo se puede exportar un componente principal por archivo.
// export exporta lógica o valores o expresiones, pueden ser múltiples por archivo.

const nombre = "Matias"
const apellido = "Vicencio"
const texto = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. At deserunt vitae quod non consectetur quasi consequatur architecto neque laboriosam repellendus, tempore veniam sed sint maxime eius expedita atque repudiandae dicta molestias odio nemo sit! Ullam nostrum quae quod illo dolores ratione. Eum dicta suscipit odio recusandae facilis obcaecati dolorem, velit temporibus minus corrupti? Laboriosam reprehenderit culpa dignissimos enim ut, totam nulla dolore illo esse ea eveniet optio autem tempora unde, possimus ullam fuga error aspernatur dicta temporibus quae! Rerum, cum, odit nesciunt nemo dicta sequi, quaerat accusamus molestias ipsam quod repellendus reiciendis! In unde dolore quae aspernatur ad, est exercitationem?"

const concatenarNombreUsuario = ( nombre, apellido ) => `${nombre} ${apellido}`  

const handleClick = ( event ) => {
    console.log(event)
}

const Noticia = () => {
    return (
        <div className="container">
            <div>
                <h1>
                    Hola mundo!
                </h1>
            </div>
            <main>
                <section>
                    <h2>
                        Noticias de programación
                    </h2>
                    <p>
                        Escrito por { concatenarNombreUsuario(nombre, apellido) }
                    </p>
                    <img src="" alt="Imagen de la noticia" />
                    <p>
                        { texto }
                    </p>
                    <button onClick={handleClick}>
                        Me gusta
                    </button>
                </section>
            </main>
        </div>
    )
}

export default Noticia;
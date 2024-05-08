import './App.css'
import Noticia from "./components/Noticia"
// const saludarUsuario = function ( nombre, apellido ) {
//   return "Hola " + nombre + " " + apellido + "!"
// } 

// sugar syntax
// reemplazando funciones anónimas por funciones flecha
// template strings, utilizando backtics para combinar cadena de texto y expresiones

// const saludarUsuario = ( nombre, apellido ) => `Hola ${nombre} ${apellido}!`

// spreade operator: permite incorporar otros arrays dentro de un nuevo array, hacer copias de un array u objeto
// const numeros = [ 1, 2 , 3 ,4 ,5]

// const frutas = [...numeros, "banana", "manzana"]

// destructuring 

// const persona = {
//   nombre: "Emilse",
//   apellido: "Bassano"
// }

// const { nombre } = persona;

// operador ternario

// const usuario = true

// usuario ? "Puede pasar" : "No puede pasar"

const App = () => {

  return (
    <>
    {/* ejemplo de uso de ternario
      si esto es verdadero ?
      mostrá este componente (tabla con información de los usuarios de un banco)
      :
      sino mostrá este otro  (no hay información para la consulta realizada) */}
      <Noticia />
    </>
  )
}

export default App



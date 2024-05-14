import "./App.css"
// Todo lo que se exporte en react, que no sea default, va entre llaves.
// import { ordenarPorFecha } from './helpers/utils'
// import Header from "./components/Header"
import Icono from "./components/Icono"
import Saludo from "./components/Saludo"


const App = () => {

  return (
    <>
      {/* <Header />   */}
      <Icono 
      tipoIcono={"de React"} 
      />  
      <Saludo
      nombre={"Eduardo"}
      />
    </>
  )
}

export default App

import './App.css'
// import data from "./data/data.json"
import { useState } from 'react'
import EventoMouse from './components/EventoMouse'

function App() {
  const [ nombre, setNombre ] = useState(null)

  // Tenemos que asociar a un evento una función que se ejecute para realizar cierta tarea al generarse o dispararse el evento  
  const handlerClick = (e) => {
    // La función asociada a un evento permite tener acceso al "objeto del evento" sintético, que tiene información acerca del elemento con el cual se generó el evento.
    console.log(e)
    console.log("hola soy un mensaje en consola")
  }  

  const handlerClickFetch = (idUsuario) => {

  }


  return (
    <>  
    {/* {
      data.map(element => (
        <div>
          <h2>
            { element.title }
          </h2>
        </div>
      ))
    }   */}
    {/*
       Al componente le asociamos un evento sintético: "onClick", el cual va a tener que contener el identificador de una función asociada
    */}
    <div onClick={handlerClick} id="caja" className="caja-container">  
        Hola soy una caja
    </div>
    <button onClick={() => setNombre("Jorge")}>
      Setear nombre
    </button>
    <button onClick={() => handlerClickFetch(99)}>
      Pasar argumentos a un función asociada a un evento
    </button>

    <EventoMouse />
    </>
  )
}

export default App

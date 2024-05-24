import './App.css'
import Container from './components/Container'
import Subtitulo from './components/Subtitulo'
import withIncorporarMensaje from "./hoc/withIncorporarMensaje"
import Contador from './components/Contador'

const MensajeSaludo = withIncorporarMensaje(Subtitulo, "Bienvenidos al sitio web")

function App() {  

  return (
    <>
      <MensajeSaludo />
      <Container />
      <Contador render={({ contador, handlerClickIncremento, handlerClickDecremento}) => (
        <div>
          <p>
            Contador: { contador }
          </p>
          <button onClick={handlerClickDecremento}>
            Decremento
          </button>
          <button onClick={handlerClickIncremento}>
            Incremento
          </button>
        </div>
      )}  
      />
    </>
  )
}

export default App

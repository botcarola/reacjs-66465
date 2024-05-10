import './App.css'
import PieDePagina from "./components/PieDePagina"
import Card from "./components/Card"
import Contador from "./components/Contador"
import Header from './components/Header'

// NAVBAR, QUE CONTIENE CARTWIDGET
// DEBAJO DE NAVBAR EL COMPONENTE ITEMLIST CONTAINER

const App = () => {

  return (
    <>
    <Header />
      <Contador />
      {/* componente que recibe props (propiedades), hace que sea reutilizable y dinámico */}
      <div className="container-cards">
        <Card
          img={"https://resizer.glanacion.com/resizer/v2/como-seria-serena-de-sailor-moon-en-la-vida-real-D7M5TLGRINGXBHTB36RBMXPDFA.jpg?auth=cbc0a994f8b484fb39afdd463496aa57440e6cb201d4a5c7a4fdb794cfbebbae&width=880&height=586&quality=70&smart=true"}
          name={"Sailor Moon"}
          descripcion={undefined}
        />
        <Card
          img={"https://st1.uvnimg.com/b3/56/dbf34d78762e68ed88adf5381bf7/supercampeones-oliver-atom.jpg"}
          name={"Oliver Atom"}
          descripcion='Futbol player'
        />
      </div>
      <PieDePagina />
    </>
  )
}

export default App


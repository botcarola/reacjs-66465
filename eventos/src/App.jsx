import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import TablaUsuarios from './components/TablaUsuarios'
import NuevoUsuario from './components/NuevoUsuario'
import Navbar from './components/Navbar'

function App() {

  return (
    <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={ <TablaUsuarios />} />
          <Route path="/new-user" element={<NuevoUsuario />} />
        </Routes>      
    </BrowserRouter>
  )
}

export default App

import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contacto from './components/Contacto';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Personaje from './components/Pesonaje';
import Personajes from './components/Personajes';
import Error from './components/Error'; 

function App() {

  return (
    <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contacto" element={<Contacto />}/>
          <Route path="/personajes" element={<Personajes />} />
          <Route path="/personaje/:id/:nombre" element={<Personaje />} />
          <Route path="/*" element={<Error />} />
        </Routes>      
    </BrowserRouter>
  )
}

export default App

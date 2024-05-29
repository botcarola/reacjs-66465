import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contacto from './components/componentes genericos/Contacto';
import Home from './components/Home';
import Navbar from './components/Navbar';

function App() {
  
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>      
    </BrowserRouter>
  )
}

export default App

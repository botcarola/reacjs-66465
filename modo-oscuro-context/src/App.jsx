import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import { ThemeProvider } from './contexts/ThemeContext'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Personajes from './components/Personajes'
import Contacto from './components/Contacto'

function App() {
  
  return (
    <BrowserRouter>
      <ThemeProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/personajes" element={<Personajes />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App

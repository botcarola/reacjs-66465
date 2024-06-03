import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Products from './components/Products'
import Navbar from './components/Navbar'
import Error from './components/Error'
import DetalleDelProducto from './components/DetalleDelProducto'

function App() {

  return (
    <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/:category" element={<Products />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product-details/:title/:id" element={<DetalleDelProducto />} />
          <Route path="/*" element={<Error />} />
        </Routes>     
    </BrowserRouter>
  )
}

export default App

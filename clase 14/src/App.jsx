import './App.css';
import { DataFirebaseProvider } from "./context/DataFirebaseContext";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
// import Error from "./components/Error";
import Products from "./components/Products";
import Cart from "./components/Cart";
import Footer from "./components/Footer";

function App() {

  return (
    <BrowserRouter>
      <DataFirebaseProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />          
          <Route path="/productos/:categoria" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          {/* <Route path="/*" element={<Error />} /> */}
        </Routes>
      </DataFirebaseProvider>
      <Footer />
    </BrowserRouter>
  )
}

export default App

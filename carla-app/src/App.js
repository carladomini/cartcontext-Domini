import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import NavBar from './components/NavBar';
import imagen from './components/images/fondo.png'
import Itemlistcontainer from './components/Itemlistcontainer';
import Cart from './components/Cart';
import CartProvider from './context/CartContext';

function App() {
return (
  <div className='container-fluid fondo_rosa' >
  <BrowserRouter>
    <CartProvider>
      <NavBar />
      <Routes>
        <Route path="/" element={<Itemlistcontainer />} />
        <Route
          path="/categoria/:categoriaId"
          element={<Itemlistcontainer />}
        />
        <Route path="/cart" element={<Cart />} />
        <div className="text-center">
          <img src={imagen} alt="Luna Lingerie" className="img-fluid"/>   
        </div> 
        <Route path="/detalle/:detalleId" element={<ItemDetailContainer />} />
      </Routes>
    </CartProvider>
  </BrowserRouter>
  </div>
);
}

export default App;

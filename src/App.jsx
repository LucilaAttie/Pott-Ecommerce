import './App.css';
import './index.css';

import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Route, Routes} from 'react-router-dom';

import { CartProvider } from './context/CarritoContext';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';


const App = () => {
  return (
    <div className='font-link'>
    
      <BrowserRouter>
        <CartProvider>
          <Navbar/>
        
          <Routes>
            <Route path='/' element={<ItemListContainer/>} />
            <Route path='/category/:categoryId' element={<ItemListContainer/>} />
            <Route path='/item/:itemId' element={<ItemDetailContainer/>} />
            <Route path='/cart' element={<Cart/>} />
            <Route path='/checkout' element={<Checkout/>} />
            <Route path='*' element={<h1>404 NOT FOUND</h1>} />
          </Routes>
        </CartProvider>
  
      </BrowserRouter>
    </div>
  
  )
}

export default App;

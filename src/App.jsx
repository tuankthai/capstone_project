
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Product from './components/Product';
import Cart from './components/Cart';
import Home from './components/Home'
import Nav from './components/Nav'
import Login from './components/Login'

import { ShopContextProvider } from './context/shop-context';
  
function App() {

  return (
    <div className='App'>
      <ShopContextProvider>
      <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/Product/:productId" element={<Product />} />
        {/* <Route path="/Cart/:productId" element={<Cart />} /> */}
            <Route path="/Login" element={<Login />} />
            <Route path="/Cart" element={<Cart />} />
        <Route path="/" element={<Home />} />
      </Routes>
      </BrowserRouter>
      </ShopContextProvider>

    </div>
  )
}

export default App

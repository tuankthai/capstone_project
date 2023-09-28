
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Product from './components/Product';
import Cart from './components/Cart';
import Home from './components/Home'
import Nav from './components/Nav'
import Login from './components/Login'
import CheckOut from './components/CheckOut'
import PreCheckOut from './components/PreCheckOut'
import Logout from './components/Logout'
import Thankyou from './components/Thankyou'

import { ShopContextProvider } from './context/shop-context';

function App() {

  return (
    <div className='App'>
      <ShopContextProvider>
        <BrowserRouter>
          {/* <Nav /> */}
          <Routes>
            <Route path="/Product/:productId" element={<Product />} />
            <Route path="/Thankyou" element={<Thankyou />} />
            <Route path="/Logout" element={<Logout />} />
            <Route path="/PreCheckout" element={<PreCheckOut />} />
            <Route path="/Checkout" element={<CheckOut />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Cart" element={<Cart />} />
            <Route path="/" element={<Home />} />
          </Routes>
          <footer className='footer_div'>@2023 Macys. All rights reserved. Macys.com, LLC.
            1000 Hollywood Blvd, Los Angeles CA 90001.</footer>
        </BrowserRouter>
      </ShopContextProvider>

    </div>
  )
}

export default App

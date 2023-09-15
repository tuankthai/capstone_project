
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Product from './components/Product';
import Cart from './components/Cart';
import Home from './components/Home'

function App() {

  return (
    <div className='App'>
      <Routes>

        <Route path="/Product/:productId" element={<Product />} />
        <Route path="/Cart/:productId" element={<Cart />} />
        <Route path="/" element={<Home />} />

      </Routes>
    
    </div>
  )
}

export default App

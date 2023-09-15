import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home.jsx'

// capstone project
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>

      <App />

    </BrowserRouter>
  </React.StrictMode>,
)

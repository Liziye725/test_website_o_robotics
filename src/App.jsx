import React from 'react'
import './App.css'
import { useState } from 'react'
import { BrowserRouter, Route, Routes, Link} from 'react-router-dom'

import Menu from './components/menu/Menu'
import AboutPage from './pages/aboutpage/AboutPage'
import HomePage from './pages/homepage/HomePage'

import ContactForm from './pages/contact-info/ContactForm'

import MainProductPage from './pages/mainproductpage/MainProductPage'
import ProductPage1 from './pages/productpage-1/ProductPage1'
import ProductPage2 from './pages/productpage-2/ProductPage2'
import ProductPage3 from './pages/productpage-3/ProductPage3'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <div className='App'>
      {/* Welcome to O-Robotics! */}
      <header className='App-header'>
        <Routes>
          <Route path='/' element={<Menu />} >
            <Route index element={<HomePage />} />
            <Route path='about' element={<AboutPage />} />
            <Route path='/mainproductpage' element={<MainProductPage />} />
            <Route path='product1' element={<ProductPage1 />} />
            <Route path='product2' element={<ProductPage2 />} />
            <Route path='product3' element={<ProductPage3 />} />
          </Route>
        </Routes>
      </header>
      <Menu />
    </div>
    
   

        <ContactForm/>
        {/* <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a> */}
      
      
      </BrowserRouter>
    </>
  )
}

export default App;

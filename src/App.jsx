import React from 'react'
import './App.css'
import { useState } from 'react'
import { BrowserRouter, Route, Routes, Link} from 'react-router-dom'

import Menu from './components/Menu'
import AboutPage from './pages/aboutpage/AboutPage'
import HomePage from './pages/homepage/HomePage'

import ContactForm from './pages/contact-info/ContactForm'

import ProductPage1 from './pages/productpage-1/ProductPage1'
import ProductPage2 from './pages/productpage-2/ProductPage2'
import ProductPage3 from './pages/productpage-3/ProductPage3'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <div className='App'>
      Welcome to O-Robotics!
      <header className='App-header'>
        <Routes>
          <Route>
            <Route path='/' element={<Menu />} >
              <Route index element={<HomePage />} />
              <Route path='about' element={<AboutPage />} />
              <Route path='product1' element={<ProductPage1 />} />
              <Route path='product2' element={<ProductPage2 />} />
              <Route path='product3' element={<ProductPage3 />} />
            </Route>

            <Route>
              <Route />
            </Route>

          </Route>
        </Routes>
      </header>
    </div>
    
   






    
      <div>
      <h2>Our products</h2>
          <div>
            <button><Link to="/product1">Product 1</Link></button>
            <button><Link to="/product2">Product 2</Link></button>
            <button><Link to="/product3">Product 3</Link></button>
          </div>

        <ContactForm/>
        {/* <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a> */}
      
      </div>
      </BrowserRouter>
    </>
  )
}

export default App;

import React from 'react'
import './App.css'
import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Menu from './components/Menu'
import AboutPage from './pages/aboutpage/AboutPage'
import HomePage from './pages/homepage/HomePage'

import ContactForm from './pages/contact-info/ContactForm'





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
            </Route>

            <Route>
              <Route />
            </Route>

          </Route>
        </Routes>
      </header>
    </div>
    
    </BrowserRouter>






    
      <div>
        <ContactForm/>
        {/* <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a> */}
      
      </div>
    </>
  )
}

export default App;

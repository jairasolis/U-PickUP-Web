import React from 'react'
import Navbar from './components/Navbar'
import LandingPage from './components/LandingPage'
import './App.css'
import Footer from './components/Footer'


const App = () => {
  return (
    <div>
      <Navbar/>
      <LandingPage/>
      <Footer/>
    </div>
    
  )
}

export default App
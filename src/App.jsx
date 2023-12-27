import React from 'react'
import Navbar from './components/Navbar'
import LandingPage from './components/LandingPage'
import './App.css'
import Footer from './components/Footer'
import SignIn from './components/SignIn'
import Signup from './components/Signup'
import { Routes, Route } from 'react-router-dom'
import SigninForm from './_auth/forms/SigninForm'
import SignupForm from './_auth/forms/SignupForm'
import { Home } from './_root/pages'
import AuthLayout from './_auth/AuthLayout'
import RootLayout from './_root/RootLayout'


const App = () => {
  return (
    <div>
      <Navbar/>
      <LandingPage/>
      {/* <Signup/> */}
      {/* <SignIn/> */}
      <Footer/>
    </div>
    
    // <main style={{ height: '100vh' }}>
      
    // </main>

    // <main>
    //   <Routes>
    //     {/* public routes */}
    //     <Route element={<AuthLayout />}>
    //       <Route path='/sign-in' element={<SigninForm />}/>
    //       <Route path='/sign-up' element={<SignupForm />}/>
    //     </Route>


      
    //     {/* private routes */}
    //     <Route element={<RootLayout/>}>
    //       <Route index element={<Home/>}/>
    //     </Route>
        

    //   </Routes>
    // </main>
  )
}

export default App
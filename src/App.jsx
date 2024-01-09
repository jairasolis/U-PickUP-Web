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
import AuthLayout from './_auth/AuthLayout'
import RootLayout from './_root/RootLayout'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import LeftBar from './components/LeftBar'
import Home from './components/Home'
import RightBar from './components/RightBar'


const App = () => {

  // const router = createBrowserRouter([
  //   {
  //     path: "/register",
  //     element: <SignIn/>,
  //   },
  //   {
  //     path: "/signup",
  //     element: <Signup/>,
  //   },
  //   // {
  //   //   path: "/login",
  //   //   element: <SignIn/>,
  //   // },
  // ]);


  return (
    <div>
      <Navbar/>
      <div style={{display:'flex'}}> 
        <LeftBar/>
        <Home/>
        <RightBar/>
      </div>
      {/* <LandingPage/>
      <Signup/>
      <SignIn/>
      <Footer/>  */}

      {/* <RouterProvider router={router} /> */}
    </div>
  )
}

export default App
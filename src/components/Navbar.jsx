import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
        <nav>        
            <div className="logo"> <img src="../public/images/logo.png" alt="" /></div>
            <div>
                <input className='search-bar' type="text" placeholder='Search U-Pick Up'/>
                <button className='sign-up-btn'>Sign Up</button>
            </div>
            
        </nav>

    </div>
  )
}

export default Navbar
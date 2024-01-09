import React from 'react'
import './Home.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilter } from '@fortawesome/free-solid-svg-icons'

const Home = () => {
  return (
    <div className='home'> 
      <div className="home-container">
        <div className="filter">
          <FontAwesomeIcon icon={faFilter} style={{color:'#D9D9D9', margin: '5px 2px '}}/>
          <h4> Filter </h4>
        </div>
        <div className="post">

        </div>
        <div className="post">
          
        </div>
        <div className="post">
          
        </div>
        <div className="post">
          
        </div>
        <div className="post">
          
        </div>
        <div className="post">
          
        </div>
        <div className="post">
          
        </div>
        <div className="post">
          
        </div>
        <div className="post">
          
        </div>
        <div className="post">
          
        </div>
      </div>
    </div>
  )
}

export default Home

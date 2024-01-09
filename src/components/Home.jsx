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
          <img src="..\public\images\cite.jpg" alt="" />
        </div>
        <div className="post">
          <img src="..\public\images\cea.jpg" alt="" />
        </div>
        <div className="post">
          <img src="..\public\images\cas.jpg" alt="" />
        </div>
        <div className="post">
          <img src="..\public\images\cela.jpg" alt="" />
        </div>
        <div className="post">
          <img src="..\public\images\chs.jpg" alt="" />
        </div>
        <div className="post">
          <img src="..\public\images\cma.jpg" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Home

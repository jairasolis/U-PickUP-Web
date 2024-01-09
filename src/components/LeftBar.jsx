import React from 'react'
import './LeftBar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faCalendar } from '@fortawesome/free-solid-svg-icons'


const LeftBar = () => {
  return (
    <div className="leftBar">
      <div className="leftbar-container">
          <div className="menu"> 
              <div className="house">
                  <FontAwesomeIcon icon={ faHouse } className='icon'/>
                  <h4> Home </h4>
              </div>
              <div className="calendar">
                  <FontAwesomeIcon icon={faCalendar} className='icon'/>
                  <h4> Calendar </h4> 
              </div>
              <hr />
          </div>
      </div>
    </div>
  )
}

export default LeftBar

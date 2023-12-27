import React from 'react'
import './LandingPage.css'

const LandingPage = () => {
  return (
    <div>
        {/* <div className='upang-bg'>
            <img width="1440" height="1032" src="../public/images/upang_bg" alt="" />
        </div> */}

        <div className="box">

          <div className="container-1">
            <div className="line-1">
              <div className="icon"></div>
              <div className="line"></div>
            </div>
            <div className="text-1">
              <h3>Create an Account</h3>
              <p>Create an account to lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore </p>
              <div className="buttons">
                <button className='get-started-btn'>Get Started</button>
                <button className='sign-up-bt'>Sign Up</button>
              </div>
            </div>
          </div>

          <div className="container-2">
            <div className="line-2">
              <div className="icon"></div>
              <div className="line"></div>
            </div>          
            <div className="text-2">
              <h3>Get Notified</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore </p>
            </div>
          </div>

          <div className="container-3">
            <div className="line-3">
              <div className="icon"></div>
              <div className="line"></div>
            </div>
            <div className="text-3">
              <h3>Never Miss Out</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore </p>
            </div>
          </div>

          <div className="container-4">
            <div className="line-4">
              <div className="icon"></div>
            </div>
            <div className="text-4">
              <h3>Quick Answers Chat</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore </p>
            </div>
          </div>

        </div>

        <div className="container">
          <p> U-Pick Up makes it easy to blahblahabbla Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore </p>
          <img src="../public/images/google_play.png" alt="googleplay" />
        </div>

        <div className="shapes">

          <div className="rectangle">
            <div className="shape-1"></div>
            <div className="shape-2"></div>
            <div className="shape-3"></div>
          </div>

          <div>
            <div className="shape-4"></div>
            <div className="shape-5"></div>
            <div className="shape-6"></div>
          </div>

          <div>
            <div className="shape-7"></div>
            <div className="shape-8"></div>
          </div>
        
        </div>

    </div>
  )
}

export default LandingPage
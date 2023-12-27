import React from 'react';
import './SignIn.css';

const SignIn = () => {
  return (
    <div>
      <div className="wrapper">
        <div className="row">
          <div className="column-left">
          {/* <div className="left-box">
          </div> */}
          </div>
            <div className="column-right">
              <div className="form-box">
                <h2> Sign in to U-Pick Up </h2>
                <form action="#">
                  <div className="input-field">
                    <input type="text" className="idNum" id="idNum" required />
                    <label htmlFor="email"> ID Number </label>
                  </div>
                  <div className="input-field">
                    <input type="password" className="password" id="password" required />
                    <label htmlFor="password"> Password </label>
                  </div>
                  <button type="submit" className="btn"> Sign In </button>
                </form>

                <div className="dhave-account">
                  <p>Don’t have an account? <span>SIGN UP!</span></p>
                </div>
              </div>
            </div>
        </div>
      
      </div>
    </div>
  );
};

export default SignIn;

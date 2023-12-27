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
                <h2> Sign In </h2>
                <form action="#">
                  <div className="input-field">
                    <input type="text" className="email" id="email" required />
                    <label htmlFor="email"> Email </label>
                  </div>
                  <div className="input-field">
                    <input type="password" className="password" id="password" required />
                    <label htmlFor="password"> Password </label>
                  </div>
                  <button type="submit" className="btn"> Sign In </button>
                </form>
              </div>
            </div>
        </div>
      
      </div>
    </div>
  );
};

export default SignIn;

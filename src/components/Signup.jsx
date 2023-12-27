import React from 'react';
import './SignUp.css';

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
                <h2> Create new account </h2>
                <form action="#">
                  <div className="input-field">
                    <input type="text" className="name" id="name" required />
                    <label htmlFor="name"> Name </label>
                  </div>
                  <div className="input-field">
                    <input type="text" className="idNum" id="idNum" required />
                    <label htmlFor="idNum"> ID Number </label>
                  </div>
                  <div className="input-field">
                    <input type="text" className="password" id="password" required />
                    <label htmlFor="password"> Password </label>
                  </div>
                  <div className="input-field">
                    <input type="password" className="confirmPassword" id="confirmPassword" required />
                    <label htmlFor="confirmPassword"> Confirm password </label>
                  </div>
                  <button type="submit" className="btn"> Sign In </button>
                </form>
                <div className="have-account">
                    <p>Already have an account?<span> SIGN IN! </span> </p>
                </div>
                
              </div>
            </div>
        </div>
      
      </div>
    </div>
  );
};

export default SignIn;

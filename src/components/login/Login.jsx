import React from 'react';
import './Login.css'; 
import { Link } from 'react-router-dom';
const Login = () => {
  return (
    <div className="login-page">
      <div className="left-section">
        <div className="logo-container">
          <h1>TOO GOOD TO GO</h1>
          <p>FOOD WASTING SOLUTION</p>
        </div>
        <img
          className="salad-image"
          src="https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2019/04/Cobb-Salad-main.jpg"
          alt="Salad"
        />
      </div>

      <div className="right-section">
        <div className="form-container">
          <form>
            <div className="input-group">
              <label htmlFor="username">Username</label>
              <input type="text" id="username" placeholder="Username" />
            </div>
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" placeholder="Password" />
            </div>
            <div className="forgot-password">
              <a href="#forgot">Forgot Password?</a>
            </div>

            <Link to="/home" className="">
            <button type="submit" className="login-button">
              Login
            </button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

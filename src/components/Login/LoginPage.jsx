import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './LoginPage.css';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();

  const handleCancel = () => {
    navigate('/');
  };

  const handleCreateAccount = () => {
    navigate('/register');
  };

  return (
    <div className="login-page">
      <div className="container d-flex justify-content-center align-items-center min-vh-100">
        <div className="card p-4" style={{ width: '100%', maxWidth: '400px' }}>
          <h2 className="mb-4 text-center">Login</h2>
          <form>
            <div className="form-group mb-3">
              <label htmlFor="email">Email address</label>
              <input 
                type="email" 
                className="form-control" 
                id="email" 
                placeholder="Enter email" 
              />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="password">Password</label>
              <input 
                type="password" 
                className="form-control" 
                id="password" 
                placeholder="Password" 
              />
            </div>
            <button type="submit" className="btn btn-primary w-100">Login</button>
            <div className="d-flex justify-content-between mt-3">
              <button 
                type="button" 
                className="btn btn-secondary"
                onClick={handleCancel}
              >
                Cancel
              </button>
              <button 
                type="button" 
                className="btn btn-outline-primary"
                onClick={handleCreateAccount}
              >
                Create Account
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

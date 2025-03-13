import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './RegisterPage.css';
import { useNavigate } from 'react-router-dom';

const RegisterPage = () => {
  const navigate = useNavigate();

  const handleCancel = () => {
    navigate('/');
  };

  const handleLogin = () => {
    navigate('/login');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="register-page">
      <div className="container d-flex justify-content-center align-items-center min-vh-100">
        <div className="card p-4" style={{ width: '100%', maxWidth: '400px' }}>
          <h2 className="mb-4 text-center">Register</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group mb-3">
              <label htmlFor="name">Name</label>
              <input 
                type="text"
                className="form-control"
                id="name"
                placeholder="Enter your name"
                required
              />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="email">Email address</label>
              <input 
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter email"
                required
              />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="password">Password</label>
              <input 
                type="password"
                className="form-control"
                id="password"
                placeholder="Enter password"
                required
              />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input 
                type="password"
                className="form-control"
                id="confirmPassword"
                placeholder="Confirm password"
                required
              />
            </div>
            <button type="submit" className="btn btn-primary w-100">Register</button>
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
                onClick={handleLogin}
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;

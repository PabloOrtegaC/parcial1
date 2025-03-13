// Header.jsx
import React from 'react';
import './header.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <div className="header-left">
        <img 
          src="/path/to/logo.png" 
          alt="Logo" 
          className="logo" 
        />
        <span className="site-name">Site Name</span>
      </div>
      <div className="header-center">
        <input 
          type="text" 
          placeholder="Search..." 
          className="search-input" 
        />
      </div>
      <div className="header-right">
        <Link to="/login" className="login-button">Login</Link>
      </div>
    </header>
  );
}

export default Header;

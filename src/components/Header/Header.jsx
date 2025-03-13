// Header.jsx
import React from 'react';
import './header.css'; // Import the CSS file for styling

// Functional component for the Header
function Header() {
  return (
    <header className="header">
      {/* Left section: Contains the logo and the site name */}
      <div className="header-left">
        <img 
          src="/path/to/logo.png" 
          alt="Logo" 
          className="logo" 
        />
        <span className="site-name">Site Name</span>
      </div>

      {/* Center section: Contains the search bar */}
      <div className="header-center">
        <input 
          type="text" 
          placeholder="Search..." 
          className="search-input" 
        />
      </div>

      {/* Right section: Contains the login/profile button */}
      <div className="header-right">
        <button className="login-button">Login</button>
      </div>
    </header>
  );
}

export default Header;

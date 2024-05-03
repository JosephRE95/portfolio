import React from 'react';
import './navbar.css';
const Navbar = () => {
  return (
    <nav style={{ backgroundColor: '#084C16', padding: '20px' }}>
      <ul >
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
import React from 'react';
import "./Header.css"
import logo from "../../assets/images/Logo.svg"

const Header = () => {
  return (
    <header className='header'>
      <nav className='navbar'>
        {/* Logo */}
        <div className='logo'><img src={logo} alt="" /></div>

        {/* Menu */}
        <ul className='menu-list'>
          <li className='menu-item'>Order</li>
          <li className='menu-item'>Order Review</li>
          <li className='menu-item'>Manage Inventory</li>
          <li className='menu-item'>Login</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
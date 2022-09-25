import React from "react";
import './Header.css'

const Header = () => {
  return (
    <div className="header-container">
        <div className="logo">
            <img src="logo.svg" alt="logo" />
        </div>
        <div className="header-link">
            <a href="/home">Home</a>
            <a href="/shop">Shop</a>
            <a href="/Cart">Cart</a>
            <a href="/about">About</a>
        </div>
    </div>
  );
};

export default Header;

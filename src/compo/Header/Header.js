import React from "react";
import { Link } from "react-router-dom";
import './Header.css'

const Header = () => {
  return (
    <div className="header-container">
        <div className="logo">
            <img src="logo.svg" alt="logo" />
        </div>
        <div className="header-link">
            <Link to="/home">Home</Link>
            <Link to="/cart">Cart</Link>
            <Link to="/about">About</Link>
        </div>
    </div>
  );
};

export default Header;

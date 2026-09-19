import React from "react";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <div className="nav-1">
        <div className="logo">
          <h1>
          <Link to={"/"} style={{textDecoration:"none"}}>  <span>🛍️ </span> Shop<span style={{color:"blue"}}>Ease</span></Link>
          </h1>
        </div>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/cart">Cart</Link>
        </div>
      </div>
      <div className="nav-2">
        <SearchBar />
        <div className="profile">
        <Link to="/profile">👤</Link>
      </div>
      <div className="cart">
        <Link to="/cart">🛒</Link>
      </div>

      </div>
      
    </div>
  );
}

export default Navbar;

import React from "react";
import { Camera } from "lucide-react";
import { CircleUser } from "lucide-react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

function Navbar() {
  return (
    <header className="navbar">
      <div className="div-1">
        <div className="logo">
          <span>
            <Camera size={22}/>
          </span>
          PhotoHub
        </div>

        <div className="nav-links">
          <Link to={"/"}>Home</Link>
          <Link to={"/photos"}>Photos</Link>
          <Link to={"/albums"}>Albums</Link>
          <Link to={"/favorites"}>Favorites</Link>
        </div>
      </div>
      <div className="div-2">
        <SearchBar />
        <Link to={"/profile"}>
          <div className="profile">
            <span>
              <CircleUser size={35}/>
            </span>
          </div>
        </Link>
      </div>
    </header>
   
  );
}

export default Navbar;

import React from "react";
import Hero from "../Components/Hero";
import { Link } from "react-router-dom";
import { Camera, Heart, Folder } from "lucide-react";
// nav -home- photo

function Home() {
  return (
    <div className="home">
      <Hero />
      <div className="home-content">
        <h2>PhotoHub</h2>
        <p>Discover, explore and save your favorite photos.</p>
      </div>
      <div className="home-cards">
        <Link to="/photos" className="Link">
          <div className="home-card">
            <div className="span"><span><Camera size={30} style={{color:"blue"}}/></span></div>
            <h3>Photos</h3>
            <p>Browse beautiful photos.</p>
            <div className="home-card-btn">&gt;</div>
          </div>
        </Link>
        <Link to="/albums" className="Link">
          <div className="home-card">
            <div className="span"><span><Folder size={30} style={{color:"purple"}}/></span></div>
            <h3>Albums</h3>
            <p>Explore photos by album.</p>
            <div className="home-card-btn"> &gt;</div>
          </div>
        </Link>
        <Link to="/favorites" className="Link">
          <div className="home-card">
            <div className="span"><span><Heart size={30} style={{color:"red"}}/></span></div>
            <h3>Favorites</h3>
            <p>view your saved photos.</p>
            <div className="home-card-btn">&gt;</div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Home;

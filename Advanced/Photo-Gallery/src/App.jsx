import React from "react";
import Navbar from "./Components/Navbar";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./Pages/Home";
import Photos from "./Pages/Photos";
import Albums from "./Pages/Albums";
import Favorites from "./Pages/Favorites";
import Profile from "./Pages/Profile";
import Errormessage from "./Components/Errormessage";

function App() {
  return (
    <div>
      
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/photos" element={<Photos />}></Route>
          <Route path="/albums" element={<Albums />}></Route>
          <Route path="/fav" element={<Favorites />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/error" element={<Errormessage/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

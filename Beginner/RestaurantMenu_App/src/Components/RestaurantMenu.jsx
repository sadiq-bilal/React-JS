import React from 'react'
import { useState } from 'react';

function RestaurantMenu({ menu }) {
    const [category, setCategory] = useState("All");

    const filteredMenu = category === 'All' ? menu : menu.filter((item) => item.category === category)
  return (
    <div>       
      <h1>Our Restaurant</h1>
      <p> 🍽️🍽️🍽️🍽️🍽️Delicious food, made with love ❤️</p>

      <div className="buttons">
        <button style={category === "All" ? {backgroundColor: "#e85d04"} : {backgroundColor: "white", color: "black"}} onClick={() => {setCategory("All")}}>All</button>
        <button onClick={() => {setCategory("Starters")}}>Starters</button>
        <button onClick={() => {setCategory("Main Course")}}>Main Course</button>
        <button onClick={() => {setCategory("Biryani")}}>Biryani</button>
        <button onClick={() => {setCategory("Fast Food")}}>Fast Food</button>
        <button onClick={() => {setCategory("South Indian")}}>South Indian</button>
    </div>
    <div>

      {filteredMenu.map((item) => {
        return(
          <div>
              <img src={item.image} alt={item.name} />
              <h2>{item.name}</h2>
              <p>{item.category}</p>
              <h3>₹{item.price}</h3>
          </div>
        )
      })}
    </div>
  </div>
  )
}

export default RestaurantMenu;

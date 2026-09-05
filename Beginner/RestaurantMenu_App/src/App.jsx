import React from 'react'
import RestaurantMenu from './Components/RestaurantMenu'


function App() {
  const menu = [
    {
      id: 1,
      name: "Chicken Biryani",
      price: 220,
      category: "Biryani",
      image: "https://images.unsplash.com/photo-1631515242808-497c3fbd3972"
    },
    {
      id: 2,
      name: "Mutton Biryani",
      price: 280,
      category: "Biryani",
     image: "https://images.pexels.com/photos/9609856/pexels-photo-9609856.jpeg"

    },
    {
      id: 3,
      name: "Veg Biryani",
      price: 180,
      category: "Biryani",
      image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0"
    },
    {
      id: 4,
      name: "Butter Chicken",
      price: 240,
      category: "Main Course",
      image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398"
    },
    {
      id: 5,
      name: "Paneer Butter Masala",
      price: 200,
      catagory: "Main Course",
      image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7"
    },
    {
      id: 6,
      name: "Chicken Tikka",
      price: 220,
      category: "Starters",
      image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0"
    },
    {
      id: 7,
      name: "Paneer Tikka",
      price: 180,
      category: "Starters",
      image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8"
    },
    {
      id: 8,
      name: "French Fries",
      price: 120,
      category: "Fast Food",
      image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877"
    },
    {
      id: 9,
      name: "Chicken Burger",
      price: 160,
      category: "Fast Food",
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd"
    },
    {
      id: 10,
      name: "Masala Dosa",
      price: 100,
      category: "South Indian",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvgGr_22ErBWIc-LZ4Db_1UlcBFZLNitKjyF-OzXcPcA&s=10"
    },
    {
      id: 11,
      name: "Idli Sambar",
      price: 80,
      category: "South Indian",
      image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc"
    },
    {
      id: 12,
      name: "Plain Dosa",
      price: 90,
      category: "South Indian",
      image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976"
    }
  ];
  return (
    <div>
      <RestaurantMenu menu={ menu} />
    </div>
  )
}

export default App;

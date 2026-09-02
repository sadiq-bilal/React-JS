import React from 'react'
import { useState } from 'react'


function Search() {
    const [searchText, setSearchText] = useState("");
    const Products = [
        { id: 1, name: "Mobile Phone" },
        { id: 2, name: "Charger" },
        { id: 3, name: "Washing Machine" },
        { id: 4, name: "Earbuds" },
        { id: 5, name: "Air Conditioner" },
        { id: 6, name: "Geaser" },
        { id: 7, name: "Washing Machine" },
        { id: 8, name: "Mouse" },
        { id: 9, name: "Keyboard" },
        { id: 10,name: "Oven" },
        {id: 11, name : "Cupid"},
    ];
  const filteredProducts = Products.filter((product) => {
    return (
    product.name.toLowerCase().includes(searchText.toLowerCase())
  )
  });

  return (
    <div className='search-container'>  
      <h1>Search for Products...</h1>
          <input type="text"
            placeholder='Search here'
            style={{
              margin: "10px",
              padding: "10px",
              fontSize:"20px",
            }}
            value={searchText}
            onChange={ (e) => { 
              setSearchText(e.target.value)
            }}
          />
           <ul>
              { searchText.length !== 0 &&
                  filteredProducts.map((product) => {
        return (
         <>
       <li key={product.id}>{product.name}</li>
</>
        )
        
      
      })}
       </ul>

    </div>
  )
}

export default Search


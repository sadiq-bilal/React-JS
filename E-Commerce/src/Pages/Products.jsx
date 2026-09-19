import React from 'react'
import SearchBar from '../Components/SearchBar'
import CategoryFilter from '../Components/CategoryFilter'
import ProductList from '../Components/ProductList'
import products from '../Data/Product'
import { useState } from 'react'


function Products() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const categories = ["All","Electronics","Clothing","Footwear","Accessories"];
  const filteredProducts = products.filter((product) => {
    const searchFilter = product.name.toLowerCase().includes(search.toLowerCase().trim())
    const categoryFilter = category === "All" || category === product.category;
    return searchFilter && categoryFilter;
  })


  return (
    <div className='products'>
      <div className='products-header'>
      <SearchBar search={search} setSearch={setSearch} />
      <CategoryFilter category={category} setCategory={setCategory}/>
      </div>
      <div className='categories-btns'>
        {categories.map((item) => {
          return (
            <button
            onClick={() => setCategory(item)}
              key={item}>{item}</button>
          )
        })}
      </div>
      <ProductList products={filteredProducts}/>
    </div>
  )
}

export default Products

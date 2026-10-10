
import React from 'react'
import CategoryFilter from '../Components/CategoryFilter'
import ProductList from '../Components/ProductList'
import products from '../Data/Product'
import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import SortProducts from '../Components/SortProducts'


function Products() {
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get("search") || "";
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("");

  const categories = ["All", "Electronics", "Clothing", "Footwear", "Accessories"];
  
  const filteredProducts = products.filter((product) => {
    const searchFilter = product.name.toLowerCase().includes(search.toLowerCase().trim())
    const categoryFilter = category === "All" || category === product.category;
    return searchFilter && categoryFilter;
  })

  // sorting products
  if (sort === "low-high") {
    filteredProducts.sort((first,second)=> first.price - second.price)
  }
 
  if (sort === "high-low") {
    filteredProducts.sort((first,second)=> second.price - first.price)
  }
  if (sort === "rating") {
    filteredProducts.sort((first,second)=> second.rating - first.rating)
  }
  if (sort === "A-Z") {
    filteredProducts.sort((first,second)=> first.name.localeCompare(second.name))
  }
   if (sort === "Z-A") {
    filteredProducts.sort((first,second)=> second.name.localeCompare(first.name))
  }

  const handleCategoryChange = (value) => {
    setCategory(value);
    setSearchParams('');
  };


  return (
    <div className='products'>
      <div className='products-header'>
        <CategoryFilter category={category} setCategory={handleCategoryChange} />
        <SortProducts sort={sort} setSort={setSort} />
      </div>
      
      <div className='categories-btns'>
        {categories.map((item) => {
          return (
            <button
            onClick={() => handleCategoryChange(item)}
              key={item}>{item}</button>
          )
        })}
      </div>
      {filteredProducts.length > 0 ? (
        <ProductList products={filteredProducts}/>
      ) : (
          <div className='noProducts'>
            <h1>No products found</h1>
            <h3>We didn't find any product with name : "{search}"</h3>
          </div>
      )
    }
    </div>
  )
}

export default Products

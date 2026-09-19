import React from 'react'

function ProductCard({product}) {
  return (
    <div className='product-card'>
      <div className="productImage">
        <img src={product.image} alt="" />
      </div>
      <h3>{product.name}</h3>
      <h2> ₹{product.price}</h2>

      <div className="rating">
        <span> ⭐{product.rating}</span>
        <span>({product.reviews} reviews)</span>
      </div>
      <div className="category">
        {product.category}
      </div>
      
      <button>🛒 Add to Cart</button>
      
    </div>
  )
}

export default ProductCard

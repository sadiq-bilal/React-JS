
import React from 'react'

function SortProducts({setSort}) {
  return (
      <div className='categoryFilter'>
          <label >Sort by : </label>
      <select
        id='category'
        name='category'
        onChange={(e)=> {
            setSort(e.target.value)
        }}
      >
        <option value="">Default</option>
        <option value="low-high">Low to High</option>
        <option value="high-low">High to Low</option>
        <option value="rating">Rating</option>
        <option value="A-Z">A-Z</option>
        <option value="Z-A">Z-A</option>
      </select>
    </div>
  )
}

export default SortProducts

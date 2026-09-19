import React from 'react'

function SearchBar({search, setSearch}) {
  
  return (
    <div className='search-bar'>
      <div className="input">
        <input
          type="text"
          placeholder=' Search products...'
          value={search}
          onChange={(e)=> setSearch(e.target.value)}
        />
        <button>🔍</button>
      </div>
    </div>
  )
}

export default SearchBar

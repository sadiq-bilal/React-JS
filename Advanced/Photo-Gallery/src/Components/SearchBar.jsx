import React from 'react'
import { Search } from 'lucide-react'

function SearchBar() {
  return (
    <div className="searchbar">
      <input type="text" placeholder="Search photos..." />
      <button><Search size={17}/> </button>
    </div>
  )
}

export default SearchBar

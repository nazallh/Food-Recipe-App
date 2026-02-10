import React from 'react'
import './Searchbar.css'

function Searchbar({setSearch}) {

  
  return (
    <div id='search' className="searchbar-wrapper">
      <div className="search-container">
        <input onChange={(e)=> setSearch(e.target.value)} type="text" placeholder="Search recipes..." />
        <button>Search</button>
      </div>
    </div>
    
  )
}

export default Searchbar
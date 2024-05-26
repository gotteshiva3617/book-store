import React from 'react'
import {useNavigate} from 'react-router-dom'

function SearchBar({onSearch,handleKeyPress}) {
    const [query,setQuery] = React.useState(' ')
    const navigate = useNavigate()
    const handleSearch = (e)=>{
      e.preventDefault();
      onSearch(query)
      setQuery('')
      navigate('/')
    }
  
  return (
    <form class="d-flex">
      <input class="form-control me-2" 
        value={query}
        onChange={(e)=>setQuery(e.target.value)}
        onKeyPress={handleKeyPress}
        type="search" 
        placeholder="Search books here..." 
        aria-label="Search"/>
      <button class="btn btn-outline-success" 
        type="submit" 
        onClick={handleSearch}>Search</button>
    </form>
  )
}

export default SearchBar

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
    <form className="form">
      <input type='text'
      value={query}
      onChange={(e)=>setQuery(e.target.value)}
      onKeyPress={handleKeyPress}
      placeholder='Search for Books...'
      />
      <button type="submit" onClick={handleSearch}>Search</button>
    </form>
  )
}

export default SearchBar

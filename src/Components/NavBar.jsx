import React from 'react'
import SearchBar from './SearchBar'
import {NavLink,useNavigate} from 'react-router-dom'

function NavBar({onSearch,cartItems,initial}) {
  const navigate = useNavigate()

  const handleSearch =(query)=>{
    onSearch(query)
    navigate('/')
  }
  const pleaseLogout =()=>{
    window.location.pathname = '/login'
  }

  const handleKeyPress = (e)=>{
    if(e.key === 'Enter'){
      handleSearch()
    }
  }
  return (
    <nav className="nav-container">
      <h1>Book Store</h1>
      <SearchBar to="/" onKeyPress={handleKeyPress} onSearch={handleSearch}/>
      <div className="nav-links">
        {!initial ?
        <NavLink to='/login' className="list-item"><button className="btn">Login</button></NavLink>
        :<div className="nav-links">
          <NavLink to="/" className="list-item">Home</NavLink>
          <NavLink to="/about" className="list-item">About</NavLink>
          <NavLink to="/profile" className="list-item">Profile</NavLink>
          <NavLink to="/cart" className="list-item"><i className="fa fa-shopping-cart"></i><sup>{cartItems.length}</sup></NavLink>
          <button className="btn" onClick={pleaseLogout}> Logout</button>
        </div>
        }
      </div>
    </nav>
  )
}

export default NavBar

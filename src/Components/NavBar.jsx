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
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <img src='./book.png' alt="logo" width="40px" height="40px"/>
        <a className="navbar-brand" href="#">BookStore</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          {!initial ? 
              <li className="nav-item">
              <NavLink to='/login' className="nav-link" aria-current="page"><button className="btn btn-primary" type="login">Login</button></NavLink>
            </li> :
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
              <NavLink to="/" className="nav-link active" aria-current="page">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/about" className="nav-link">About</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/profile" className="nav-link">Profile</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/cart"  className="nav-link">Cart<sup>{cartItems.length}</sup></NavLink>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li><hr className="dropdown-divider"/></li>
                  <li><a className="dropdown-item" href="">Something else here</a></li>
                </ul>
              </li>
              <li className="nav-item"> 
                <button className="btn btn-danger" onClick={pleaseLogout}>logout</button>
              </li>
            </ul>
            }
          </ul>
        <form className="d-flex">
          <SearchBar to="/" onKeyPress={handleKeyPress} onSearch={handleSearch}/>
        </form>
      </div>
    </div>
  </nav>
  )
}

export default NavBar


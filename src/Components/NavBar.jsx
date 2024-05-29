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
    <>
    <nav className="navbar   navbar-light bg-light"  data-bs-toggle="collapse">
      <div className="container-fluid">
        <div className="header">
          <img src='./book.png' alt="logo" width="40px" height="40px"/>
          <a className="navbar-brand" href="#">BookStore</a>
        </div>
        <form className="d-flex">
          <SearchBar to="/" onKeyPress={handleKeyPress} onSearch={handleSearch}/>
        </form>
        <div className="" id="navbarSupportedContent">
          {!initial ? 
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink to="/about" className="nav-link">About</NavLink>
            </li>
            <li className="nav-item active">
              <NavLink to='/login' className="nav-link" aria-current="page"><button className="btn btn-primary" type="login">Login</button></NavLink>
            </li> 
          </ul>
            :
            <ul className="navbar-nav">
              <li className="nav-item">
              <NavLink to="/" className="nav-link" aria-current="page">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/profile" className="nav-link">Profile</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/cart"  className="nav-link">Cart<sup>{cartItems.length}</sup></NavLink>
              </li>
              <li className="nav-item"> 
                <button className="btn btn-danger" onClick={pleaseLogout}>logout</button>
              </li>
            </ul>
            }
          </div>
          
        
        {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="true" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button> */}
      </div>
  </nav>
</>
  )
}
export default NavBar
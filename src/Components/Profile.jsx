import React from 'react'
import {useUser} from '../UserContext'
import {useNavigate} from 'react-router-dom'

function Profile() {
    const {user} = useUser()
    const navigate = useNavigate();

    const goToHome = ()=>{
      navigate('/')
    }
    const goToCart = ()=>{
      navigate('/cart')
    }

  return (
    <div className="profile-container">
        <div className="profile-details">
            <img src={user.image} title={user.email} alt="Profile"/>
            <h3>Welcome,{user.username}</h3>
            <p>{user.email}</p>
            <p>Email Verified : {user.emailVerified ? <span>Yes</span> : 'No'}</p>
            <div className="goto-btn">
              <button className="btn btn-primary" onClick={goToHome}>Home</button>
              <button className="btn btn-primary" onClick={goToCart}>Cart</button>
            </div>
        </div>
    </div>
  )
}

export default Profile

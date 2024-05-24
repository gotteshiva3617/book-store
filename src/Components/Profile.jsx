import React from 'react'
import {useUser} from '../UserContext'

function Profile() {
    const {user} = useUser()
  return (
    <div className="profile-container">
        <div className="profile-details">
            <img src={user.image} title={user.email} alt="Profile"/>
            <h3>Welcome,{user.username}</h3>
            <p>{user.email}</p>
            <p>Email Verified : {user.emailVerified ? <span>Yes</span> : 'No'}</p>
        </div>
    </div>
  )
}

export default Profile

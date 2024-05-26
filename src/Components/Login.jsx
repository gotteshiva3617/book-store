import React from 'react'
import {  signInWithPopup } from 'firebase/auth';
import { auth, googleProvider,gitHubProvider,facebookProvider } from '../firebase';
import { useUser } from '../UserContext';
import { useNavigate } from 'react-router-dom'

function Login({setLogin}){
    const navigate = useNavigate()
    const {setUser} = useUser()

    
    const googleLogin = ()=>{
        signInWithPopup(auth,googleProvider)
        .then(function(){
          const user = {
              username : auth.currentUser.displayName,
              email : auth.currentUser.email,
              emailVerified : auth.currentUser.emailVerified,
              image : auth.currentUser.photoURL
            }
            console.log(user.username,user.email,user.emailVerified,user.image)
            setUser(user)
            setLogin(true)
            navigate('/profile')
        })
        .catch(function(err){
            console.log(err)
        })
    }

    const facebookLogin = ()=>{
        signInWithPopup(auth,facebookProvider)
        .then(function(){
            const user = {
                username : auth.currentUser.displayName,
                email : auth.currentUser.email,
                image : auth.currentUser.photoURL
              }
              console.log(user.username,user.email,user.image)
              setUser(user)
              setLogin(true)
              navigate('/profile')
          })
          .catch(function(err){
              console.log(err)
          })
    }
    const githubLogin = async ()=>{
        try{
            const result = await auth.signInWithPopup(gitHubProvider)
            const user = result.user
            console.log('Logged in as:',user)
        }catch(error){
            console.log('Error logging in with github:',error)
        }
    }
    return(
        <div className='login-form'>
            <button type="button" className="btn btn-outline-info" onClick={googleLogin}>Continue With Google</button><br/>
            <button type="button" className="btn btn-outline-info" onClick={githubLogin}>Continue With GitHub</button><br/>
            <button type="button" className="btn btn-outline-info" onClick={facebookLogin}>Continue With Facebook</button><br/>
        </div>
    )
}

export default Login
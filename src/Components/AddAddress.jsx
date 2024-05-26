import React,{useState,useEffect} from 'react'
import { auth,myDatabase  } from '../firebase';

function AddAddress() {
    const [user,setUser] = useState(null)
    const [address,setAddress] = useState({
        name:'',
        mobile:'',
        email:'',
        street : '',
        city:'',
        state:'',
        pincode:'',
        country:''
    })
    const [message,setMessage] = useState('')

    useEffect(()=>{
        const unsubsribe = auth.onAuthStateChanged((user)=>{
            if(user){
                setUser(user);
            }else{
                setUser(null);
            }
        })
        return ()=> unsubsribe()
    },[])

    const handleChange = (e)=>{
        const {name,value} = e.target;
        setAddress({
            ...address, [name]:value
        })
    }
    const handleSubmit = async (e)=>{
        e.preventDefault()
        if(!user){
            setMessage('You must be logged in to updata your address')
            return;
        }
        try{
            await myDatabase.collection('addresses').doc(user.uid).set(address,{merge: true});
            setMessage('Address updated Successfully.')
        }
        catch(error){
            console.error('Error updating details',error)
            setMessage('Error updating details.')
        }
    }
  return (
    <div className='address'>
        <h3>Add Address</h3>
        {message && <p>{message}</p>}
      <form className="address-form" onSubmit={handleSubmit}>
        <div className="form-div">
            <div>
                <label><strong>Name</strong></label>
                <input type="text" 
                name="name" 
                placeholder="Enter Your Name"
                value={address.name}
                onChange={handleChange} required
                />
                <label><strong>Email</strong></label>
                <input type="email" 
                name="email" 
                placeholder="Enter Your Email"
                value={address.email}
                onChange={handleChange} required
                />
                <label><strong>Mobile</strong></label>
                <input type="number" 
                name="mobile" 
                placeholder="Enter Your Mobile"
                value={address.mobile}
                onChange={handleChange} required
                />
                <label><strong>Street</strong></label>
                <input type="text" 
                name="street" 
                placeholder="Enter Street..."
                value={address.street}
                onChange={handleChange} required
                />
            </div>
            <div>
                <label><strong>City</strong></label>
                <input type="text" 
                name="city" 
                placeholder="Enter City..."
                value={address.city}
                onChange={handleChange} required
                />
                <label><strong>State</strong></label>
                <input type="text" 
                name="state" 
                placeholder="Enter State..."
                value={address.state}
                onChange={handleChange} required
                />
                <label><strong>PinCode</strong></label>
                <input type="number" 
                name="pincode" 
                placeholder="Enter Pincode"
                value={address.pincode}
                onChange={handleChange} required
                />
                <label><strong>Country</strong></label>
                <input type="text" 
                name="country" 
                placeholder="Enter country"
                value={address.country}
                onChange={handleChange} required
                />
            </div>
        </div>
        <button type="submit"><a href="https://buy.stripe.com/test_14kbKt8722Ki9mEeUW">Proceed to Payment</a></button>
        
      </form>
    </div>
  )
}

export default AddAddress

import React from 'react'
import {useNavigate} from 'react-router-dom'

function Price({cartItems}) {
  const navigate = useNavigate()
    const cartTotal = cartItems.reduce((total,item)=> total + item.saleInfo.listPrice?.amount,0).toFixed(0)
    const GST = (cartTotal * 18/100).toFixed(0)
    let deliveryFee = Number(cartTotal < 1000 ? 0 : 100).toFixed(0)
    const TotalPrice = (Number(cartTotal) + Number(GST) + Number(deliveryFee))

    const addressPage = ()=>{
      navigate('/address')
    }
    return (
      <div className="price-container">
          { cartTotal < 1000 ? <p className="add-line"> Add <strong>{999 - cartTotal}</strong> to get free delivery</p> : ''}
        <div className="prices">
          <div>
            <h6>Item Price:</h6>
            <h6><strike>{cartTotal}</strike> {cartTotal * 80/100}</h6>
          </div>
          <div>
            <h6>GST:</h6>
            <h6>{GST}</h6>
          </div>
          <div>
            <h6>Delivery Fee:</h6>
            <h6>{deliveryFee}</h6>
          </div>
          <div>
            <h6>Total:</h6>
            <h6>{TotalPrice}</h6>
          </div>
        </div>
        <div className="price-buttons">
          <button className="btn btn-success" onClick={addressPage}>Add Address</button><br/>
          <button className="btn btn-outline-danger" onClick={addressPage}>Continue To Payment</button>
        </div>
      </div>
      // Payment Link = https://buy.stripe.com/test_14kbKt8722Ki9mEeUW
  )
}
export default Price;
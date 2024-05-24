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
            <h5>Item Price:</h5>
            <h5>{cartTotal}</h5>
          </div>
          <div>
            <h5>GST:</h5>
            <h5>{GST}</h5>
          </div>
          <div>
            <h5>Delivery Fee:</h5>
            <h5>{deliveryFee}</h5>
          </div>
          <div>
            <h5>Total:</h5>
            <h5>{TotalPrice}</h5>
          </div>
        </div>
        <button className="btn" onClick={addressPage}>Continue To Payment</button>
      </div>
      // Payment Link = https://buy.stripe.com/test_14kbKt8722Ki9mEeUW
  )
}
export default Price;
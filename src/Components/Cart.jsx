import React from 'react'
import CartItems from './Cart/CartItems'
import Price from './Cart/Price'
import {useNavigate} from 'react-router-dom'

function Cart({cartItems,onRemoveFromCart}) {
  const navigate = useNavigate()
  const AddItems = ()=>{
    navigate('/')
  }
  return (
    <div className='cart'>
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <div>
          <p>No items in the cart</p>
          <button className="btn btn-outline-primary" onClick={AddItems}>Add Items</button>
        </div>
      ) : (
        <div className="cart-handler">
          <CartItems cartItems={cartItems} onRemoveFromCart={onRemoveFromCart}/>
          <Price cartItems={cartItems}/>
        </div>
      )}
    </div>
  )
}

export default Cart
import React from 'react'
import CartItems from './Cart/CartItems'
import Price from './Cart/Price'

function Cart({cartItems,onRemoveFromCart,onIncrQuantity,onDecrQuantity}) {
  return (
    <div className='cart'>
      <h2>Your Cart</h2>
      {/* <button className="btn back" onClick={()=> window.history.back()}>Back</button> */}
      <div className="cart-handler">
        <CartItems cartItems={cartItems} onRemoveFromCart={onRemoveFromCart} onIncrQuantity={onIncrQuantity} onDecrQuantity={onDecrQuantity}/>
        <Price cartItems={cartItems}/>
      </div>
    </div>
  )
}

export default Cart
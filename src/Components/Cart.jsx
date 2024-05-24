import React from 'react'
import CartItems from './Cart/CartItems'
import Price from './Cart/Price'

function Cart({cartItems,onRemoveFromCart,onIncrQuantity,onDecrQuantity}) {
  return (
    <div className="cart">
        <CartItems cartItems={cartItems} onRemoveFromCart={onRemoveFromCart} onIncrQuantity={onIncrQuantity} onDecrQuantity={onDecrQuantity}/>
        <Price cartItems={cartItems}/>
    </div>
  )
}

export default Cart

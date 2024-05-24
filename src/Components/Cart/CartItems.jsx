import React from 'react'

function Cart({cartItems,onRemoveFromCart,onIncrQuantity,onDecrQuantity}) {
  return (
    <div className="cart-container">
      <h1 className="cart-heading">Your Cart</h1>
      {cartItems.length < 0 ? (
        <p className="none">No items in cart.</p>
      ):(
        <ul className="cart-list">
          {cartItems.map((item,index)=>(
            <li key={index} className="list-item">
              <img src={item.volumeInfo?.imageLinks && item.volumeInfo.imageLinks?.thumbnail} alt={item.volumeInfo.title} />
              <h4>{item.volumeInfo.title}</h4>
               <button onClick={onDecrQuantity}>-</button>
               <button onClick={onIncrQuantity}>+</button>
              <h5>₹{item.saleInfo.listPrice?.amount.toFixed(0) }</h5>
              <button onClick={()=>onRemoveFromCart(item.id)}>Remove from Cart</button>
            </li>
          ))}
        </ul>
      )}
    </div>
    
  )
}

export default Cart
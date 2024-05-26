import React from 'react'

function Cart({cartItems,onRemoveFromCart,onIncrQuantity,onDecrQuantity}) {
  return (
    <div className="cart-container">
      {cartItems.length < 0 ? (
        <p className="none">No items in cart.</p>
      ):(
        <div className="cart-div">
          {cartItems.map((item,index)=>(
            <div className="cart-items">
              <div className="cart-img">
                <img src={item.volumeInfo?.imageLinks && item.volumeInfo.imageLinks?.thumbnail} alt={item.volumeInfo.title} />
              </div>
              <div className="cart-content">
                <h4>{item.volumeInfo.title}</h4>
                <button onClick={onDecrQuantity}>-</button>
                <button onClick={onIncrQuantity}>+</button><br/>
                <button onClick={()=>onRemoveFromCart(item.id)}>Remove from Cart</button>
              </div>
              <div className="cart-price">
                <h6>₹<strike>{item.saleInfo.listPrice?.amount.toFixed(0)}</strike> <span>20% off</span></h6>
                <h5>₹{(item.saleInfo.listPrice?.amount.toFixed(0) * 80 / 100)}</h5>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
    
  )
}

export default Cart
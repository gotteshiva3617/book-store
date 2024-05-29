import React from 'react'
import BookList from './BookList'

function Home({books,cartItems,onAddToCart}){
    return (
      <div id='body'>
        {books.length > 0 ? (
            <BookList books={books} cartItems={cartItems} onAddToCart={onAddToCart}/>
          ):(
            <p className="loader">Loading...</p>
          )
        }
      </div>
  )
}

export default Home

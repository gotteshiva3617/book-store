import React from 'react'
import {Link} from 'react-router-dom'

function BookList({books,cartItems,onAddToCart}) {
    if(books.length === 0){
        return  <div className="banner">Search for books...</div>
    }
  return (
    <div className="card-container">
        {books.map(book=>{
            // const isInCart = cartItems.some((item)=>item.id === books.id)
            // const price = books.saleInfo?.listPrice?.amount
            const price = book.saleInfo?.listPrice ? book.saleInfo?.listPrice?.amount : "N/A"
            return (
            <div key={book.id} className="card">
                <img src={book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title} />
                <div className="card-content">
                    <h2 className="title">{book.volumeInfo.title}</h2>
                    <h3 className="subtitle">{book.volumeInfo.subtitle}</h3>
                    <h3 className="authors">{book.volumeInfo.authors?.join(', ')}</h3>
                    <h5>Price: ₹{price}</h5>
                    <Link to={`/book/${book.id}`} className="more">ViewDetails</Link>
                </div>
            </div>
            )}
        )}
    </div>
  )
}

export default BookList

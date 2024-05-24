import React,{useState,useEffect} from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'

function BookDetails({cartItems,onAddToCart}) {
    let {bookId} = useParams();
    const [data,setData] = useState(null);
    const addToCart =()=>{
      onAddToCart(bookId)
    }
    useEffect(()=>{
      const fetchBook = async ()=>{
        try {
          const response = await axios.get(`https://www.googleapis.com/books/v1/volumes/${bookId}`)
          setData(response.data)
        }catch(error){
          console.log('Error fetching book details',error)
          setData(null)
        }
      }
      fetchBook()
  },[bookId])

    if(!data) return <div className="loader">Loading...</div>
    if(data.length === 0) return <div>No results found</div>

    const isInCart = cartItems.some((book) => book.id === bookId)
    const price = data.saleInfo.listPrice ? data.saleInfo.listPrice.amount : "N/A"

  return (
    <div className="details-container">
          <button className="back-btn" onClick={()=> window.history.back()}>Back</button>
        <img src={data.volumeInfo.imageLinks && data.volumeInfo.imageLinks.thumbnail} alt={data.volumeInfo.title} />
        <div className="details-content">
          <h1>{data.volumeInfo.title}</h1>
          {/* <p><strong className="sapn-ele">Description: </strong>{data.volumeInfo.description || 'No Description Available'}</p> */}
          <p><strong className="sapn-ele">Category: </strong>{data.volumeInfo.categories}</p>
          <div className="details">
            <div className="d-child1">
              <p><strong className="sapn-ele">Country: </strong>{data.accessInfo.country}</p>
              <p><strong className="sapn-ele"> Language: </strong>{data.volumeInfo.language}</p>
              <p><strong className="sapn-ele">Sale Info: </strong>{data.saleInfo.saleability}</p>
              <p>Price : ₹{price}</p>
            </div>
            <div className="d-child2">
              <button><a href={data.volumeInfo.previewLink}>Preview</a></button><br/>
              <button><a href={data.accessInfo.webReaderLink}>Web Reader Link</a></button>
            </div>
          <button className="btn" onClick={addToCart} disabled={isInCart}>{isInCart ? 'item already added to cart' : 'add to cart'}</button>
          </div>
        
        </div>
    </div>


  )
}

export default BookDetails

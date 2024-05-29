import React,{useState,useEffect} from 'react'
import {useParams,useNavigate} from 'react-router-dom'
import axios from 'axios'

function BookDetails({cartItems,onAddToCart}) {
    let {bookId} = useParams();
    const [data,setData] = useState(null);
    const [showFullText,setShowFullText] = useState(false)
    const navigate = useNavigate()

    const goToBack = ()=>{
      window.history.back()
    }
    const goToCart = ()=>{
      navigate('/cart')
    }

    const handleReadMore = ()=>{
      setShowFullText(!showFullText)
    }

    const renderText = (text) => {
      if(!text){
        return <p>Description not available</p>
      }

      if (showFullText) {
        return (
          <div>
            <span>{text}</span>
            <span onClick={handleReadMore} style={{color:'blue'}}>Show less</span>
          </div>
        );
      }
      
      const truncatedText = text.length > 100 ? text.substring(0, 97) + '...' : text;
      return (
        <div>
          <span>{truncatedText}
          {text.length > 100 && <span style={{color:'blue'}} onClick={handleReadMore}>Read more</span>}
          </span>
        </div>
      );

    };

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
    <div className="card mb-3" style={{maxWidth: '1000px',margin:'2rem auto'}}>
      <div className="row column g-0">
        <div className="col-md-4">
          <img className="img-fluid" 
          src={data.volumeInfo.imageLinks && data.volumeInfo.imageLinks.thumbnail} 
          alt={data.volumeInfo.title} 
          style={{width:'350px'}}/>
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h3 class="card-title">{data.volumeInfo.title}</h3>
            <h3 class="card-title">{data.volumeInfo.authors}</h3>
            <p class="card-text"><strong>Description: </strong>{renderText(data.volumeInfo.description) || 'No Description Available'}</p>
            <p class="card-text"><strong>Category: </strong>{data.volumeInfo.categories}</p>
            <div>
                <div>
                  <p><strong className="sapn-ele">Country: </strong>{data.accessInfo.country}</p>
                  <p><strong className="sapn-ele"> Language: </strong>{data.volumeInfo.language}</p>
                  <p><strong className="sapn-ele">Sale Info: </strong>{data.saleInfo.saleability}</p>
                  <p> <strong>Price: </strong> ₹{price}</p>
                </div>
                <div className='out-links'>
                  <button className="btn btn-warning" onClick={addToCart} disabled={isInCart}>{isInCart ? 'Item added to Cart' : 'Add to Cart'}</button>
                  <button className="btn btn-outline-primary" onClick={goToCart}>View Cart</button><br/>
                  <a className="btn btn-primary" href={data.volumeInfo.previewLink}>Preview</a>
                  <a className="btn btn-primary" href={data.accessInfo.webReaderLink}>Web Reader Link</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button className="btn btn-warning back-btn" onClick={goToBack}>Back</button>
    </div>
  )
}

export default BookDetails

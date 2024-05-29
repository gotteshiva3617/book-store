import React from 'react'
import {Link} from 'react-router-dom'

function BookList({books}) {
    const [showFullText,setShowFullText] = React.useState(false)
    
    const handleReadMore = ()=>{
        setShowFullText(!showFullText)
    }
    const renderTitle = (text) => {
        
        if (showFullText) {
          return (
            <div>
              <h2>{text}</h2>
              <button onClick={handleReadMore}>Show less</button>
            </div>
          );
        }
    
        const truncatedTitle = text.length > 20 ? text.substring(0, 17) + '...' : text;
        return (
          <div>
            <h2>{truncatedTitle}</h2>
            {text.length > 20 && <button onClick={handleReadMore}>Read more</button>}
          </div>
        );
      };
    

    if(!books) return <p className="loader">Loading...</p>
    if(books.length === 0){
        return  <div className="banner">Search for books...</div>
    }
  return (
    <div className="card-container">
        {books.map(book=>{
            const price = book.saleInfo?.listPrice ? book.saleInfo?.listPrice?.amount : "N/A"
            {renderTitle(book.volumeInfo.title)}
            return (
                <div key={book.id} className="card" style={{width:'18rem', height:"30rem"}}>
                    <img src={book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.thumbnail} 
                    className="card-img-top" 
                    alt={book.volumeInfo.title} 
                    style={{width:'100%',height:'50%'}}
                    />
                    <div className="card-body">
                        <h3 className="card-title">{book.volumeInfo.title}</h3>
                        <h6 className="card-sub-title">{book.volumeInfo.subtitle}</h6>
                        <h5 className="card-title">{book.volumeInfo.authors}</h5>
                        <p className="card-text">Price: ₹{price}</p>
                        <Link to={`/book/${book.id}`} className="btn btn-primary">ViewDetails</Link>
                    </div>
                </div>
            )}
        )}
    </div>
  )
}

export default BookList

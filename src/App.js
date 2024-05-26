import React,{useState,useEffect} from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './Components/NavBar'
import Home from './Components/Home'
import About from './Components/About'
import BookDetails from './Components/BookDetails'
import AddAddress from './Components/AddAddress'
import Cart from './Components/Cart'
import Login from './Components/Login'
import Profile from './Components/Profile';
import './App.css'
import axios from 'axios'
import {UserProvider} from './UserContext'

function App() {
  const [isLoggedIn,setIsLoggedIn] = useState(false)
  const [books, setBooks] = useState([]);
  const [cart, setCart] = useState([]);
  const defaultQuery = '/'

  useEffect(() => {
    const fetchDefaultBooks = async () => {
      const response = await axios.get('https://www.googleapis.com/books/v1/volumes', { params: { q: defaultQuery } });
      setBooks(response.data.items || []);
    };

    fetchDefaultBooks();
  }, []);

  useEffect(()=>{
    const storedCart = localStorage.getItem(cart)
    if(storedCart){
      setCart(JSON.parse(storedCart))
    }
  },[cart])

  useEffect(()=>{
    localStorage.setItem('cart',JSON.stringify(cart))
  },[cart])

  const searchBooks =async (query) =>{
        await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}&key=AIzaSyCJm4mKF0_TGuwsz-5f3sKu8u1S4zPdBec`)
      .then(response => {
        setBooks(response.data.items || [])
      })
      .catch(error => console.log('Error fetching data', error))
  }

  const addToCart = (bookId)=> {
    if(!isLoggedIn){
      alert('Please Login First')
    }
    else{
      const book = books.find((book)=>book.id === bookId)
      const price = books.saleInfo?.listPrice?.amount;
      if(book.saleInfo && book.saleInfo.listPrice && !isNaN(book.saleInfo.listPrice?.amount)){
        const existingCartItem = cart.find(item => item.id === bookId)
        if(existingCartItem){
          setCart(cart.map(item => item.id === bookId ? {...item, quantity: item.quantity + 1}: item))
        }
        else{
          setCart([...cart,{...book,price: parseFloat(price), quantity: 1}])
        }
      }else{
        alert("This Item cannot be added to cart because it does not have a valid Price.")
      }
    }
  }
  const removeFromCart = (bookId)=>{
    setCart(cart.filter((book)=>book.id !== bookId))
  }

  const handleIncrementQuantity = (bookId)=>{
    console.log(bookId)
    setCart(cart.map(item=>item.id === bookId ?{...item, quantity: item.quantity + 1} : item))
  }

  const handleDecrementQuantity = (bookId)=>{
    console.log(bookId)
    setCart(cart.map(item=>item.id === bookId ? {...item, quantity: item.quantity > 1 ? item.quantity -1 : 1}:item))
  }

  return (
    <Router>
          <NavBar initial={isLoggedIn} onSearch={searchBooks} cartItems={cart}/>
            <UserProvider>
          <Routes>
              <Route exact path='/' element={<Home books={books} cartItems={cart} onAddToCart={addToCart}/>}/>
              <Route path='/about' element={<About/>}/>
              <Route path='/book/:bookId' element={<BookDetails login={isLoggedIn} cartItems={cart} onAddToCart={addToCart}/>}/>
              <Route path='/cart' element={<Cart login={isLoggedIn} cartItems={cart} onRemoveFromCart={removeFromCart} onIncrQuantity={handleIncrementQuantity} onDecrQuantity={handleDecrementQuantity}/>}/>
              <Route path='/address' element={<AddAddress/>}/>
              <Route path='/login' element={<Login login={isLoggedIn} setLogin={setIsLoggedIn}/>}/>
              <Route path='/profile' element={<Profile/>}/>
          </Routes>
            </UserProvider>
        </Router>
  )
}

export default App;

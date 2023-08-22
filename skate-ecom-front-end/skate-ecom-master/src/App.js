import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Header from './Components/Header';
import Home from './Components/Home';
import Cart from './Components/Cart';
import Checkout from './Components/Checkout';
import ProductPage from './Components/ProductPage';
import Login from './Components/Login';
import UserProfile from './Components/UserProfile';
import { BrowserRouter,Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';





function App() {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  

  
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Header/>}>
            <Route index element={<Home/>}/>
            <Route path='cart' element={<Cart/>}/>
            <Route path ='products/:type' element={<ProductPage cartProducts={products} addProducts={setProducts}/>}/>
            <Route path='checkout' element={<Checkout/>}/>
            <Route path='login' element={<Login/>}/>
            <Route path='profile' element={<UserProfile/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

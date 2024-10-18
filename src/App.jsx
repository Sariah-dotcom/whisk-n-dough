import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header'
import FooterComp from './components/FooterComp.jsx'
import Home from './pages/Home.jsx';
import AllDesserts from './pages/AllDesserts.jsx';
import ShoppingCart from './pages/ShoppingCart.jsx';


export default function App() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCartItems = localStorage.getItem('cartItems');
    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
    }
  }, []);

  return (
    <div>
      <Router>

        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/all-desserts' element={<AllDesserts cartItems={cartItems} setCartItems={setCartItems} />} />
          <Route path='/cart' element={<ShoppingCart cartItems={cartItems} />} />


        </Routes>
        <FooterComp />
      </Router>

    </div>
  )
}

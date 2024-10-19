import React from 'react';
import Cart from '../components/Cart.jsx';
import ScrollToTop from '../components/ScrollToTop.jsx';

export default function ShoppingCart({ cartItems }) {
  return (
    <div className='min-h-screen lg:flex lg:flex-col lg:items-center lg:text-center'>
      <ScrollToTop />
      <Cart cartItems={cartItems} />
    </div>
  );
}

import React from 'react';
import Cart from '../components/Cart.jsx';

export default function ShoppingCart({ cartItems }) {
  return (
    <div className='min-h-screen'>
      <Cart cartItems={cartItems} />
    </div>
  );
}

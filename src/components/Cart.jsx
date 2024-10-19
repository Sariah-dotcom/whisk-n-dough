import React from 'react';

export default function Cart({ cartItems = [] }) { 
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0); // Adjust for quantity

  return (
    <div className='pt-24 px-3 lg:pt-36'>
      <h2 className='font-red-hat font-black text-3xl mb-5 lg:text-4xl'>Your Cart</h2>
      <h3 className='font-red-hat font-bold text-2xl mb-3 text-gold'>Total: ${totalPrice.toFixed(2)}</h3> {/* Display total price */}
      
      {cartItems.length === 0 ? (
        <p className='font-montserrat font-semibold'>Your cart is empty.</p>
      ) : (
        <ul className='flex flex-col gap-3'>
          {cartItems.map((item, index) => (
            <li className='border-2 rounded-lg py-10 px-3 font-montserrat font-semibold' key={index}>
              {item.name} <br /> ${item.price} x {item.quantity} = ${(item.price * item.quantity).toFixed(2)}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

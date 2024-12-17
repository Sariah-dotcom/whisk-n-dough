import React, { useState } from 'react';

export default function ProductCard({ product, addToCart }) {
  const [buttonState, setButtonState] = useState(false);

  const handleAddToCart = () => {
    addToCart(product); // Trigger the parent addToCart function
    setButtonState(true); // Change button state to "Added"
    setTimeout(() => setButtonState(false), 1000); // Reset after 1 second
  };

  return (
    <div className='w-48 p-5 flex flex-col items-center gap-2 border-2 rounded-lg'>
      <img className='h-24' src={product.image} alt="product image" />
      
      <h3 className='font-red-hat font-black text-center'>{product.name}</h3>
      <p className='font-montserrat italic text-sm'>${product.price}</p>
      
      <div className='flex flex-col gap-2 font-montserrat font-semibold text-sm'>
        <button className='border-2 py-2 px-4 rounded-full'>Learn More</button>
        <button
          onClick={handleAddToCart} // Trigger Add to Cart and button style change
          className={`py-2 px-5 rounded-full text-white transition-colors duration-300 ${
            buttonState ? 'bg-dark-brown' : 'bg-tan'
          }`}
        >
          {buttonState ? 'Added' : 'Add to Cart'}
        </button>
      </div>
    </div>
  );
}

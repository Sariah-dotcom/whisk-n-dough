import React from 'react';

export default function ProductCard({ product, addToCart }) {
  return (
    <div className='w-48 p-5 flex flex-col items-center gap-2 border-2 rounded-lg'>
      <img className='h-24' src={product.image} alt="product image" />
      
      <h3 className='font-red-hat font-black text-center'>{product.name}</h3>
      <p className='font-montserrat italic text-sm'>${product.price}</p>
      
      <div className='flex flex-col gap-2 font-montserrat font-semibold text-sm'>
        <button className='border-2 py-2 px-4 rounded-full'>Learn More</button>
        <button 
          onClick={() => addToCart(product)} // Add to Cart is triggered here
          className='bg-tan py-2 px-5 rounded-full text-white'>
          Add to Cart
        </button>
      </div>
    </div>
  );
}

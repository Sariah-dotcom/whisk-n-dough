import React from 'react';
import ProductCard from '../components/ProductCard';
import { useNavigate } from 'react-router-dom';
import { Fade } from "react-awesome-reveal";
import ScrollToTop from '../components/ScrollToTop';

export default function AllDesserts({ cartItems, setCartItems }) {
  const navigate = useNavigate();

  const products = [
    { id: 1, image: '/images/brownie.png', name: 'Fudge Brownies (slice)', price: 2.25 },
    { id: 2, image: '/images/brownie.png', name: 'Fudge Brownies (box of 4)', price: 6.75 },
    { id: 3, image: '/images/double-choc-cookie.png', name: 'M&Ms Cookie', price: 2.50 },
    { id: 4, image: '/images/protein-cookie.png', name: 'Peanut Butter Protein Cookie', price: 3.50 },
    { id: 5, image: '/images/strawberry-cookie.png', name: 'Funfetti Strawberry Cookie', price: 3.50 },
    { id: 6, image: '/images/cinnamon-roll.png', name: 'Cinnamon Roll', price: 4.00 },
    { id: 7, image: '/images/blueberry-cookie.png', name: 'Blueberry Cheesecake Cookie', price: 4.25 },
    { id: 8, image: '/images/choc-chip-cookie.png', name: 'Chocolate Chip Cookie', price: 3.75 },
    { id: 9, image: '/images/matcha-cookie.png', name: 'Matcha Cookie', price: 4.75 },
  ];

  const addToCart = (product) => {
    const updatedCartItems = cartItems.map(item =>
      item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
    );

    if (!cartItems.some(item => item.id === product.id)) {
      updatedCartItems.push({ ...product, quantity: 1 });
    }

    setCartItems(updatedCartItems);
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
  };

  return (
    <div className='pt-24 lg:pt-36 lg:flex lg:flex-col lg:items-center'>
      <ScrollToTop />
      <Fade direction='down' triggerOnce>
        <h2 className='font-red-hat font-black text-3xl mb-5 px-3 lg:text-4xl lg:mb-10'>All Desserts</h2>
      </Fade>

      <div className='flex flex-wrap gap-3 justify-center lg:w-1/2'>
        {products.map(product => (
          <ProductCard key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>

      {/* Button to navigate to cart page */}
      <div className="flex justify-center mt-5">
        <button 
          className='bg-tan text-white px-4 py-2 rounded-full font-montserrat font-semibold'
          onClick={() => navigate('/cart')}
        >
          View Cart
        </button>
      </div>
    </div>
  );
}

import React from 'react'
import CookieCard from './CookieCard'

export default function CookieDisplay() {
  return (
    <div className='flex flex-col items-center gap-24 px-3'>
      <div className='text-center'>
        <h2 className='font-red-hat font-bold text-3xl'>Our Best Sellers</h2>
        <p className='font-montserrat font-semibold text-tan'>See what everyone is raving about</p>
      </div>
      
      <CookieCard 
        bgprimary="bg-yellow-brown" 
        cookieImg="/images/protein-cookie.png" 
        cookieName="Peanut Butter Protein Cookie" 
        cookieDescription="Soft and chewy, it's made with wholesome ingredients like natural peanut butter, protein powder, and oats, offering the perfect balance of sweet and savory." 
    />

    <CookieCard 
        bgprimary="bg-dark-brown" 
        cookieImg="/images/choc-chip-cookie.png" 
        cookieName="Classic Chocolate Chip Cookie" 
        cookieDescription="Soft and chewy, it's made with wholesome ingredients like natural peanut butter, protein powder, and oats, offering the perfect balance of sweet and savory." 
    />

    <CookieCard 
        bgprimary="bg-dark-pink" 
        cookieImg="/images/strawberry-cookie.png" 
        cookieName="Funfetti Strawberry Cookie" 
        cookieDescription="Soft and chewy, it's made with wholesome ingredients like natural peanut butter, protein powder, and oats, offering the perfect balance of sweet and savory." 
    />

    <CookieCard 
        bgprimary="bg-light-blue" 
        cookieImg="/images/blueberry-cookie.png" 
        cookieName="Blueberry Cheesecake Cookie" 
        cookieDescription="Soft and chewy, it's made with wholesome ingredients like natural peanut butter, protein powder, and oats, offering the perfect balance of sweet and savory." 
    />

    </div>
  )
}

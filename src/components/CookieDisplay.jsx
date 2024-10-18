import React from 'react'
import CookieCard from './CookieCard'

export default function CookieDisplay() {
  return (
    <>
      <div className='text-center mb-10' id='best-sellers'>
        <h2 className='font-red-hat font-black text-4xl'>Our Best Sellers</h2>
        <p className='font-montserrat font-semibold text-tan'>See what everyone is raving about</p>
      </div>
    <div className='flex flex-col items-center gap-24 px-3 lg:gap-[12rem] lg:mb-[10rem]'>
      
      <CookieCard 
        bgprimary="bg-yellow-brown" 
        borderColor="border border-gold"
        btnColor="bg-gold"
        cookieImg="/images/protein-cookie.png" 
        cookieName="Peanut Butter Protein Cookie" 
        cookieDescription="Soft and chewy, it's made with wholesome ingredients like natural peanut butter, protein powder, and oats, offering the perfect balance of sweet and savory." 
    />

    <CookieCard 
        bgprimary="bg-dark-brown" 
        borderColor="border border-tan"
        btnColor="bg-tan"
        cookieImg="/images/choc-chip-cookie.png" 
        cookieName="Classic Chocolate Chip Cookie" 
        cookieDescription="Soft and chewy, it's made with wholesome ingredients like natural peanut butter, protein powder, and oats, offering the perfect balance of sweet and savory." 
    />

    <CookieCard 
        bgprimary="bg-dark-pink" 
        borderColor="border border-light-pink"
        btnColor="bg-light-pink"
        cookieImg="/images/strawberry-cookie.png" 
        cookieName="Funfetti Strawberry Cookie" 
        cookieDescription="Soft and chewy, it's made with wholesome ingredients like natural peanut butter, protein powder, and oats, offering the perfect balance of sweet and savory." 
    />

    <CookieCard 
        bgprimary="bg-light-blue" 
        borderColor="border border-dark-blue"
        btnColor="bg-dark-blue"
        cookieImg="/images/blueberry-cookie.png" 
        cookieName="Blueberry Cheesecake Cookie" 
        cookieDescription="Soft and chewy, it's made with wholesome ingredients like natural peanut butter, protein powder, and oats, offering the perfect balance of sweet and savory." 
    />

    </div>
    </>

  )
}

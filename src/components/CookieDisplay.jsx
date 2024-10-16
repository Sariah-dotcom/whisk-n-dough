import React from 'react'
import CookieCard from './CookieCard'

export default function CookieDisplay() {
  return (
    <div className='flex flex-col gap-24 px-3'>
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

    </div>
  )
}

import React from 'react'
import CookieCard from './CookieCard'
// import { AttentionSeeker, Fade } from "react-awesome-reveal";

export default function CookieDisplay() {
  return (

    <div className='flex flex-col gap-5'>
      <h2 className='text-center text-4xl font-bold'>Best Sellers</h2>
      <div className='flex -gap-5 md:justify-center overflow-x-auto p-4 scrollbar-hide'>
        <CookieCard bgprimary="bg-blue" rotation="-rotate-6" />
        <CookieCard bgprimary="bg-pink" rotation="rotate-6" />
        <CookieCard bgprimary="bg-yellow" rotation="-rotate-6" />
        <CookieCard bgprimary="bg-green" rotation="rotate-6" />
      </div>
    </div>
  // <>
  //   <AttentionSeeker effect='tada' fraction='0.5' triggerOnce>
  //     <div className='text-center mb-20' id='best-sellers'>
  //       <h2 className='font-red-hat font-black text-3xl lg:text-4xl'>Our Best Sellers</h2>
  //       <p className='font-montserrat font-semibold text-gold text-sm'>See what everyone is raving about</p>
  //     </div>
  //   </AttentionSeeker>
      

  //   <div className='flex flex-col items-center gap-24 px-5 lg:gap-[10rem] lg:mb-[10rem]'>
      
  //     <Fade direction='left' triggerOnce>
  //       <CookieCard 
  //         bgprimary="bg-yellow-brown" 
  //         borderColor="border border-gold"
  //         btnColor="bg-gold"
  //         cookieImg="/images/protein-cookie.png" 
  //         cookieName="Peanut Butter Protein Cookie" 
  //         cookieDescription="Soft and chewy, it's made with wholesome ingredients like peanut butter, protein powder,offering the perfect balance of sweet and savory." 
  //       />
  //     </Fade>
      
  //     <Fade direction='right' triggerOnce>
  //       <CookieCard 
  //         bgprimary="bg-dark-brown" 
  //         borderColor="border border-tan"
  //         btnColor="bg-tan"
  //         cookieImg="/images/choc-chip-cookie.png" 
  //         cookieName="Classic Chocolate Chip Cookie" 
  //         cookieDescription="A classic treat with a rich, buttery dough packed with chocolate chips, delivering the perfect balance of crispy edges and a soft, chewy center. " 
  //       />
  //     </Fade>

  //     <Fade direction='left' triggerOnce>
  //       <CookieCard 
  //         bgprimary="bg-dark-pink" 
  //         borderColor="border border-light-pink"
  //         btnColor="bg-light-pink"
  //         cookieImg="/images/strawberry-cookie.png" 
  //         cookieName="Funfetti Strawberry Cookie" 
  //         cookieDescription="This is a delightful blend of soft, buttery cookie dough mixed with vibrant rainbow sprinkles and real strawberry bits" 
  //       />
  //     </Fade>

  //     <Fade direction='right' triggerOnce>
  //       <CookieCard 
  //         bgprimary="bg-light-blue" 
  //         borderColor="border border-dark-blue"
  //         btnColor="bg-dark-blue"
  //         cookieImg="/images/blueberry-cookie.png" 
  //         cookieName="Blueberry Cheesecake Cookie" 
  //         cookieDescription="A delightful twist on a classic dessert! A soft and chewy cookie bursting with sweet blueberries and swirls of creamy cheesecake" 
  //       />
  //     </Fade>

  //   </div>
  // </>

  )
}

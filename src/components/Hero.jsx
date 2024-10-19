import React from 'react'
import { Fade } from "react-awesome-reveal";

export default function Hero() {
  return (
    <div className='flex flex-col justify-center items-center gap-5 h-screen text-center lg:flex-row lg:justify-between '>
      
      <Fade cascade direction='down'>
        <div className='mt-36 lg:mt-30 lg:text-left lg:pl-20'>
          <h1 className='font-red-hat font-black text-4xl mb-5 lg:text-7xl'>Freshly Baked, <br /> <span className='text-gold italic'>Sweetly</span> Made.</h1>
          <p className='font-montserrat font-semibold text-sm px-20 lg:text-lg lg:mt-3 lg:px-0'>Indulge in the Warmth of Handcrafted Desserts</p>
        </div>
      </Fade>
      
      <Fade direction='up'>
        <img className='h-64 lg:h-auto lg:mt-10' src="/images/hero-cookies.png" alt="" />
      </Fade>
    </div>
  )
}

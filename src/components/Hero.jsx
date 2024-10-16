import React from 'react'

export default function Hero() {
  return (
    <div className='flex flex-col justify-center gap-2 text-center h-screen'>
      <div>
        <img className='absolute right-12 -mt-3 h-8' src="/images/text-decor.png" alt="page-decor" />
      </div>
      <h1 className='font-red-hat font-bold text-4xl'>Freshly Baked, <br /> <span className='text-tan italic'>Sweetly</span> Made.</h1>
      <img className='absolute left-10 mt-12 h-8 rotate-180' src="/images/text-decor.png" alt="page-decor" />

      <p className='font-montserrat font-semibold text-sm'>Indulge in the Warmth of <br /> Handcrafted Cookies</p>
    </div>
  )
}

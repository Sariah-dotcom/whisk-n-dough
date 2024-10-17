import React from 'react'

export default function Promotion() {
  return (
    <div className='bg-dark-pink px-5 py-12 mt-12 flex flex-col gap-5
     border border-dark-brown text-white items-center lg:flex-row lg:justify-between lg:px-[10rem] lg:mb-[10rem]'>
      <div>

      <div className='text-center'>
        <h2 className='font-red-hat font-black text-3xl text-center mb-2 lg:text-7xl'>Stack 'em and <br /> snack 'em</h2>
        <p className='font-montserrat'>Visit us today!</p>
      </div>

      </div>
     
      <img src="/images/cookie-stack.png" alt="stack of chocolate chip cookies" />
    </div>
  )
}

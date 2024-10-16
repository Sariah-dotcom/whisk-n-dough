import React from 'react'

export default function Promotion() {
  return (
    <div className='bg-dark-pink px-5 py-12 mt-12 flex flex-col gap-5 border border-dark-brown text-white items-center'>
      <h2 className='font-red-hat font-black text-3xl text-center'>Stack 'em and <br /> snack 'em</h2>
      <p className='font-montserrat'>Visit us today!</p>
      <img src="/images/cookie-stack.png" alt="stack of chocolate chip cookies" />
    </div>
  )
}

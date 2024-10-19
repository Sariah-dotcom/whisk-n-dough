import React from 'react'

export default function DessertCard(props) {
  return (
    <div className='py-3 px-4 flex flex-col items-center w-48 text-center text-black bg-white rounded-t-full border-2'>
      <div>
        <img className='h-36 mb-3 ' src={props.dessertImg} alt="" />
      </div>
      <div className='px-3 flex flex-col gap-3'>
        <h3 className='font-red-hat font-bold text-md'>{props.dessertName}</h3>
        <p className='text-xs'>{props.dessertDescription}</p>
        <button className='bg-gold border-2 font-semibold text-sm text-white rounded-full py-3 px-5 font-montserrat'>Order Now</button>
      </div>
     
    </div>
  )
}

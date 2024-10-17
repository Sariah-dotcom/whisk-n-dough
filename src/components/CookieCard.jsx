import React from 'react';

export default function CookieCard({ bgprimary, borderColor, btnColor, cookieImg, cookieName, cookieDescription }) {
  return (
    <div className={`flex flex-col gap-5 items-center rounded-t-[200px] rounded-b-[30px] 
      text-white text-center px-5 border-2 
    
    
     lg:flex-row lg:rounded-tr-[10rem]
     lg:py-12 ${bgprimary} ${borderColor}`}>

      <img className='lg:w-[30rem] lg:absolute lg:-ml-[5rem] z-2' src={cookieImg} alt="cookie image" />
      
      <div className='flex flex-col items-center gap-6 pt-5 pb-12 lg:text-left lg:pb-0 lg:w-[70rem]'>
        <div className='lg:ml-[30rem]'>
          <h2 className='font-red-hat font-bold text-3xl lg:text-left'>{cookieName}</h2>
          <p className='font-montserrat'>{cookieDescription}</p>
        </div>
        
        
        <div className='flex gap-5 font-montserrat font-semibold lg:ml-[30rem]'>
            <button className='border rounded-full py-3 px-5'>Learn More</button>
            <button className={`${btnColor} rounded-full py-3 px-5`}>Order Now</button>
        </div>
      </div>
      
    </div>
  );
}

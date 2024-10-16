import React from 'react';

export default function CookieCard({ bgprimary, cookieImg, cookieName, cookieDescription }) {
  return (
    <div className={`flex flex-col gap-5 items-center rounded-t-full rounded-b-md text-white text-center ${bgprimary}`}>
      <img className='' src={cookieImg} alt="cookie image" />
      
      <div className='flex flex-col items-center gap-6 pt-5 pb-12'>
        <h2 className='font-red-hat font-bold text-3xl'>{cookieName}</h2>
        <p className='font-montserrat px-3'>{cookieDescription}</p>
        
        <div className='flex gap-5'>
            <button className='border rounded-full py-3 px-5'>Learn More</button>
            <button className='bg-gold rounded-full py-3 px-5'>Order Now</button>
        </div>
      </div>
      
    </div>
  );
}

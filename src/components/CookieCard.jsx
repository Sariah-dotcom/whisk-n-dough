import React from 'react';

// export default function CookieCard({ bgprimary, btnColor, cookieImg, cookieName, cookieDescription }) {
export default function CookieCard({ bgprimary, rotation}) {
  return (
    <div className={`h-52 w-52 border-2 flex-shrink-0 border-grey rounded-[1rem] ${bgprimary} ${rotation} `}>
      <h3>Cookie</h3>
    </div>
    // <div className={`flex flex-col gap-5 items-center rounded-t-[200px] rounded-b-[30px] 
    //   text-white text-center px-5 border-2 lg:flex-row lg:rounded-tr-[10rem] lg:py-12 ${bgprimary} ${borderColor}`}>

    //   <img className='w-[15rem] lg:w-[20rem] lg:absolute lg:-ml-[5rem] z-2' src={cookieImg} alt="cookie image" />
      
    //   <div className='flex flex-col items-center gap-6 pt-5 pb-12 lg:text-left lg:pb-0 lg:w-[70rem]'>
    //     <div className='lg:ml-[25rem]'>
    //       <h2 className='font-red-hat font-black text-3xl mb-3 lg:text-left'>{cookieName}</h2>
    //       <p className='font-montserrat text-sm px-3 lg:pr-20 lg:pl-0'>{cookieDescription}</p>
    //     </div>
        
    //     <div className='flex gap-5 font-montserrat font-semibold text-sm'>
    //         <button className='border rounded-full py-3 px-5'>Learn More</button>
    //         <button className={`${btnColor} rounded-full py-3 px-5`}>Order Now</button>
    //     </div>
    //   </div>
      
    // </div>
  );
}

import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

export default function FooterComp() {
  const year = new Date().getFullYear();
  return (
    <footer className='bg-tan text-center pt-12 pb-4 border-t-2 border-black text-white mt-12 bottom-0'>
        <h3 className='font-bold font-red-hat text-4xl mb-5'>whisk & <br /> dough</h3>
       
        <ul className='flex gap-4 py-3 justify-center font-montserrat text-sm'>
          <Link to='/'>Home</Link>
          <HashLink to='/#best-sellers'>Best Sellers</HashLink>
          <Link to='/all-desserts'>All Desserts</Link>
          <HashLink to='/#faqs'>FAQs</HashLink>
        </ul>

        <div className='flex gap-5 text-2xl justify-center py-3 mt-5'>
          <a href='https://www.facebook.com/' target='blank'>
            <FaFacebook />
          </a>

          <a href='https://www.instagram.com/' target='blank'>
            <RiInstagramFill />
          </a>

          <a href='#'>
            <MdEmail />
          </a> 
        </div>
        <p className='text-xs mt-8 font-montserrat'>Copyright © {year}</p>
    </footer>
  )
}

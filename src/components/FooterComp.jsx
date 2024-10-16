import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";

export default function FooterComp() {
  return (
    <footer className='bg-tan text-center py-10 border text-white border-med-brown'>
        <h3 className='font-bold font-red-hat text-4xl mb-5'>whisk & <br /> dough</h3>
        <ul className='flex gap-2 justify-center font-montserrat'>
            <li><a href="#">Home</a></li>
            <li><a href="#">Our Story</a></li>
            <li><a href="#">Cookies</a></li>
            <li><a href="#">Other Desserts</a></li>
        </ul>
        <div className='flex gap-5 text-2xl justify-center py-3'>
          <FaFacebook />
          <RiInstagramFill />
          <MdEmail />
        </div>
    </footer>
  )
}

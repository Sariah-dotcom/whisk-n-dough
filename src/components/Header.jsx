import React from 'react'
import { RiMenu2Fill } from "react-icons/ri";
import { MdOutlineShoppingCart } from "react-icons/md";


export default function Header() {
  return (
   <nav className='flex justify-between p-3 font-red-hat font-bold text-xl fixed bg-white w-full border-b border-med-brown'>
        <RiMenu2Fill />
        <h1><a href="#">whisk & dough</a></h1>
        <MdOutlineShoppingCart />
   </nav>
  )
}

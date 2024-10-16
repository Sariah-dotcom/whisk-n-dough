import React from 'react'
import { RiMenu2Fill } from "react-icons/ri";
import { MdOutlineShoppingCart } from "react-icons/md";


export default function Header() {
  return (
   <nav className='flex justify-between items-center p-3 font-red-hat font-bold text-xl fixed bg-white w-full border-b'>
        <RiMenu2Fill />
        <h1><a href="#">whisk & dough</a></h1>
        <MdOutlineShoppingCart />
   </nav>
  )
}

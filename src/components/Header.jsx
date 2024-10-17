import { RiMenu2Fill } from "react-icons/ri";
import { MdOutlineShoppingCart } from "react-icons/md";
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';
import { useState } from "react";
import { IoIosClose } from "react-icons/io";

export default function Header() {
  const [getMenuVisible, setMenuVisible] = useState(false);

  function showMenu() {
    setMenuVisible(!getMenuVisible); // Toggle the visibility
  }

  return (
    <nav className='z-[999] flex justify-between items-center px-3 py-5 font-red-hat font-black text-xl fixed bg-white w-screen border-b lg:p-5 lg:text-2xl'>
      
      {/* Menu: Show only when getMenuVisible is true */}
      <div
        className={`fixed flex flex-col gap-12 top-0 left-0 pl-10 pt-12 border-r-2 h-screen w-[20rem] bg-white z-50 text-2xl transition-transform duration-300 ${
          getMenuVisible ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <IoIosClose onClick={showMenu} className="cursor-pointer text-4xl" />
        <Link to='/' onClick={showMenu}>Home</Link>
        <HashLink to='/' onClick={showMenu}>My Cart</HashLink>
        <HashLink to='/' onClick={showMenu}>Best Sellers</HashLink>
        <Link to='/all-desserts' onClick={showMenu}>All Desserts</Link>
        <HashLink to='/#faqs' onClick={showMenu}>FAQs</HashLink>
      </div>

      {/* Menu icon: Toggles the menu */}
      <RiMenu2Fill onClick={showMenu} className="cursor-pointer" />

      <Link to='/'>whisk & dough</Link>

      {/* Cart icon */}
      <MdOutlineShoppingCart />
    </nav>
  );
}

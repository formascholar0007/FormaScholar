import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const navItems = [
    { id: 1, text: 'Home', path: '/' }, 
    { id: 2, text: 'About', path: '/about' },
    { id: 3, text: 'Contact', path: '/contact' }, 
    { id: 4, text: 'Signin', path: '/loginform' }, 
    { id: 5, text: 'Signup', path: '/signup' }, 
  ];

  return (
    <div className='bg-white shadow-lg flex justify-between items-center h-24 max-w-full mx-auto px-4 text-black font-Alice text-xl'>
      <img
            className="h-10 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="FormaScholar"
          />
      <ul className='hidden md:flex'>
        {navItems.map(item => (
          <li
            key={item.id}
            className='p-6 hover:text-[#30a580] rounded-xl m-2 cursor-pointer duration-300'
          >
            <NavLink to={item.path} activeClassName="text-black"> 
              {item.text}
            </NavLink>
          </li>
        ))}
      </ul>

      {/* Mobile Navigation Icon */}
      <div onClick={handleNav} className='block md:hidden'>
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      {/* Mobile Navigation Menu */}
      <ul
        className={
          nav
            ? 'fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-400 bg-white ease-in-out duration-500 z-10'
            : 'ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]'
        }
      >
        {/* Mobile Logo */}
        <img
            className="h-10 w-auto mx-auto m-6"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="FormaScholar"
          />

        {/* Mobile Navigation Items */}
        {navItems.map(item => (
          <li
            key={item.id}
            className='p-4 border-b rounded-sm hover:bg-[#00df9a] duration-300 hover:text-black cursor-pointer border-gray-600'
          >
            <NavLink to={item.path} activeClassName="text-black"> {/* Use NavLink with item path */}
              {item.text}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;

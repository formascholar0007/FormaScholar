import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const navItems = [
    // { id: 1, text: "Home", path: "/" },
    // // { id: 2, text: 'About', path: '/about' },
    // // { id: 3, text: 'AdditionalInfo', path: '/AdditionalInfo'},
    // { id: 4, text: "Signin", path: "/loginform" },
    // { id: 5, text: "Register Now", path: "/registrationform" },
  ];

  return (
    // <div className="bg-white shadow-lg flex justify-between items-center h-24 max-w-full mx-auto px-4 text-black font-Alice text-xl">
    //   <img
    //     className="h-10 w-auto"
    //     src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
    //     alt="FormaScholar"
    //   />
    //   <ul className="hidden md:flex">
    //     {navItems.map((item) => (
    //       <li
    //         key={item.id}
    //         className="p-6 hover:text-[#30a580] rounded-xl m-2 cursor-pointer duration-300"
    //       >
    //         <NavLink to={item.path} activeClassName="text-black">
    //           {item.text}
    //         </NavLink>
    //       </li>
    //     ))}
    //   </ul>

    //   {/* Mobile Navigation Icon */}
    //   <div onClick={handleNav} className="block md:hidden">
    //     {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
    //   </div>

    //   <ul
    //     className={
    //       nav
    //         ? "fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-400 bg-white ease-in-out duration-500 z-10"
    //         : "ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]"
    //     }
    //   >
    //     <img
    //       className="h-10 w-auto mx-auto m-6"
    //       src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
    //       alt="FormaScholar"
    //     />

    //     {navItems.map((item) => (
    //       <li
    //         key={item.id}
    //         className="p-4 border-b rounded-sm hover:bg-[#00df9a] duration-300 hover:text-black cursor-pointer border-gray-600"
    //       >
    //         <NavLink to={item.path} activeClassName="text-black">
    //           {" "}
    //           {item.text}
    //         </NavLink>
    //       </li>
    //     ))}
    //   </ul>
    // </div>

    <nav className="bg-white  shadow-lg flex justify-between items-center h-24 max-w-full mx-auto px-4 text-black font-Alice text-xl">
      <NavLink to="/">
        <img
          className="h-10 w-auto"
          src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
          alt="FormaScholar"
        />
      </NavLink>
      <ul className="md:flex">
        <li>
          <NavLink
            to="/loginform"
            className="block py-3 md:px-8 px-6 text-2xl dark:text-gray-900 hover:text-white md:hover:text-[#49dbc8] md:bg-transparent md:hover:bg-transparent bg-[#49dbc8] hover:bg-[#06c4ab] rounded-md">
            Login
          </NavLink>
        </li>
        <li className="hidden md:block">
          <NavLink 
            to="/registrationform"
            className="block py-3 px-3 text-2xl text-white hover:text-black bg-[#49dbc8] hover:bg-[#06c4ab] rounded-md">
            Register Now
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;

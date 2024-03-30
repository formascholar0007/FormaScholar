import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { FaCircleUser } from "react-icons/fa6";
import { useAuth } from "../auth/AuthContext";

const Navbar = () => {
  const { isLoggedIn, handleLogout } = useAuth();
  const [navOpen, setNavOpen] = useState(false);

  const handleNavToggle = () => {
    setNavOpen(!navOpen);
  };
 
  const handleLogoutClick = () => {
    handleLogout(); 
    setNavOpen(false); 
  };

  return (
    <nav className="bg-white shadow-lg flex justify-between items-center h-[70px] max-w-full mx-auto px-4 text-black font-Alice text-xl">
      <NavLink to="/">
        <img
          className="h-10 w-auto"
          src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
          alt="FormaScholar"
        />
      </NavLink>
      <div className="md:flex items-center relative">
        {isLoggedIn ? (
          <div className="relative">
            <button
              onClick={handleNavToggle}
              className="block py-3 md:px-4  text-2xl dark:text-gray-900 hover:text-[#06c4ab] md:hover:text-[#49dbc8] md:bg-transparent md:hover:bg-transparent rounded-md mr-4"
            >
              <FaCircleUser size={35} />
            </button>
            {navOpen && (
              <div className="absolute top-[50px] right-0 mt-2 w-48 bg-white shadow-xl rounded-md z-10">
                <NavLink
                  to="/profile"
                  className="block w-full py-3 px-4 text-left text-gray-800 hover:bg-gray-200"
                >
                  Profile
                </NavLink>
                <button
                  onClick={handleLogoutClick}
                  className="block w-full py-3 px-4 text-left text-gray-800 hover:bg-gray-200"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        ) : (
          <ul className="md:flex">
            <li>
              <NavLink
                to="/loginform"
                className="block py-3 md:px-8 px-6 text-2xl dark:text-gray-900 hover:text-white md:hover:text-[#49dbc8] md:bg-transparent md:hover:bg-transparent bg-[#49dbc8] hover:bg-[#06c4ab] rounded-md"
              >
                Login
              </NavLink>
            </li>
            <li className="hidden md:block">
              <NavLink
                to="/registration"
                className="block py-3 px-3 text-2xl text-white hover:text-black bg-[#49dbc8] hover:bg-[#06c4ab] rounded-md"
              >
                Register Now
              </NavLink>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

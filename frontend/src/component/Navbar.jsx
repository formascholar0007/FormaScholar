import React, { useEffect, useState, useRef } from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";
import axios from "axios";

const Navbar = React.memo(() => {
  const { isLoggedIn, handleLogout } = useAuth();
  const [navOpen, setNavOpen] = useState(false);
  const [avatar, setAvatar] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const dropdownRef = useRef(null);

  const handleNavToggle = (event) => {
    event.stopPropagation();
    setNavOpen(!navOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setNavOpen(false);
      }
    };
  
    window.addEventListener("click", handleClickOutside);
  
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, [navOpen]); 
  

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("token"));
      axios
        .get("http://localhost:3000/api/v1/profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          const userData = response.data.data;
          setAvatar(userData.avatar);
        })
        .catch((error) => {
          console.log("Error Fetching user Data : ", error);
          setError("Error fetching user data");
        })
        .finally(() => {
          setLoading(false);
        });
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <nav className="bg-white shadow-lg border-b flex justify-between items-center h-[70px] max-w-full mx-auto px-4 text-black font-Alice text-xl">
      <NavLink to="/">
        <img
          className="h-10 w-auto" // Adjust the height here (e.g., h-10, h-8, etc.)
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
              {avatar && (
                <img
                  src={avatar}
                  alt="avatar"
                  className="h-12 w-12 rounded-full object-cover"
                />
              )}
            </button>
            {navOpen && (
              <div ref={dropdownRef} className="absolute top-[50px] right-0 mt-2 w-48 bg-white shadow-xl rounded-md z-10">
                <NavLink
                  to="/"
                  className="block w-full py-3 px-4 text-left text-gray-800 hover:bg-gray-200"
                >
                  Home
                </NavLink>
                <NavLink
                  to="/profile"
                  className="block w-full py-3 px-4 text-left text-gray-800 hover:bg-gray-200"
                >
                  Profile
                </NavLink>
                <NavLink
                  to="/logout"
                  className="block w-full py-3 px-4 text-left text-gray-800 hover:bg-gray-200"
                >
                  Logout
                </NavLink>
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
});

export default Navbar;

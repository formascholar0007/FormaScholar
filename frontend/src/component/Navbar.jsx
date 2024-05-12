import React, { useEffect, useState, useRef } from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";
import axios from "axios";
import { FaUserCircle } from "react-icons/fa";

const Navbar = React.memo(() => {
  const { isLoggedIn, handleLogout } = useAuth();
  const [navOpen, setNavOpen] = useState(false);
  const [avatar, setAvatar] = useState(null);
  const [loading, setLoading] = useState(true);
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
        setLoading(false); // Update loading state on error
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading)
    return (
      <div role="status">
        <svg
          aria-hidden="true"
          className="w-12 h-12 mx-12 my-5 text-gray-300 animate-spin fill-[#06c4ab]"
          viewBox="0 0 100 101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
            fill="currentColor"
          />
          <path
            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
            fill="currentFill"
          />
        </svg>
        <span className="sr-only">Loading...</span>
      </div>
    );

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
              className="block py-3 md:px-4  text-2xl  dark:text-gray-900 hover:text-[#06c4ab] md:hover:text-[#49dbc8] md:bg-transparent md:hover:bg-transparent rounded-md mr-4"
            >
              <div className="rounded-full border-2 border-[#06c4ab]">
                {avatar && (
                  <img
                    src={avatar}
                    alt="avatar"
                    className="h-14 w-14 object-cover"
                  />
                )}
                
              </div>
            </button>
            {navOpen && (
              <div
                ref={dropdownRef}
                className="absolute top-[50px] right-0 mt-2 w-48 bg-white shadow-xl rounded-md z-10"
              >
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
                to="/authUser"
                className="block py-3 md:px-8 px-6 text-2xl dark:text-gray-900 hover:text-white md:hover:text-[#49dbc8] md:bg-transparent md:hover:bg-transparent bg-[#49dbc8] hover:bg-[#06c4ab] rounded-md"
              >
                Join Us
              </NavLink>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
});

export default Navbar;

import React from "react";
import { useState } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { FaCircleUser } from "react-icons/fa6";
import { HiOutlineLogin } from "react-icons/hi";
import { SiGnuprivacyguard } from "react-icons/si";

import {
  RiDashboardLine,
  RiAddLine,
  RiUserLine,
  RiLogoutCircleRLine,
  RiBookOpenLine,
} from "react-icons/ri";
import { useAuth } from "../auth/AuthContext";

const SideNav = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();
  const[adminProfile, setAdminProfile] = useState({
    adminName: "Ayush",
    adminPic: "https://i.pinimg.com/originals/cf/a6/04/cfa60461c22087bdc815e9140b96e600.jpg",
  })

  const { isAdmin, adminHandleLogout } = useAuth();

  const handleAdminLogout = () => {
    adminHandleLogout();
    navigate("/adminPanel/adminLogin");
  };

  const handleAdminProfile = async () => {
    const data = await fetch('');

  }

  return (
    <>
      <header>
        {isAdmin ? (
          <>
            <button
              className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg bg-black sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              <span className="sr-only">Open sidebar</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  clipRule="evenodd"
                  fillRule="evenodd"
                  d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                ></path>
              </svg>
            </button>

            <aside
              id="default-sidebar"
              className={`fixed top-0 left-0 z-40 w-72 text-white h-screen transition-transform ${
                sidebarOpen
                  ? "-translate-x-0"
                  : "-translate-x-full sm:translate-x-0"
              }`}
              aria-label="Sidebar"
            >
              <div className="h-full overflow-y-auto bg-gray-50 dark:bg-gray-800">
                <div className="mt-16 mb-8 flex flex-col items-center gap-6">
                  <img
                    src="https://static.vecteezy.com/system/resources/previews/006/552/415/non_2x/book-and-studen-logo-free-vector.jpg"
                    alt="Logo"
                    className="w-20 h-20"
                  />
                  <h2 className="text-2xl font-semibold">FormaScholar</h2>
                </div>
                <ul className="space-y-2 font-medium">
                  <li>
                    <NavLink
                      to="/adminPanel"
                      className="flex items-center px-4 py-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                      activeclassname="text-gray-900 dark:text-white"
                    >
                      <RiDashboardLine className="w-5 h-5" />
                      <span className="ms-3">Dashboard</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/adminPanel/className"
                      className="flex items-center px-4 py-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                      activeclassname="text-gray-900 dark:text-white"
                    >
                      <RiAddLine className="w-5 h-5" />
                      <span className="ms-3">Add New Data</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/adminPanel/adminUserData"
                      className="flex items-center px-4 py-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                      activeclassname="text-gray-900 dark:text-white"
                    >
                      <RiUserLine className="w-5 h-5" />
                      <span className="ms-3">User Data</span>
                    </NavLink>
                  </li>

                  <li>
                    <NavLink
                      to="/class-data"
                      className="flex items-center px-4 py-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                      activeclassname="text-gray-900 dark:text-white"
                    >
                      <RiBookOpenLine className="w-5 h-5" />
                      <span className="ms-3">Classes Data</span>
                    </NavLink>
                  </li>

                  <li>
                    <button
                      onClick={handleAdminLogout}
                      className="flex w-full items-center px-4 py-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                      activeclassname="text-gray-900 dark:text-white"
                    >
                      <RiLogoutCircleRLine className="w-5 h-5" />
                      <span className="ms-3">Log out</span>
                    </button>
                  </li>
                </ul>
                <div className="lg:mt-14 mt-6 px-4 pt-28 lg:pt-38 flex items-center gap-3">
                  {/* <FaCircleUser size={48} /> */}
                  <img src={adminProfile.adminPic} alt="avtar" className="w-22 h-16 rounded-full" />
                  <h1 className="text-xl">{adminProfile.adminName}</h1>
                </div>
              </div>
            </aside>
          </>
        ) : (
          <>
           <button
              className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg bg-black sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              <span className="sr-only">Open sidebar</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  clipRule="evenodd"
                  fillRule="evenodd"
                  d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                ></path>
              </svg>
            </button>
            <aside
              id="default-sidebar"
              className={`fixed top-0 left-0 z-40 w-72 text-white h-screen transition-transform ${
                sidebarOpen
                  ? "-translate-x-0"
                  : "-translate-x-full sm:translate-x-0"
              }`}
              aria-label="Sidebar"
            >
              <div className="h-full overflow-y-auto bg-gray-50 dark:bg-gray-800">
                <div className="mt-16 mb-8 flex flex-col items-center gap-6">
                  <img
                    src="https://static.vecteezy.com/system/resources/previews/006/552/415/non_2x/book-and-studen-logo-free-vector.jpg"
                    alt="Logo"
                    className="w-20 h-20"
                  />
                  <h2 className="text-2xl font-semibold">FormaScholar</h2>
                </div>
                <ul className="space-y-2 font-medium">
                 
                  <li>
                    <NavLink
                      to="/adminPanel/adminLogin"
                      className="flex items-center px-4 py-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                      activeclassname="text-gray-900 dark:text-white"
                    >
                      <HiOutlineLogin className="w-5 h-5" />
                      <span className="ms-3">Log In</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to='/adminPanel/adminRegister'
                      className="flex w-full items-center px-4 py-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                      activeclassname="text-gray-900 dark:text-white"
                    >
                      <SiGnuprivacyguard className="w-5 h-5" />
                      <span className="ms-3">Register Now</span>
                    </NavLink>
                  </li>
                </ul>
              </div>
            </aside>
          </>
        )}
      </header>
    </>
  );
};

export default SideNav;

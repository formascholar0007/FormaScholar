import React from "react";
import { IoHome } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gradient-to-t from-gray-900 to-gray-900 text-center text-surface/75 dark:bg-neutral-700 dark:text-white/75 lg:text-left font-Alice">
      <div className="flex items-center justify-center border-b-2 border-neutral-200 p-6 dark:border-white/10 lg:justify-between">
        <div className="me-12 flex items-center">
          <span className="me-2 w-full">
            {" "}
            {/* Reduced me-3 to me-2 */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="md:w-16 md:h-14 w-10 h-10"
            >
              <path d="M12.378 1.602a.75.75 0 00-.756 0L3 6.632l9 5.25 9-5.25-8.622-5.03zM21.75 7.93l-9 5.25v9l8.628-5.032a.75.75 0 00.372-.648V7.93zM11.25 22.18v-9l-9-5.25v8.57a.75.75 0 00.372.648l8.628 5.033z" />
            </svg>
          </span>
          <span className="text-2xl md:text-4xl font-semibold">
            FormaScholar
          </span>
        </div>
      </div>

      <div className="mx-10 py-8 text-center md:text-left">
        <div className="grid-1 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <div className="md:w-40 w-full mb-6">
            <h6 className="mb-2 flex justify-center font-semibold uppercase md:justify-start text-xl">
              Company
            </h6>
            <p className="mb-2 hover:text-[#33887c]">
              <NavLink to={"/meetUs"}>Meet Us</NavLink>
            </p>
            <p className="mb-2 hover:text-[#33887c]">
              <NavLink to={"/userProfile"}>Student Profile</NavLink>
            </p>
            <p className="mb-2 hover:text-[#33887c]">
              <NavLink to="#">About Us </NavLink>
            </p>

            <p className="mb-2 hover:text-[#33887c]">
              <NavLink to="/contactUs">Contact Us </NavLink>
            </p>
          </div>
          <div className="md:w-40 w-full">
            <h6 className="mb-2 flex justify-center font-semibold uppercase md:justify-start text-xl">
              Useful links
            </h6>
            <p className="mb-2 hover:text-[#33887c]">
              <NavLink to={""}>Meet Us</NavLink>
            </p>
            <p className="mb-2 hover:text-[#33887c]">
              <NavLink to={"/userProfile"}>Student Profile</NavLink>
            </p>
            <p className="mb-2 hover:text-[#33887c]">
              <NavLink to="#">About Us </NavLink>
            </p>

            <p className="mb-2 hover:text-[#33887c]">
              <NavLink to="/contactUs">Contact Us </NavLink>
            </p>
          </div>

          <div className="md:w-40 w-full">
            <h6 className="mb-2 flex justify-center font-semibold uppercase md:justify-start text-xl">
              Useful links
            </h6>
            <p className="mb-2 hover:text-[#33887c]">
              <NavLink to={""}>Meet Us</NavLink>
            </p>
            <p className="mb-2 hover:text-[#33887c]">
              <NavLink to={"/userProfile"}>Student Profile</NavLink>
            </p>
            <p className="mb-2 hover:text-[#33887c]">
              <NavLink to="#">About Us </NavLink>
            </p>

            <p className="mb-2 hover:text-[#33887c]">
              <NavLink to="/contactUs">Contact Us </NavLink>
            </p>
          </div>
          {/* Contact section */}
          <div>
            <h6 className="mb-2 flex justify-center font-semibold uppercase md:justify-start text-xl">
              Contact
            </h6>
            <p className="mb-2 flex gap-3 items-center justify-center md:justify-start">
              <IoHome />
              Dehradun, Uttarakhand, India
            </p>
            <p className="flex gap-3 items-center justify-center md:justify-start">
              <MdOutlineMail />
              formascholar@example.com
            </p>
          </div>
        </div>
      </div>

      <div className="bg-black/5 p-6 text-center text-white">
        <span>© 2023 Copyright:</span>
        <a className="font-semibold" href="https://tw-elements.com/">
          FormaScholar
        </a>
      </div>
    </footer>
  );
}

export default Footer;

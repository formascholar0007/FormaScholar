import React from "react";
import { IoHome } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gradient-to-t  text-center text-surface/75 dark:bg-gray-800 dark:text-white/75 lg:text-left font-Alice">
      <div className="flex items-center justify-center border-b-2 border-neutral-200 p-6 dark:border-white/10 lg:justify-between">
        <div className="me-12 flex items-center">
          <img src="https://cdn-icons-png.flaticon.com/512/3429/3429149.png" alt="footer-image"  className="w-20 mr-6"/>
          <span className="text-2xl md:text-4xl font-semibold">
            FormaScholar
          </span>
        </div>
      </div>

      <div className="mx-10 py-8 text-center md:text-left">
        <div className="grid-1 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <div className="md:w-44 w-full mb-6">
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
              <NavLink to="/aboutUs">About Us </NavLink>
            </p>

            <p className="mb-2 hover:text-[#33887c]">
              <NavLink to="/contactUs">Contact Us </NavLink>
            </p>
          </div>
          <div className="md:w-80 w-full">
            <h6 className="mb-2 flex justify-center font-semibold uppercase md:justify-start text-xl">
              Useful links
            </h6>
            <p className="mb-2 hover:text-[#33887c]">
              <NavLink to={""}>Class 8 Maths NCRT Solutions</NavLink>
            </p>
            <p className="mb-2 hover:text-[#33887c]">
              <NavLink to={"/"}>Class 9 Maths NCRT Solutions</NavLink>
            </p>
            <p className="mb-2 hover:text-[#33887c]">
              <NavLink to="#">Class 10 Maths NCRT Solutions</NavLink>
            </p>
            <p className="mb-2 hover:text-[#33887c]">
              <NavLink to="/">Class 11 Maths NCRT Solutions</NavLink>
            </p>
            <p className="mb-2 hover:text-[#33887c]">
              <NavLink to="/">Class 12 Maths NCRT Solutions</NavLink>
            </p>
          </div>

          <div className="md:w-64 w-full">
            <h6 className="mb-2 flex justify-center font-semibold uppercase md:justify-start text-xl">
              Useful links
            </h6>
            <p className="mb-2 hover:text-[#33887c]">
              <NavLink to={""}>Class 8 Science NCRT Solutions</NavLink>
            </p>
            <p className="mb-2 hover:text-[#33887c]">
              <NavLink to={"/"}>Class 9 Science NCRT Solutions</NavLink>
            </p>
            <p className="mb-2 hover:text-[#33887c]">
              <NavLink to="#">Class 10 Science NCRT Solutions</NavLink>
            </p>
            <p className="mb-2 hover:text-[#33887c]">
              <NavLink to="/">Class 11 Science NCRT Solutions</NavLink>
            </p>
            <p className="mb-2 hover:text-[#33887c]">
              <NavLink to="/">Class 12 Science NCRT Solutions</NavLink>
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

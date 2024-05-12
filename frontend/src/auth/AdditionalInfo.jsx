import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function AdditionalInfo() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    about: "",
    gender: "",
    className: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const token = JSON.parse(localStorage.getItem("token"));
      localStorage.setItem("userFullName", formData.fullName);

      const response = await fetch(
        "http://localhost:3000/api/v1/auth/additionalInfo",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      console.log(data);

      if (!data.success) {
        toast.error(data.message || "Please Enter Complete information");
      } else {
        toast.success("Information save successful!");
        navigate("/");
      }
    } catch (error) {
      toast.error("An error occurred. Please try again later.");
    }
  };

  const handleCloseError = () => {
    setErrorVisible(false);
  };

  return (
    <>
      <form
        className="lg:px-72 px-3 lg:py-24 py-28 font-Alice"
        onSubmit={handleSubmit}
      >
        <div className="g:space-y-12">
          <div className="border-gray-900/10 pb-12">
            <h2 className="text-2xl font-semibold leading-7 text-gray-900">
              Hello,
            </h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              Welcome to FormaScholar! Share a bit about yourself to personalize
              your experience with us. Thank you for choosing FormaScholar
            </p>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-4">
                <label
                  htmlFor="fullName"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Full Name
                </label>
                <div className="mt-2">
                  <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-[#009c86] sm:max-w-md">
                    <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm">
                      formascholar/
                    </span>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      id="fullName"
                      autoComplete="off"
                      className="block flex-1 border-0 bg-transparent lg:py-3 py-2 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 focus-within:ring-[#009c86] outline-none"
                      placeholder="Jane Smith"
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="col-span-full">
                <label
                  htmlFor="about"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  About
                </label>
                <div className="mt-2">
                  <textarea
                    id="about"
                    name="about"
                    value={formData.about}
                    onChange={handleChange}
                    maxLength={200}
                    rows={5}
                    className="block w-full rounded-md border-0 px-2 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus-within:ring-[#009c86] outline-none sm:text-sm sm:leading-6"
                  />
                </div>
                <p className="mt-3 text-sm leading-6 text-gray-600">
                  Write a few words about yourself.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="border-gray-900/10 pb-12">
          <div className="mt-1 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label
                htmlFor="gender"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Gender
              </label>
              <div className="mt-2">
                <select
                  id="gender"
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  autoComplete="off"
                  className="block w-full focus-within:ring-[#009c86] outline-none rounded-md border-0 lg:py-3 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-[#009c86]sm:max-w-xs sm:text-sm sm:leading-6"
                  required
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Others</option>
                </select>
              </div>
            </div>
            <div className="sm:col-span-3">
              <label
                htmlFor="className"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Class
              </label>
              <div className="mt-2">
                <select
                  id="className"
                  name="className"
                  value={formData.className}
                  onChange={handleChange}
                  autoComplete="off"
                  className="block w-full focus-within:ring-[#009c86] outline-none rounded-md border-0 lg:py-3 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-[#009c86]sm:max-w-xs sm:text-sm sm:leading-6"
                  required
                >
                  <option value="">Select Class</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                  <option value="11">11</option>
                  <option value="12">12</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button
            type="submit"
            className="rounded-md bg-[#009c86] px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-[#116257] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:[#009c86]"
          >
            Save
          </button>
        </div>
      </form>
    </>
  );
}

export default AdditionalInfo;

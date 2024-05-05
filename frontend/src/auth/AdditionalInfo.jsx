import React, { useState } from "react";
import { useEffect } from "react";
import { BiUpload } from "react-icons/bi";
import { NavLink, useNavigate } from "react-router-dom";

function AdditionalInfo() {
  const navigate = useNavigate();

  const [errorMessage, setErrorMessage] = useState("");
  const [errorVisible, setErrorVisible] = useState(false);

 
  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("fullName", event.target.fullName.value);
    formData.append("about", event.target.about.value);
    formData.append("phoneNumber", event.target.phoneNumber.value);
    formData.append("gender", event.target.gender.value);
    formData.append("className", event.target.className.value);

    if (
      !formData.get("fullName") ||
      !formData.get("gender") ||
      !formData.get("className")
    ) {
      setErrorMessage("Please Enter Required Information");
      setErrorVisible(true);
      return;
    }

    try {
      localStorage.setItem("userFullName", event.target.fullName.value);

      const token = JSON.parse(localStorage.getItem("token"));

      const response = await fetch(
        "http://localhost:3000/api/v1/auth/additionalInfo",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: formData,
        }
      );

      const data = await response.json();

      if (response.ok) {
        setErrorMessage("");
        navigate("/");
      } else {
        setErrorMessage("Please Enter Complete information");
      }
      setErrorVisible(true);
    } catch (error) {
      setErrorMessage("An error occurred.Please try again later.");
      setErrorVisible(true);
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
                  htmlFor="username"
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
                    maxLength={100}
                    rows={5}
                    className="block w-full rounded-md border-0 px-2 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus-within:ring-[#009c86] outline-none sm:text-sm sm:leading-6"
                    defaultValue={""}
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
            <div className="sm:col-span-4">
              <label
                htmlFor="phoneNumber"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Phone Number (Optional)
              </label>
              <div className="mt-2">
                <input
                  id="phoneNumber"
                  name="phoneNumber"
                  type="number"
                  autoComplete="off"
                  className="block lg:w-[74%] w-full px-2 rounded-md focus-within:ring-[#009c86] outline-none border-0 lg:py-3 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#009c86]sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-3">
              <label
                htmlFor="country"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Gender
              </label>
              <div className="mt-2">
                <select
                  id="gender"
                  name="gender"
                  autoComplete="off"
                  className="block w-full focus-within:ring-[#009c86] outline-none rounded-md border-0 lg:py-3 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-[#009c86]sm:max-w-xs sm:text-sm sm:leading-6"
                  required
                >
                  <option value="">Select Gender</option>
                  <option value="male">male</option>
                  <option value="female">female</option>
                  <option value="other">others</option>
                </select>
              </div>
            </div>
            <div className="sm:col-span-3">
              <label
                htmlFor="country"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                You're in class *
              </label>
              <div className="mt-2">
                <select
                  id="className"
                  name="className"
                  autoComplete="off"
                  className="block w-full focus-within:ring-[#009c86] outline-none rounded-md border-0 lg:py-3 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-[#009c86]sm:max-w-xs sm:text-sm sm:leading-6"
                  required
                >
                  <option value="">Select class</option>
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
          <NavLink
            to="/"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Cancel
          </NavLink>
          <button
            type="submit"
            className="rounded-md bg-[#009c86] px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-[#116257] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:[#009c86]"
          >
            Save
          </button>
        </div>

        <div
          className={`h-1 transition-all ${errorVisible ? "" : "opacity-0"}`}
        >
          {errorMessage && (
            <div
              className="bg-red-100 border-2 border-red-700 text-black px-4 py-3 rounded relative top-[25px]  md:relative lg:top-[25px]"
              role="alert"
            >
              <strong className="font-bold">OPPS!: </strong>
              <span className="block sm:inline">{errorMessage}</span>
              <span
                className="absolute top-0 bottom-0 right-0 px-2 py-1 cursor-pointer"
                onClick={handleCloseError}
              >
                <svg
                  className="fill-current h-6 w-6 text-red-500"
                  role="button"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <title>Close</title>
                  <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
                </svg>
              </span>
            </div>
          )}
        </div>
      </form>
    </>
  );
}

export default AdditionalInfo;

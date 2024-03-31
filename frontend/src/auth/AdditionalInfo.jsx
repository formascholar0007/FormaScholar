import React, { useState } from "react";
import { useEffect } from "react";
import { BiUpload } from "react-icons/bi";
import { useNavigate } from "react-router-dom";


function AdditionalInfo() {
  const [file, setFile] = useState(null);
  const [imageUrl, setImageUrl] = useState('');
  const navigae = useNavigate();

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    console.log(file)
    if (file) {
      setFile({
        name: file.name,
        url: URL.createObjectURL(file),
      });
      setImageUrl(file);
    }
  };
  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("fullName", event.target.fullName.value);
    formData.append("about", event.target.about.value);
    formData.append("image", imageUrl);
    formData.append("phoneNumber", event.target.phoneNumber.value);
    formData.append("gender", event.target.gender.value);
    formData.append("className", event.target.className.value);
    console.log(file)

    try {
      const token = JSON.parse(localStorage.getItem("token"));
      const response = await fetch('http://localhost:3000/api/auth/additionalInfo', {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });
      if(!response){
        console.warn("no no no");
      }
      const data = await response.json();
      console.log(data);
      // navigae("/")
      // window.location.reload();
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <form
        className="lg:px-80 px-3 lg:py-12 py-6 font-Alice"
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

              <div className="col-span-full">
                <label
                  htmlFor="cover-photo"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Upload Profile Picutre 
                </label>
                <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                  <div className="text-center">
                    <label
                      htmlFor="image"
                      className="relative cursor-pointer rounded-md bg-white font-semibold text-[#009c86] focus-within:outline-none focus-within:ring-2 focus-within:ring-[#009c86] focus-within:ring-offset-2 hover:text-[#174943]"
                    >
                      <span>
                        {file
                          ? "Change Profile Picutre"
                          : "Upload a file"}
                      </span>
                      <input
                        id="image"
                        name="image"
                        type="file"
                        className="sr-only focus-within:ring-[#1dae9b] outline-none"
                        onChange={handleFileUpload}
                      />
                    </label>

                    {file && (
                      <img
                        src={file.url}
                        alt={file.name}
                        className="mt-4 mx-auto rounded-full w-32 h-32 border-2 border-[#1dae9be7] object-cover"
                      />
                    )}

                    <p className="flex justify-center mt-2 text-xl ">
                      {file
                        ? file.name
                        : "PNG, JPG, GIF up to 10MB"}
                    </p>
                  </div>
                </div>
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
                >
                  <option>Select Gender</option>
                  <option>male</option>
                  <option>female</option>
                  <option>others</option>
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
                >
                  <option>Select class</option>
                  <option>9</option>
                  <option>10</option>
                  <option>11</option>
                  <option>12</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button
            type="button"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Cancel
          </button>
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

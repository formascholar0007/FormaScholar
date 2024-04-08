import React, { useState, useEffect } from "react";
import usericon from "../assets/user.svg";
import axios from "axios";
import { FaCircleUser } from "react-icons/fa6";

function UserProfile() {
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [userClass, setUserClass] = useState("");
  const [about, setAbout] = useState("");
  const [gender, setGender] = useState("");
  const [editable, setEditable] = useState(false);
  const [file, setFile] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("token"));
    axios
      .get("http://localhost:3000/api/profile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        const userData = response.data.data;

        localStorage.setItem("userFullName", userData.fullName);

        setFullName(userData.fullName || "");
        setPhoneNumber(userData.phoneNumber || "");
        setEmail(userData.email || "");
        setUserClass(userData.className || "");
        setAbout(userData.about || "");
        setGender(userData.gender || "");

        const imageUrl = userData.image
          .replace(/\\/g, "/")
          .replace("public/", "");
        setImageUrl(imageUrl || null);

        console.log(imageUrl);
      })
      .catch((error) => {
        console.log("Error Fetching user Data : ", error);
      });
  }, []);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFile({
        name: file.name,
        url: URL.createObjectURL(file),
      });
      setImageUrl(URL.createObjectURL(file));
    }
  };

  function handleInput(e) {
    e.preventDefault();

    const formData = new FormData();
    formData.append("fullName", fullName);
    formData.append("phoneNumber", phoneNumber);
    formData.append("className", userClass);
    formData.append("about", about);
    formData.append("gender", gender);
    formData.append("image", imageUrl);

    const token = JSON.parse(localStorage.getItem("token"));

    axios
      .put("http://localhost:3000/api/profile", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log("Profile updated successfully:", response);
        const updatedUserData = response.data.data;
        setPhoneNumber(updatedUserData.phoneNumber || "");
        setUserClass(updatedUserData.className || "");
        setAbout(updatedUserData.about || "");
        setGender(updatedUserData.gender || "");

        const imageUrl = updatedUserData.image
          .replace(/\\/g, "/")
          .replace("public/", "");
        setImageUrl(imageUrl || null);

        console.log(imageUrl);
      })
      .catch((error) => {
        console.log("Error updating profile:", error);
      });

    setEditable(false);
  }

  return (
    <section className="px-4 md:px-24 py-16 font-Alice">
      <div className="font-Alice">
        <h3 className="text-xl md:text-xl font-semibold leading-4 text-gray-900">
          Student Information
        </h3>
        <p className="mt-1 max-w-xl text-lg leading-4 text-gray-500">
          Personal details and application.
        </p>
      </div>
      <form onSubmit={handleInput}>
        <div className="mt-6  border-gray-100">
          <dl>
            {editable ? (
              <div className="col-span-full">
                <label
                  htmlFor="cover-photo"
                  className="block text-sm font-medium leading-4 text-gray-900"
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
                        {file ? "Change Profile Picutre" : "Upload a file"}
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
                      {file ? file.name : "PNG, JPG, GIF up to 10MB"}
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="py-3 pt-6 grid grid-cols-1 sm:grid-cols-3 md:gap-4 gap-2">
                {imageUrl ? (
                  <img
                    src={`http://localhost:3000/${imageUrl}`}
                    alt="User Profile"
                    className="object-contain md:h-32 h-24 w-full sm:h-auto sm:w-auto cursor-pointer"
                  />
                ) : (
                  <FaCircleUser
                    size={125}
                    className="object-contain md:h-32 h-24 w-full sm:h-auto sm:w-auto cursor-pointer"
                  />
                )}
              </div>
            )}
            <div className="py-6 grid grid-cols-2 sm:grid-cols-3 md:gap-4 gap-2">
              <textarea
                value={about}
                onChange={(e) => setAbout(e.target.value)}
                maxLength={100}
                rows={3}
                readOnly={!editable}
                className={`mt-1 py-2 px-2 text-xl font-semibold leading-8 text-gray-700 col-span-2 sm:mt-0 sm:col-span-1 ${
                  editable
                    ? "border-2 border-gray-200 rounded-md"
                    : "border-none"
                }  outline-none`}
              />
            </div>
            <div className="py-6 grid grid-cols-2 sm:grid-cols-3 md:gap-4 gap-2">
              <label
                htmlFor="fullName"
                className="text-xl font-semibold leading-4 text-gray-900"
              >
                Full name
              </label>
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                readOnly={!editable}
                className={`mt-1 py-2 px-2 text-lg leading-4 text-gray-700 col-span-2 sm:mt-0 sm:col-span-1 ${
                  editable
                    ? "border-2 border-gray-200 rounded-md"
                    : "border-none"
                }  outline-none`}
              />
            </div>
            <div className="py-6 grid grid-cols-1 sm:grid-cols-3 md:gap-4 gap-2">
              <label
                htmlFor="phoneNumber"
                className="text-xl font-semibold  leading-4 text-gray-900"
              >
                Phone Number
              </label>
              <input
                type="number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                readOnly={!editable}
                className={`mt-1 py-2 px-2 text-lg leading-4 text-gray-700 col-span-2 sm:mt-0 sm:col-span-1 ${
                  editable
                    ? "border-2 border-gray-200 rounded-md"
                    : "border-none"
                }  outline-none`}
              />
            </div>
            <div className="py-6 grid grid-cols-1 sm:grid-cols-3 md:gap-4 gap-2">
              <label
                htmlFor="email"
                className="text-xl font-semibold  leading-4 text-gray-900"
              >
                Email Address
              </label>
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                readOnly
                className={`mt-1 py-2 px-2 text-lg leading-4 text-gray-700 col-span-2 sm:mt-0 sm:col-span-1 outline-none`}
              />
            </div>
            <div className="py-6 grid grid-cols-1 sm:grid-cols-3 md:gap-4 gap-2">
              <label
                htmlFor="userClass"
                className="text-xl font-semibold  leading-4 text-gray-900"
              >
                Studying at
              </label>
              <input
                type="text"
                value={userClass}
                onChange={(e) => setUserClass(e.target.value)}
                readOnly={!editable}
                className={`mt-1 py-2 px-2 text-lg leading-4 text-gray-700 col-span-2 sm:mt-0 sm:col-span-1 ${
                  editable
                    ? "border-2 border-gray-200 rounded-md"
                    : "border-none"
                }  outline-none`}
              />
            </div>

            <div className="py-6 grid grid-cols-1 sm:grid-cols-3 md:gap-4 gap-2">
              <label
                htmlFor="gender"
                className="text-xl font-semibold  leading-4 text-gray-900"
              >
                Gender
              </label>
              <input
                type="text"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                readOnly={!editable}
                className={`mt-1 py-2 px-2 text-lg leading-4 text-gray-700 col-span-2 sm:mt-0 sm:col-span-1 ${
                  editable
                    ? "border-2 border-gray-200 rounded-md"
                    : "border-none"
                }  outline-none`}
              />
            </div>
          </dl>
        </div>
      </form>
      <div className="pb-14 pt-12 grid grid-cols-1 sm:grid-cols-3 md:gap-4 gap-2">
        <button
          onClick={editable ? handleInput : () => setEditable(true)}
          className={`w-full py-3 rounded-md text-lg ${
            editable
              ? "bg-[#25c0ab] text-white"
              : "bg-transparent text-black border-2 border-[#25c0ab]"
          } transition duration-300 ease-in-out hover:bg-[#25c0ab] hover:text-white hover:border-transparent`}
        >
          {editable ? "Save Changes" : "Edit Profile"}
        </button>
      </div>
    </section>
  );
}

export default UserProfile;

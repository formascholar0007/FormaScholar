import React, { useState, useEffect } from "react";
import axios from "axios";

function UserProfile() {
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [userClass, setUserClass] = useState("");
  const [about, setAbout] = useState("");
  const [gender, setGender] = useState("");
  const [editable, setEditable] = useState(false);
  const [avatar, setAvatar] = useState(null);

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

        localStorage.setItem("userFullName", userData.fullName);

        setFullName(userData.fullName || "");
        setPhoneNumber(userData.phoneNumber || "");
        setEmail(userData.email || "");
        setUserClass(userData.className || "");
        setAbout(userData.about || "");
        setGender(userData.gender || "");
        setAvatar(userData.avatar);

        console.log("Get Data : ", userData);

      })
      .catch((error) => {
        console.log("Error Fetching user Data : ", error);
      });
  }, []);

  function handleInput(e) {
    e.preventDefault();

    const formData = new FormData();
    formData.append("fullName", fullName);
    formData.append("phoneNumber", phoneNumber);
    formData.append("className", userClass);
    formData.append("about", about);
    formData.append("gender", gender);

    const token = JSON.parse(localStorage.getItem("token"));

    axios
      .put("http://localhost:3000/api/v1/profile", formData, {
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
            <div className="py-3 pt-6 grid grid-cols-1 sm:grid-cols-3 md:gap-4 gap-2">
                <img
                  src={avatar}
                  alt="User Profile"
                  className="object-contain md:h-32 h-24 w-full sm:h-auto sm:w-auto cursor-pointer"
                />
            </div>
            <div className="py-6 grid grid-cols-2 sm:grid-cols-3 md:gap-4 gap-2 ">
              <textarea
                value={about}
                onChange={(e) => setAbout(e.target.value)}
                maxLength={100}
                rows={3}
                readOnly={!editable}
                className={`pverfl mt-1 py-2 px-2 text-xl font-semibold leading-8 text-gray-700 col-span-2 sm:mt-0 sm:col-span-1 ${
                  editable
                    ? "border-2 border-gray-200 rounded-md"
                    : "border-none"
                }  outline-none overflow-hidden`}
              />
            </div>
            <div className="py-2 grid grid-cols-2 sm:grid-cols-3 md:gap-4 gap-2">
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

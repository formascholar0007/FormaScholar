import React, { useState } from "react";
import loginImage from "../assets/Registration.jpg";
import Button from "../Common/Button";

function Registrationform() {
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrorMessage("");
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("helllllo")
    if (formData.password !== formData.confirmPassword) {
      setErrorMessage("Password does not match");
      return;
    }

    try {
      const response = await fetch('http://localhost:3000/api/auth/register', {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userName: formData.userName,
          email: formData.email,
          password: formData.password,
        }),
      });
      let data = response.json();

      if (response.ok) {
        setSuccessMessage(data.message);
      } else {
        setErrorMessage(data.error);
      }
    } catch (error) {
      console.log("Error:", error);
      setErrorMessage("An error occurred. Please try again later.");
    }
  };
  return (
    <>
      <section className="lg:max-h-screen max-h-[1240px] lg:p-24">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row w-full bg-white rounded-xl mx-auto shadow-lg overflow-hidden">
            <div className="w-full  lg:w-[45%] flex flex-col items-center justify-center p-12 bg-no-repeat bg-cover bg-center">
              <img
                src={loginImage}
                alt="Login"
                className="w-[28rem] h-full object-contain"
              />
            </div>
            <div className="w-full lg:w-[40%] lg:py-10 py-1 px-12 lg:ml-6">
              <h2 className="text-3xl mb-4 font-semibold">Register</h2>
              <p className="mb-4">
                Create your account. It’s free and only take a minute
              </p>
              <form
                onSubmit={handleSubmit}
                className="grid grid-cols-1 lg:grid-cols-1 gap-5"
              >
                <div className="flex flex-col">
                  <input
                    type="text"
                    placeholder="Username"
                    className="border border-gray-400 py-1 px-2 rounded-md outline-none focus:border-[#009c86]"
                    value={formData.userName}
                    onChange={handleInputChange}
                    name="userName"
                    required
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="border border-gray-400 py-1 px-2 mt-5 rounded-md outline-none focus:border-[#009c86]"
                    value={formData.email}
                    onChange={handleInputChange}
                    name="email"
                    required
                  />
                  <input
                    type="password"
                    placeholder="Password"
                    className="border border-gray-400 py-1 px-2 mt-5 rounded-md outline-none focus:border-[#009c86]"
                    value={formData.password}
                    onChange={handleInputChange}
                    name="password"
                    required
                  />
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    className="border border-gray-400 py-1 px-2 mt-5 rounded-md outline-none focus:border-[#009c86]"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    name="confirmPassword"
                    required
                  />
                  <div className=" h-4">
                    {errorMessage && (
                      <p className="text-red-500 font-bold">{errorMessage}</p>
                    )}
                  </div>
                </div>
                <div className="flex flex-col justify-end lg:justify-start">
                  <div>
                    <input
                      type="checkbox"
                      className="border border-gray-400"
                      required
                    />{" "}
                    <span>
                      I accept the{" "}
                      <a href="#" className="text-[#009c86] font-semibold">
                        Terms of Use
                      </a>{" "}
                      &amp;{" "}
                      <a href="#" className="text-[#009c86] font-semibold">
                        Privacy Policy
                      </a>
                    </span>
                  </div>
                  <div className="mt-5">
                    <Button text={"Register Now"} type={"submit"} />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Registrationform;

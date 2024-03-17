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
  const [token, setToken] = useState("");
  const [errorVisible, setErrorVisible] = useState(false); 

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrorMessage("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setErrorMessage("Password does not match");
      setErrorVisible(true); 
      return;
    }

    try {
      const response = await fetch("http://localhost:3000/api/auth/register", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userName: formData.userName,
          email: formData.email,
          password: formData.password,
        }),
      });
      let registerResponse = await response.json();

      console.warn("All Data", registerResponse);

      const newToken = registerResponse.data;
      setToken(newToken);

      if (response.ok) {
        setSuccessMessage(registerResponse.message);
        setFormData({
          userName: "",
          email: "",
          password: "",
          confirmPassword: "",
        });
      } else {
        setErrorMessage(registerResponse.data.error);
        setErrorVisible(true); 
      }
    } catch (error) {
      console.log("Error:", error);
      setErrorMessage("An error occurred. Please try again later.");
      setErrorVisible(true); 
    }
  };

  const handleCloseError = () => {
    setErrorVisible(false);
  };

  return (
    <>
      <section className="lg:max-h-screen max-h-screen lg:p-24">
        <div className="container lg:mx-auto">
          <div className="flex flex-col lg:flex-row w-full bg-white rounded-xl mx-auto lg:shadow-lg ">
            <div className="w-[full]  lg:w-[45%] flex flex-col items-center justify-center lg:p-10 p-4 bg-no-repeat bg-cover bg-center">
              <img
                src={loginImage}
                alt="Login"
                className="lg:w-[28rem] w-[11rem] h-full object-contain"
              />
            </div>
            <div className="w-full lg:w-[40%] lg:py-10 py-1 px-12 lg:ml-6">
              <h2 className="text-3xl mb-3 font-semibold">Register</h2>
              <p className="mb-4">
                Create your account. It’s free and only take a minute
              </p>
              <form
                onSubmit={handleSubmit}
                className="grid grid-cols-1 lg:grid-cols-1 gap-1"
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
                  <div
                    className={`h-4 transition-all ${
                      errorVisible ? "" : "opacity-0"
                    }`}
                  >
                    {errorMessage && (
                      <div
                        className="bg-red-100 border-2 border-red-700 text-black px-4 py-3 rounded relative top-[-420px]  lg:relative lg:top-[-380px]"
                        role="alert"
                      >
                        <strong className="font-bold">OPPS!: {" "}</strong>
                        <span className="block sm:inline">{errorMessage}</span>
                        <span
                          className="absolute top-0 bottom-0 right-0 px-4 py-3 cursor-pointer"
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
                  <div className="mt-2">
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

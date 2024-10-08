import React, { useState } from "react";
import { useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";
import Button from "../Common/Button";

function AdminLogin() {
  const { adminHandleLogin } = useAuth();

  useEffect(() => {
    const handleReload = (e) => {
      e.preventDefault();
      e.returnValue = "";
    };
    window.addEventListener("beforeunload", handleReload);

    return () => {
      window.removeEventListener("beforeunload", handleReload);
    };
  }, []);

  const [AdminLoginData, setAdminLoginData] = useState({
    email: "",
    password: "",
    role: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [errorVisible, setErrorVisible] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAdminLoginData({ ...AdminLoginData, [name]: value });
    setErrorMessage("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!AdminLoginData.email || !AdminLoginData.password) {
      setErrorMessage("Please provide both email and password");
      setErrorVisible(true);
      return;
    }

    try {
      const response = await fetch("https://formascholar.onrender.com/api/v1/auth/login", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${JSON.parse(
            localStorage.getItem("adminToken")
          )}`,
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: AdminLoginData.email,
          password: AdminLoginData.password,
        }),
      });
      let loginResponse = await response.json();
      console.warn("Data : ", loginResponse);

      if (response.status === 200) {
        localStorage.setItem("adminToken", JSON.stringify(loginResponse.data));

        adminHandleLogin();

        navigate("/adminPanel");
        setAdminLoginData({
          email: "",
          password: "",
        });
      } else {
        console.error("Login Failed  :", loginResponse.message);
        setErrorMessage(loginResponse.message);
      }
    } catch (error) {
      console.log("Error during login : ", error);
      const errorMessage = error.message || "An error occurred during login.";
      setErrorMessage(errorMessage);
      setErrorVisible(true);
    }
  };
  const handleCloseError = () => {
    setErrorMessage("");
  };

  return (
    <>
      <section className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 font-Alice">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="FormaScholar"
          />
          <h2 className="mt-10 text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Login to Your Account
          </h2>
          <p className="mt-1 text-md text-gray-500">
            Welcome back Student, Let's dive into learning together!
          </p>
        </div>

        <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email Address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter Your Email"
                  value={AdminLoginData.email}
                  onChange={handleInputChange}
                  required
                  className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#009c86] sm:text-sm sm:leading-6 outline-none"
                />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
                <div className="text-sm">
                  <NavLink
                    to="/forgetPassword"
                    className="font-semibold text-[#009c86] hover: hover:text-[#49dbc8]"
                  >
                    Forgot Password?
                  </NavLink>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type={"password"}
                  placeholder="Enter Your Password"
                  value={AdminLoginData.password}
                  onChange={handleInputChange}
                  required
                  className="block w-full rounded-md border-0 p-1.5  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#009c86] sm:text-sm sm:leading-6 outline-none"
                />
              </div>
              <div className="w-full md:w-1/2 mt-4">
                <label
                  htmlFor="role"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Role
                </label>
                <div className="mt-2">
                  <input
                    id="role"
                    name="role"
                    type="role"
                    placeholder="Enter Your role"
                    value={AdminLoginData.role}
                    onChange={handleInputChange}
                    className="block w-full rounded-md border-0 p-1.5  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#009c86] sm:text-sm sm:leading-6 outline-none"
                  />
                </div>
              </div>
            </div>
            <div>
              <Button type="submit" text="Login" />
            </div>
          </form>
          <p className="mt-6 text-center text-sm text-gray-500">
            Don't have an account?{" "}
            <NavLink
              to="/adminPanel/adminRegister"
              className="font-bold leading-6 text-[#009c86] hover:text-[#49dbc8]"
            >
              Register Now
            </NavLink>
          </p>
          <div className={`$${errorVisible ? " " : "opacity-0"}`}>
            {errorMessage && (
              <div
                className="bg-red-200 border-2 border-red-700 text-black px-4 py-3 rounded relative top-[-480px]  lg:relative lg:top-[30px]"
                role="alert"
              >
                <strong className="font-bold">OPPS!: </strong>
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
      </section>
    </>
  );
}

export default AdminLogin;

import React, { useState } from "react";
import { useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Button from "../Common/Button";
import { useAuth } from "./AuthContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function LoginForm() {
  const { handleLogin } = useAuth();

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

  const [loginFormData, setLoginFormData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoginFormData({ ...loginFormData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!loginFormData.email || !loginFormData.password) {
      toast.error("Please fill out all fields.");
      return;
    }

    try {
      const response = await fetch("https://formascholar.onrender.com/api/v1/auth/login", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: loginFormData.email,
          password: loginFormData.password,
        }),
      });
      let loginResponse = await response.json();
      console.warn("Data : ", loginResponse);

      if (response.status === 200) {
        localStorage.setItem("token", JSON.stringify(loginResponse.data));
        handleLogin();
        setLoginFormData({
          email: "",
          password: "",
        });
        navigate("/");

        // Show success notification using toastify
        toast.success("Login successful!");
      } else {
        console.error("Login Failed  :", loginResponse.message);
        toast.error(loginResponse.message || "An error occurred.");
      }
    } catch (error) {
      console.log("Error during login : ", error);
      if (error.response) {
        toast.error(`Server error: ${error.response.data.message}`);
      } else if (error.request) {
        toast.error("Network error. Please check your internet connection.");
      } else {
        toast.error("An error occurred. Please try again later.");
      }
    }
  };

  return (
    <>
      <section className="font-Alice py-12">
        <div className="rounded-md bg-white">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            {/* <img
              className="mx-auto h-10 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt="FormaScholar"
            /> */}
            <h2 className="mt-10 text-2xl font-bold text-center leading-9 tracking-tight text-gray-900">
              Login to Your Account
            </h2>
            <p className="mt-1 text-md text-gray-500 text-center">
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
                    value={loginFormData.email}
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
                    value={loginFormData.password}
                    onChange={handleInputChange}
                    required
                    className="block w-full rounded-md border-0 p-1.5  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#009c86] sm:text-sm sm:leading-6 outline-none"
                  />
                </div>
              </div>
              <div>
                <Button type="submit" text="Login" />
              </div>
            </form>
            {/* <p className="mt-6 text-center text-sm text-gray-500">
              Don't have an account?{" "}
              <NavLink
                to="/registration"
                className="font-bold leading-6 text-[#009c86] hover:text-[#49dbc8]"
              >
                Register Now
              </NavLink>
            </p> */}
            {/* a */}
          </div>
        </div>
      </section>
    </>
  );
}

export default LoginForm;

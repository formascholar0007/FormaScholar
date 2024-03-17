import React, { useState } from "react";
import loginImage from "../assets/Login1.jpg";
import Button from "../Common/Button";

function LoginForm() {
  const [loginFormData, setLoginFormData] = useState({
    email: "",
    password: "",
  });
  
  const [loginToken, setLoginToken] = useState('');
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [errorVisible, setErrorVisible] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoginFormData({ ...loginFormData, [name]: value });
    setErrorMessage("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!loginFormData.email || !loginFormData.password) {
      setErrorMessage("Please provide both email  and password");
      setErrorVisible(true);
      return;
    }

    try {
      const response = await fetch("http://localhost:3000/api/auth/login", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${loginToken}`,
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

      const token = response.data;
      setLoginToken(token);

      if (response.ok) {
        setSuccessMessage(loginResponse.message)
        setLoginFormData({
          email: "",
          password: "",
        })
      } 
       
      else {
        console.error("Login Failed :", loginResponse.error);
        setErrorMessage(loginResponse.error);
      }
    } catch (error) {
      console.log("Error during login : ", error);
      setErrorMessage(loginResponse.error);
      setErrorVisible(true);
    }
  };
  const handleCloseError = () => {
    setErrorVisible(false);
  };

  return (
    <>
      <section className="lg:max-h-screen max-h-[1240px] lg:p-24 ">
        <div className="container mx-auto lg:h-full h-screen flex items-center ">
          <div className="flex flex-col lg:flex-row w-full bg-white rounded-xl  mx-auto shadow-lg overflow-hidden">
            <div className="w-full lg:w-[45%] flex flex-col items-center justify-center lg:p-12 p-12 bg-no-repeat bg-cover bg-center">
              <img
                src={loginImage}
                alt="Login"
                className="lg:w-[28rem] w-[18rem] h-full object-contain"
              />
            </div>
            <div className="w-full lg:w-[40%] lg:py-28 py-2 px-12 lg:ml-6 ">
              <h2 className="text-3xl mb-3 font-semibold">Login</h2>
              <p className="mb-4">Welcome back Student,</p>
              <form
                onSubmit={handleSubmit}
                className="grid grid-cols-1 lg:grid-cols-1 gap-2"
              >
                <div className="flex flex-col">
                  <input
                    type="email"
                    placeholder="Email"
                    className="border border-gray-400 py-1 px-2 mt-5 rounded-md outline-none focus:border-[#009c86]"
                    value={loginFormData.email}
                    onChange={handleInputChange}
                    name="email"
                    required
                  />
                  <input
                    type="password"
                    placeholder="Password"
                    className="border border-gray-400 py-1 px-2 mt-5 rounded-md outline-none focus:border-[#009c86]"
                    value={loginFormData.password}
                    onChange={handleInputChange}
                    name="password"
                    required
                  />
                  <div
                    className={`h-2
                    ${errorVisible ? "" : "opacity-0"}
                  `}
                  >
                    {errorMessage && (
                      <div
                        className="bg-red-100 border-2 border-red-700 text-black px-4 py-3 rounded relative top-[-420px]  lg:relative lg:top-[-380px]"
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
                <div className="flex flex-col justify-end lg:justify-start">
                  <div>
                    <span>
                      Don't have an account?{" "}
                      <a href="#" className="text-[#009c86] font-semibold">
                        Register here
                      </a>
                    </span>
                  </div>
                  <div className="mt-3">
                    <Button text={"Login"} type={"submit"} />
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

export default LoginForm;

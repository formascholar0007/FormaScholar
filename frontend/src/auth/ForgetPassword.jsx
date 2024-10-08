import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

function ForgetPassword() {
  const [resetEmail, setResetEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [resetSuccess, setResetSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(resetEmail)) {
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    setIsLoading(true);
    setErrorMessage("");

    try {
      const response = await fetch(
        "https://formascholar.onrender.com/api/v1/auth/forgotPassword",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email: resetEmail }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        setResetSuccess(true);
        setTimeout(() => {
          navigate("/loginform"); // Navigate to the login page after 4 seconds
          setResetSuccess(false);
        }, 4000);
      } else {
        setErrorMessage(data.message || "Something went wrong.");
      }
    } catch (error) {
      console.error("Error resetting password:", error);
      setErrorMessage("An error occurred while resetting password.");
    }
    setIsLoading(false);
  }
  const handleCloseError = () => {
    setErrorMessage("");
  };
  return (
    <section className="max-w-lg mx-auto my-10 bg-white p-6 md:p-8 rounded-xl shadow-lg shadow-slate-300 font-Alice">
      <h1 className="lg:text-3xl text-2xl font-medium">Forgot Password</h1>
      <p className="text-slate-500 mt-2">
        Please complete the form to reset your password.
      </p>

      <form className="my-8" onSubmit={handleSubmit}>
        <div className="flex flex-col space-y-5">
          <label htmlFor="resetEmail">
            <p className="font-medium text-slate-700 pb-2">Email address</p>
            <input
              id="resetEmail"
              name="resetEmail"
              type="email"
              value={resetEmail}
              onChange={(e) => setResetEmail(e.target.value)}
              className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
              placeholder="Enter email address"
            />
          </label>

          <button
            type="submit"
            className="w-full py-3 font-semibold text-lg text-white hover:text-black bg-[#13bfa8] hover:bg-[#148d7c] rounded-lg border-[#148d7c] hover:shadow inline-flex space-x-2 items-center justify-center"
            disabled={isLoading}
          >
            {isLoading ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 animate-spin"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z"
                />
              </svg>
            ) : (
              <span>Reset Password</span>
            )}
          </button>
          <p className="text-center">
            Not registered yet?{" "}
            <NavLink
              to="/registration"
              className="text-[#148d7c] font-medium inline-flex space-x-1 items-center"
            >
              <span>Register now </span>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </span>
            </NavLink>
          </p>
        </div>
        <div className={`$${errorMessage ? " " : "opacity-0"}`}>
          {errorMessage && (
            <div
              className="animate-pulse bg-red-200 border-2 border-red-700 text-black px-4 py-3 rounded relative top-[10px] lg:relative lg:top-[10px]"
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
          {/* Success box */}
          {resetSuccess && (
            <div className="bg-teal-100 border-l-4 border-teal-500 text-teal-900 shadow-lg p-4 mt-1 md:mt-4">
              <p className="font-bold">Reset Email sent successfully!</p>
              <p>Check your email for reset password link.</p>
            </div>
          )}
        </div>
      </form>
    </section>
  );
}

export default ForgetPassword;

import React, { useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";

function ResetPassword() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

    // const params = new URLSearchParams(window.location.search);
    // const userId = params.get("userId");
    // const token = params.get("token")
    const { userId, token } = useParams();

    console.warn(userId);
    console.warn(token);

  async function handleSubmit(e) {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Password does not match!");
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch(
        `http://localhost:5173/my-custom-api/auth/resetPassword/${userId}/${token}`,
        {
            method: "PUT",
            headers: {
                Accept:'application/json',
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ password }),
        }
    );

      const data = await response.json();

      if (response.ok) {
        console.log(response);
        navigate("/loginform");
      } else {
        alert(data.message || "Something went wrong.");
      }
    } catch (error) {
      console.log("Error resetting password:", error);
      alert("An error occurred while resetting password.");
    }

    setIsLoading(false);
  }

  return (
    <section className="max-w-lg mx-auto my-6 bg-white p-6 md:p-8 rounded-xl shadow-lg shadow-slate-300 font-Alice">
      <h1 className="lg:text-3xl text-2xl font-medium">Reset Password</h1>
      <p className="text-slate-500 mt-2">
        Your new password must be different from previously used passwords.
      </p>

      <form className="my-4" onSubmit={handleSubmit}>
        <div className="flex flex-col space-y-4">
          <label htmlFor="password">
            <p className="font-medium text-slate-700 pb-1">Password</p>
            <input
              id="password"
              name="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
              placeholder="Enter Password"
            />
          </label>
          <label htmlFor="confirmPassword">
            <p className="font-medium text-slate-700 pb-1">Confirm Password</p>
            <input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
              placeholder="Confirm Password"
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
      </form>
    </section>
  );
}

export default ResetPassword;

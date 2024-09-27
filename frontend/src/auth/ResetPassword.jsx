import React, { useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function ResetPassword() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [resetSuccess, setResetSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const { userId, token } = useParams();

  axios.defaults.withCredentials = true;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword || password === "") {
      setErrorMessage("Passwords do not match or are empty!");
      return;
    }

    axios
      .post(`https://formascholar.onrender.com/api/v1/auth/resetPassword/${userId}/${token}`, {
        password,
      })
      .then((res) => {
        if (res.status === 200) {
          setResetSuccess(true);
          setErrorMessage("");
          setTimeout(() => {
            navigate("/loginform");
            setResetSuccess(false);
          }, 3000);
        } else {
          setErrorMessage(res.data.message || "Something went wrong.");
        }
      })
      .catch((err) => {
        console.log(err);
        setErrorMessage("An error occurred while resetting password.");
      });
  };

  const handleCloseError = () => {
    setErrorMessage("");
  };

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
          >
            Reset Password
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
              <p className="font-bold">Password Reset Successfully!</p>
              <p>Now you can Login to your account with the new password.</p>
            </div>
          )}
        </div>
      </form>
    </section>
  );
}

export default ResetPassword;

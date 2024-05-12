import React from "react";
import { useState } from "react";
import LoginForm from "../auth/LoginForm";
import Registrationform from "../auth/Registrationform";

function AuthUser() {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <div className="max-w-xl mx-auto py-6 font-Alice">
      <div className="bg-white rounded-lg shadow-2xl">
        <div className="w-full">
          <div className="flex justify-center mt-4 px-5 pt-6 text-white">
            <div className="w-full">
              <button
                className={`tab-btn w-full px-4 py-2 rounded-l  border-2 border-[#009c86]  transition-colors duration-300 ${showLogin ? 'bg-[#009c86] hover:bg-[#008672] text-white' : 'bg-transparent text-gray-400 hover:text-black'}`}
                onClick={() => setShowLogin(true)}
              >
                Login
              </button>
            </div>
            <div className="w-full">
              <button
                className={`tab-btn w-full border-2 border-[#009c86] rounded-r  px-4 py-2 transition-colors duration-300 ${!showLogin ? 'bg-[#009c86] hover:bg-[#008672] text-white ' : 'bg-transparent text-gray-400 hover:text-black'}`}
                onClick={() => setShowLogin(false)}
              >
                Sign Up
              </button>
            </div>
          </div>
          <div className="w-full  px-6 pb-12">
            {showLogin ? <LoginForm /> : <Registrationform />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuthUser;

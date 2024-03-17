import React, { useState } from 'react';
import loginImage from '../assets/Login1.jpg';
import Button from '../Common/Button';

function LoginForm() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrorMessage('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.username || !formData.password) {
      setErrorMessage('Please provide both username and password');
      return;
    }
  };

  return (
    <>
      <section className="lg:max-h-screen max-h-[1240px] lg:p-24">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row w-full bg-white rounded-xl mx-auto shadow-lg overflow-hidden">
            <div className="w-full lg:w-[45%] flex flex-col items-center justify-center p-12 bg-no-repeat bg-cover bg-center">
              <img src={loginImage} alt="Login" className="w-[26rem] h-full object-contain" />
            </div>

            <div className="w-full lg:w-[40%] lg:py-16 py-2 px-12 lg:ml-6">
              <h2 className="text-3xl mb-4 font-semibold">Login</h2>
              <p className="mb-4">
                Welcome back Student,
              </p>
              <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-1 gap-5">
                <div className="flex flex-col">
                  <input
                    type="text"
                    placeholder="Username"
                    className="border border-gray-400 py-1 px-2 rounded-md outline-none focus:border-[#009c86]"
                    value={formData.username}
                    onChange={handleInputChange}
                    name="username"
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
                  <div className=" h-4">
                    {errorMessage && (
                      <p className="text-red-500 font-bold">{errorMessage}</p>
                    )}
                  </div>
                </div>
                <div className="flex flex-col justify-end lg:justify-start">
                  <div>
                    <span>
                      Don't have an account?{' '}
                      <a href="#" className="text-[#009c86] font-semibold">
                        Register here
                      </a>
                    </span>
                  </div>
                  <div className="mt-5">
                    <Button text={'Login'} type={'submit'} />
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

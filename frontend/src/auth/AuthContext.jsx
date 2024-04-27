import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState( () =>{
    let storedvalue = localStorage.getItem("isLoggedIn")
    return storedvalue ? JSON.parse(storedvalue) : "false"
  });
  // const token = localStorage.getItem('token');

  // useEffect(() => {
  //   if (token) {
  //     setIsLoggedIn(true);
  //   } else {
  //     setIsLoggedIn(false);
  //   }
  // }, [token]);

  const handleLogin = (newToken) => {
    // localStorage.setItem('token', newToken);
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    // localStorage.removeItem('token');
    setIsLoggedIn(false);
  };

  useEffect(() => {
    localStorage.setItem("isLoggedIn", JSON.stringify(isLoggedIn))
  }, [isLoggedIn])

  return (
    <AuthContext.Provider value={{ isLoggedIn, handleLogin, handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    let storedvalue = localStorage.getItem("isLoggedIn");
    return storedvalue ? JSON.parse(storedvalue) : "false";
  });

  const [isAdmin, setIsAdmin] = useState(() => {
    let storedValue = localStorage.getItem("isAdminLoggedIn");
    return storedValue ? JSON.parse(storedValue) : "false";
  });

  // const token = localStorage.getItem('token');
  // useEffect(() => {
  //   if (token) {
  //     setIsLoggedIn(true);
  //   } else {
  //     setIsLoggedIn(false);
  //   }
  // }, [token]);

 
  const adminHandleLogin = () => {
    setIsAdmin(true);
  };

  const adminHandleLogout = () => {
    localStorage.removeItem("adminToken");
    setIsAdmin(false);
  };

  const handleLogin = (newToken) => {
    // localStorage.setItem('token', newToken);
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
  };
 
  useEffect(() => {
    localStorage.setItem("isLoggedIn", JSON.stringify(isLoggedIn));
  }, [isLoggedIn]);

  useEffect(() => {
    localStorage.setItem("isAdminLoggedIn", JSON.stringify(isAdmin));
  }, [isAdmin]);

  return (
    <AuthContext.Provider value={{ isLoggedIn, isAdmin, adminHandleLogin, adminHandleLogout, handleLogin, handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

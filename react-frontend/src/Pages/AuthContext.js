// AuthContext.js
import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [userUid, setUserUidState] = useState(localStorage.getItem("userUid"));

  const setUserUid = (uid) => {
    localStorage.setItem("userUid", uid);
    setUserUidState(uid);
  };

  useEffect(() => {
    const storedUserUid = localStorage.getItem("userUid");
    if (storedUserUid) {
      setUserUidState(storedUserUid);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ userUid, setUserUid }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

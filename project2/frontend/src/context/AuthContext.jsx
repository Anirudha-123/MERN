import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const useUser = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // console.log("AuthData", user);

  const [loading, setloading] = useState(true);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("user"));

    if (data) {
      setUser(data);
    }

    setloading(false);
  }, []);

  useEffect(() => {
    if (!loading && user) {
      localStorage.setItem("user", JSON.stringify(user));
    }
  }, [user, loading]);

  const login = (userData) => {
    setUser(userData);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <>
      <AuthContext.Provider value={{ user, setUser, login, logout, loading }}>
        {children}
      </AuthContext.Provider>
    </>
  );
};

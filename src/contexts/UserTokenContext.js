import { createContext, useContext, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
export const UserTokenContext = createContext();

export const UserTokenContextProvider = ({ children }) => {
  const [token, setToken] = useLocalStorage("token", "");
  const [userId, UseUserId] = useLocalStorage("id", "");
  return (
    <UserTokenContext.Provider value={{ token, setToken, userId, UseUserId }}>
      {children}
    </UserTokenContext.Provider>
  );
};

export const useUserTokenContext = () => {
  return useContext(UserTokenContext);
};

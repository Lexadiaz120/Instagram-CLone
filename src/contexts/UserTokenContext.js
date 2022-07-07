import { createContext, useContext, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
export const UserTokenContext = createContext();

export const UserTokenContextProvider = ({ children }) => {
  const [token, setToken] = useLocalStorage("token", "");
  const [userId, UseUserId] = useLocalStorage("id", "");
  console.log("userId from UserTokenContextProvider: " + userId);

  return (
    <UserTokenContext.Provider value={{ token, setToken, userId, UseUserId }}>
      {children}
    </UserTokenContext.Provider>
  );
};

export const useUserTokenContext = () => {
  return useContext(UserTokenContext);
};

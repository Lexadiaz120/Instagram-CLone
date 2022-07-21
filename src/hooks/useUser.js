import { useEffect } from "react";
import { getProfileEndpoint } from "../api";
import useFetch from "./useFetch";
const useUser = () => {
  const {
    data: user,
    setData: setAvatar,
    loading,
    error,
  } = useFetch(getProfileEndpoint());

  const addAvatar = (newAvatar) => {
    setAvatar([newAvatar, ...user]);
  };

  return { user, loading, error, setAvatar, addAvatar };
};
export default useUser;

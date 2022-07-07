import { useEffect } from "react";
import { getProfileEndpoint } from "../api";
import useFetch from "./useFetch";
const useUser = () => {
  const { data: user, loading, error } = useFetch(getProfileEndpoint());  
  
  return { user, loading, error };
};
export default useUser;

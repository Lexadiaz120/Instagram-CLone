import { useState, useEffect } from "react";

const useLocalStorage = (key, defaultValue) => {
  const [data, setData] = useState(    
    JSON.parse(localStorage.getItem(key)) || defaultValue    
  );
  console.log(data);
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(data));
  }, [data, key]);

  return [data, setData];
};

export default useLocalStorage;

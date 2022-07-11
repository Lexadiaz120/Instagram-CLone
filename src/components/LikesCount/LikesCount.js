import { useEffect } from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import "./LikesCount.css";
export const LikesCount = ({ id }) => {
  const [likes, setLikes] = useState();
  const fetchLikes = async () => {
    try {
      const res = await fetch(
        `${process.env.REACT_APP_API_URL}/photoLikes/${id}`
      );

      const body = await res.json();

      if (res.ok) {
        setLikes(body.data);
      } else {
        throw new Error(body.message);
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    fetchLikes();
  }, [likes]);
  return <>{likes ? <p>{likes[0].likesCount}</p> : null}likes</>;
};

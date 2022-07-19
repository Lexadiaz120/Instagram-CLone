import { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useUserTokenContext } from "../../contexts/UserTokenContext";
import useCheckLike from "../../hooks/useCheckLike";
import Button from "../Button/Button";
export const LikeButton = ({ id }) => {
  const [like, setLike] = useState();
  const { didUserLikeEntry, setDidUserLikeEntry } = useCheckLike(id);
  const { token } = useUserTokenContext();
  let navigate = useNavigate();
  const CreateLike = async (e) => {
    try {
      e.preventDefault();
      const postCommentRes = await fetch(
        `${process.env.REACT_APP_API_URL}/likephoto/${id}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const postCommentBody = await postCommentRes.json();
      if (postCommentRes.ok) {
        setLike(postCommentBody?.result);
      }
      console.log(postCommentBody, "CUERPO DEL COMMENT");
      if (!postCommentRes.ok) {
        const likeBody = await postCommentRes();
        throw new Error(likeBody.message);
      }
      setDidUserLikeEntry(!didUserLikeEntry);
    } catch (error) {
      if (!token) {
        toast("You need to be autorized to like photo");
        setTimeout(() => {
          navigate("/login");
        }, 2000);
      }
      throw new Error(error.message);
    }
  };

  return (
    <>
      <Button onClick={CreateLike}> {didUserLikeEntry ? "❤️" : "🤍"} </Button>
      <ToastContainer />
    </>
  );
};

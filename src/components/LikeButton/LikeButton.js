import { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useUserTokenContext } from "../../contexts/UserTokenContext";
import Button from "../Button/Button";
export const LikeButton = ({ id }) => {
  const [checked, setChecked] = useState();
  const { token } = useUserTokenContext();
  let navigate = useNavigate();
  console.log(token, "TOKEN");
  const CreateLike = async (e) => {
    try {
      e.preventDefault();
      setChecked((value) => !value);
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
      if (!postCommentRes.ok) {
        const likeBody = await postCommentRes();
        throw new Error(likeBody.message);
      }
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
      <Button onClick={CreateLike}> {checked ? "❤️" : "🤍"} </Button>
      <ToastContainer />
    </>
  );
};

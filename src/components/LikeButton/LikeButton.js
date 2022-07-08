import { useEffect, useState } from "react";
import { useUserTokenContext } from "../../contexts/UserTokenContext";
import Button from "../Button/Button";
export const LikeButton = ({ id }) => {
  console.log(id, "id que pasamos");
  const [checked, setChecked] = useState(false);
  console.log(checked);
  const { token } = useUserTokenContext();
  const CreateLike = async (e) => {
    e.preventDefault();
    setChecked((value) => !value);
    const postCommentRes = await fetch(
      `http://localhost:5000/likephoto/${id}`,
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
  };
  return (
    <>
      <Button onClick={CreateLike}> {checked ? "❤️" : "🤍"} </Button>
    </>
  );
};

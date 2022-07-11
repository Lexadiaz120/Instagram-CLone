import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useUserTokenContext } from "../../contexts/UserTokenContext";
import Button from "../Button/Button";
import "./CommentButton.css";
export const CommentButton = ({ setCommentInput, commentInput, id }) => {
  const [comments, setComments] = useState("");
  const { token } = useUserTokenContext();
  const navigate = useNavigate();
  const openComment = () => {
    setCommentInput(!commentInput);
  };
  const createComment = async (e) => {
    try {
      e.preventDefault();
      const postCommentRes = await fetch(
        `${process.env.REACT_APP_API_URL}/comments/${id}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ comments }),
        }
      );
      if (!postCommentRes.ok) {
        const commentBody = await postCommentRes.json();
        throw new Error(commentBody.message);
      }
      if (!token) {
        navigate("/login");
      }
    } catch (error) {
      setTimeout(() => {
        toast("You need to be authorized to make comments");
      }, 2000);
    }
    if (!token) {
      navigate("/login");
    }
    setComments("");
  };
  return (
    <>
      <Button onClick={openComment}>{"💬"}</Button>
      <br />
      {commentInput ? (
        <form className="comment-button-form" onSubmit={createComment}>
          <input
            id="comment"
            placeholder="Add your comment here"
            value={comments}
            onChange={(e) => {
              setComments(e.target.value);
            }}
          />
          <button>Send</button>
        </form>
      ) : null}
    </>
  );
};

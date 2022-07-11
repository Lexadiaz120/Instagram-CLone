import { useState } from "react";
import { useUserTokenContext } from "../../contexts/UserTokenContext";
import Button from "../Button/Button";
import "./CommentButton.css";
export const CommentButton = ({ setCommentInput, commentInput, id }) => {
  const [comments, setComments] = useState("");
  const { token } = useUserTokenContext();
  const openComment = () => {
    setCommentInput(!commentInput);
  };
  const createComment = async (e) => {
    e.preventDefault();
    const postCommentRes = await fetch(`http://localhost:5000/comments/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ comments }),
    });
    if (!postCommentRes.ok) {
      const commentBody = await postCommentRes.json();
      throw new Error(commentBody.message);
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

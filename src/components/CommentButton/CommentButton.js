import { useState } from "react";
import { useUserTokenContext } from "../../contexts/UserTokenContext";
import Button from "../Button/Button";
export const CommentButton = ({ setCommentInput, commentInput, id }) => {
  const [comments, setComments] = useState("");
  const { token } = useUserTokenContext();
  const openComment = () => {
    setCommentInput(true);
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
  };
  return (
    <>
      <Button onClick={openComment}>{"💬"}</Button>
      {commentInput ? (
        <form onSubmit={createComment}>
          <label htmlFor="comment">Description:</label>
          <input
            id="comment"
            value={comments}
            onChange={(e) => {
              setComments(e.target.value);
            }}
          />
          <button>Create comment</button>
        </form>
      ) : null}
    </>
  );
};

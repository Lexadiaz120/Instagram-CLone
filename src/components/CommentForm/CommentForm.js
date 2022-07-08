import { useState } from "react";
import { useUserTokenContext } from "../../contexts/UserTokenContext";
import "./CommentForm.css";
export const CommentForm = ({ id }) => {
  const { token } = useUserTokenContext();
  const [comments, setComments] = useState("");
  console.log(comments);
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
      <div className="comment_form">
        <form onSubmit={createComment}>
          <input
            id="comment"
            value={comments}
            onChange={(e) => {
              setComments(e.target.value);
            }}
          />
          <button>Send</button>
        </form>
      </div>
    </>
  );
};

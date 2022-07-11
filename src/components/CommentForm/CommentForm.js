import { useState } from "react";
import { toast } from "react-toastify";
import { useUserTokenContext } from "../../contexts/UserTokenContext";
import "./CommentForm.css";
export const CommentForm = ({ id }) => {
  const { token } = useUserTokenContext();
  const [comments, setComments] = useState("");
  const createComment = async (e) => {
    try {
      e.preventDefault();
      const postCommentRes = await fetch(
        `http://localhost:5000/comments/${id}`,
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
      setComments("");
    } catch (error) {
      toast(error.message);
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

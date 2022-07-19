import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useUserTokenContext } from "../../contexts/UserTokenContext";
import "./CommentForm.css";
export const CommentForm = ({ id }) => {
  const { token } = useUserTokenContext();
  const navigate = useNavigate();
  const [comments, setComments] = useState("");
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
      toast("Comment succsefully created");
      if (!postCommentRes.ok) {
        const commentBody = await postCommentRes.json();
        navigate("/login");
        throw new Error(commentBody.message);
      }

      setComments("");
    } catch (error) {
      toast("You need to be authorized to make comments");
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

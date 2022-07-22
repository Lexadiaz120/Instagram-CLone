import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useUserTokenContext } from "../../contexts/UserTokenContext";
import "./CommentForm.css";
export const CommentForm = ({
  id,
  comments,
  comment,
  setComment,
  setComments,
}) => {
  console.log(comment);
  const { token } = useUserTokenContext();
  const navigate = useNavigate();
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
          body: JSON.stringify({ comment }),
        }
      );
      if (postCommentRes.ok) {
        toast("Comment succsefully created");
        const commentBody = await postCommentRes.json();
        setComments([...comments, commentBody?.data]);
      }
      if (!postCommentRes.ok) {
        const commentBody = await postCommentRes.json();
        throw new Error(commentBody.message);
      }
    } catch (error) {
      toast("You need to be authorized to make comments");
    }
  };
  return (
    <>
      <div className="comment_form">
        <form onSubmit={createComment}>
          <input
            required
            minLength={3}
            id="comment"
            onChange={(e) => {
              setComment(e.target.value);
            }}
          />
          <button>Send</button>
        </form>
      </div>
    </>
  );
};

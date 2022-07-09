import { useParams } from "react-router-dom";
import { CommentForm } from "../CommentForm/CommentForm";
import { useState, useEffect } from "react";
import "./DetailsModal.css";
import { UsersComments } from "../UsersComments/UsersComments";
import { LikeButton } from "../LikeButton/LikeButton";

export const DetailsModal = ({ photo, id, setModal, modal }) => {
  const [comments, setComments] = useState([]);
  useEffect(() => {
    const fetchComments = async () => {
      try {
        const res = await fetch(`http://localhost:5000/photoComments/${id}`);
        const body = await res.json();
        if (res.ok) {
          setComments(body?.data);
        } else {
          throw new Error(body.message);
        }
      } catch (error) {
        alert(error.message);
      }
    };
    fetchComments();
  }, []);
  return (
    <>
      <div className="details_modal">
        <div className="leftModal">
          <div className="details_modal_photo">
            <img src={`${process.env.REACT_APP_API_URL}/${photo}`} />
          </div>
        </div>
        <div className="rightModal">
          <div className="modalComments">
            <UsersComments comments={comments} />
          </div>
          <div className="modalCommentForm">
            <LikeButton id={id} />
            <CommentForm id={id} />
          </div>
        </div>
        <span onClick={() => setModal(!modal)}>&times;</span>
      </div>
    </>
  );
};

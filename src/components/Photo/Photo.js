import Avatar from "../Avatar/Avatar";
import useUser from "../../hooks/useUser";
import "./Photo.css";
import Button from "../Button/Button";
import { useState } from "react";
import { DetailsModal } from "../DetailsModal/DetailsModal";
import { CommentButton } from "../CommentButton/CommentButton";
import { LikeButton } from "../LikeButton/LikeButton";

const Photo = ({ photo }) => {
  console.log(photo, "soy photo");
  const { user, loading, error } = useUser();
  const [modal, setModal] = useState(false);
  const [commentInput, setCommentInput] = useState(false);
  console.log(commentInput);
  const { name_photo, id, username, description_photo } = photo;
  return (
    <article>
      <header className="header">
        <div className="perfilImage">
          <Avatar avatar={user?.avatar} username={user?.username} />
        </div>
        <div className="photoDatas">
          <p>{username}</p>
        </div>
      </header>
      <div className="bodyPhoto">
        <img
          onClick={() => setModal(true)}
          src={`${process.env.REACT_APP_API_URL}/${name_photo}`}
          alt="Photo"
        />
      </div>
      {modal ? (
        <div>
          <DetailsModal id={id} photo={name_photo} />
        </div>
      ) : null}
      <div className="post-content">
        <div className="iconsPhoto">
          <LikeButton id={id}></LikeButton>
          <CommentButton
            commentInput={commentInput}
            setCommentInput={setCommentInput}
            id={id}
          ></CommentButton>
        </div>
        <p className="likes">1000 likes</p>
        <p className="description">
          <span>{username}</span>
          {description_photo}
        </p>
      </div>
    </article>
  );
};

export default Photo;

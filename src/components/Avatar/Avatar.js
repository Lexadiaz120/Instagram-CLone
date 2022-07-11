import { useRef } from "react";
import { useUserTokenContext } from "../../contexts/UserTokenContext";
import { toast } from "react-toastify";
import "./Avatar.css";
const Avatar = ({ avatar }) => {
  return (
    <>
      {avatar ? (
        <img
          className="avatar"
          src={`${process.env.REACT_APP_API_URL}/${avatar}`}
          alt={avatar}
        />
      ) : (
        <img
          className="avatar"
          src={`http://localhost:3000/default-avatar.png`}
          alt="default avatar"
        />
      )}
    </>
  );
};
export default Avatar;

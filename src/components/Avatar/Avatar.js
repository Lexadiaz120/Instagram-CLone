import "./Avatar.css";
const Avatar = ({ avatar, username }) => {
  return (
    <>
      {avatar ? (
        <img
          className="avatar"
          src={`${process.env.REACT_APP_API_URL}/${avatar}`}
          alt={username}
        />
      ) : (
        <img
          className="avatar"
          src={`http://localhost:3000/default-avatar.png`}
          alt={username}
        />
      )}
    </>
  );
};
export default Avatar;

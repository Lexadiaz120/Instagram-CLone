import { Link } from "react-router-dom";
import useUser from "../../hooks/useUser";
import Avatar from "../Avatar/Avatar";
export const HeaderAvatar = ({ user, loading }) => {
  if (loading) {
    <p>Cargando</p>;
  }
  return (
    <>
      <Link to={"/profile"}>
        <Avatar
          avatar={user?.[0]?.avatar}
          username={user?.[0]?.username}
        ></Avatar>
      </Link>
    </>
  );
};

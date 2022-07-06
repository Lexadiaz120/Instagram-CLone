import { useEffect } from "react";
import { toast } from "react-toastify";
import Avatar from "../../components/Avatar/Avatar";
import { UserSettings } from "../../components/UserSettings/UserSettings";
import { useUserTokenContext } from "../../contexts/UserTokenContext";
import useUser from "../../hooks/useUser";
export const ProfilePage = () => {
  const { token } = useUserTokenContext();
  const { user, loading, error } = useUser();
  if (error) {
    toast(`${error}`);
  }

  // voy hacer un fetch aqui y luego sacar
  return (
    <>
      <section className="profile">
        <h2>User profile</h2>

        {user && (
          <>
            <section className="user_info">
              <h2>My info</h2>
              <Avatar avatar={user?.avatar} username={user[0]?.username} />
              <p>Name: {user[0].username}</p>
              <p>Email: {user[0].email}</p>
            </section>
            <UserSettings username={user[0]?.username} email={user[0].email} />
            <section className="gallery-list">
              <p>Fotos de usuario aquí</p>
            </section>
          </>
        )}
      </section>
    </>
  );
};

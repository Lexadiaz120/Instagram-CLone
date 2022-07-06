import { useEffect } from "react";
import { toast } from "react-toastify";
import Avatar from "../../components/Avatar/Avatar";
import { UserSettings } from "../../components/UserSettings/UserSettings";
import { useUserTokenContext } from "../../contexts/UserTokenContext";
import "./ProfilePage.css";
import useUser from "../../hooks/useUser";
import { UserProfileGallery } from "../../components/UserPhotos/UserProfileGallery";
import { Link } from "react-router-dom";
import "./ProfilePage.css";
export const ProfilePage = () => {
  const { token } = useUserTokenContext();
  const { user, loading, error } = useUser();
  let getUserPhotos = user?.map((item) => item.name_photo);
  if (error) {
    toast(`${error}`);
  }

  // voy hacer un fetch aqui y luego sacar
  return (
    <>
      <section className="profile">
        {user && (
          <>
            <div className="profile-container">
              <section className="user_info">
                <Avatar avatar={user[0]?.avatar} username={user[0]?.username} />
                <p>{user[0].username}</p>
                <Link to={"/profile/settings"}>
                  <button>Edit profile</button>
                </Link>
                <br />
              </section>
            </div>
            <section className="gallery-list">
              <UserProfileGallery
                userphotos={getUserPhotos}
              ></UserProfileGallery>
            </section>
          </>
        )}
      </section>
    </>
  );
};

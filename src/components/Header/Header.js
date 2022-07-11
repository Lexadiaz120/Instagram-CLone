import { useState } from "react";
import { useUserTokenContext } from "../../contexts/UserTokenContext";
import useUser from "../../hooks/useUser";
import { CreatePostForm } from "../CreatePostForm/CreatePostForm";
import { HeaderAvatar } from "../HeaderAvatar/HeaderAvatar";
import SearchPhotos from "../SearchPhotos/SearchPhotos";
import "./Header.css";
const Header = () => {
  const [addPost, setAddPost] = useState(false);
  const { user, loading } = useUser();
  const [openForm, setOpenForm] = useState(false);
  const { token } = useUserTokenContext();

  const openPost = () => {
    setAddPost(true);
  };
  const closePost = () => {
    setAddPost(false);
  };

  return (
    <>
      <header className="header">
        <nav className="header_nav">
          <div className="header-img">
            <img
              src={
                "https://res.cloudinary.com/aleksmotin/image/upload/v1657199149/instagram_z5p1bc.png"
              }
              alt={"instagram logo"}
            ></img>
          </div>
          {token ? (
            <>
              <div className="header_features">
                <>
                  <img
                    onClick={() => setOpenForm(!openForm)}
                    src={"https://i.ibb.co/2h46YZH/Add-Icon-Filled-1.jpg"}
                    alt="add publication img"
                  ></img>
                </>
              </div>
            </>
          ) : null}
        </nav>
        <SearchPhotos></SearchPhotos>
        <HeaderAvatar />
        <p>Hello, {user?.[0]?.username}</p>
      </header>
      <div className="modal-post">
        <CreatePostForm openForm={openForm} setOpenForm={setOpenForm} />
      </div>
    </>
  );
};

export default Header;

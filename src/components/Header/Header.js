import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
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
  const { token, setToken } = useUserTokenContext();
  const navigate = useNavigate();

  if (!token) {
    navigate("/login");
  }

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
        <nav>
          <p>
            <Link to={"/photos"}>Feed</Link>
          </p>
        </nav>
        <SearchPhotos></SearchPhotos>
        {token ? (
          <>
            <HeaderAvatar />
            <p>Hello, {user?.[0]?.username}</p>
          </>
        ) : null}
        {token ? (
          <>
            <nav>
              <p onClick={() => setToken("")}>Sign out</p>
            </nav>
          </>
        ) : null}
      </header>
      <div className="modal-post">
        <CreatePostForm openForm={openForm} setOpenForm={setOpenForm} />
      </div>
    </>
  );
};

export default Header;

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUserTokenContext } from "../../contexts/UserTokenContext";
import useUser from "../../hooks/useUser";
import { CreatePostForm } from "../CreatePostForm/CreatePostForm";
import { HeaderAvatar } from "../HeaderAvatar/HeaderAvatar";
import SearchPhotos from "../SearchPhotos/SearchPhotos";
import "./Header.css";
const Header = ({ addPhoto, photos, user, loading }) => {
  const [addPost, setAddPost] = useState(false);
  const [openForm, setOpenForm] = useState(false);
  const { token, setToken } = useUserTokenContext();
  const navigate = useNavigate();
  const openPost = ({ setPhotos }) => {
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
          <nav>
            <p>
              <Link to={"/photos"}>Feed</Link>
            </p>
          </nav>
        </nav>
        <SearchPhotos></SearchPhotos>
        <div className="avatarHeader">
          {token ? (
            <>
              <HeaderAvatar loading={loading} user={user} />
              <p>Hello, {user?.[0]?.username}</p>
            </>
          ) : (
            <Link to={"/register"}>
              <button>Register</button>
            </Link>
          )}
          {token ? (
            <>
              <nav onClick={() => navigate("/login")}>
                <p onClick={() => setToken("")}>Sign out</p>
              </nav>
            </>
          ) : (
            <Link to={"/login"}>
              <button>Login</button>
            </Link>
          )}
        </div>
      </header>
      <div className="modal-post">
        <CreatePostForm
          openForm={openForm}
          addPhoto={addPhoto}
          setOpenForm={setOpenForm}
        />
      </div>
    </>
  );
};
export default Header;

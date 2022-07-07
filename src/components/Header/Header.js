import { useState } from "react";
import { useUserTokenContext } from "../../contexts/UserTokenContext";
import { CreatePostForm } from "../CreatePostForm/CreatePostForm";
import "./Header.css";
const Header = () => {
  const [addPost, setAddPost] = useState(false);
  console.log(addPost, "soy addpost");
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
                <img
                  onClick={() => openPost()}
                  src={"https://i.ibb.co/2h46YZH/Add-Icon-Filled-1.jpg"}
                  alt="add publication img"
                ></img>
              </div>
            </>
          ) : null}
        </nav>
      </header>
      {addPost ? (
        <div className="modal-post">
          <CreatePostForm />
        </div>
      ) : null}
    </>
  );
};

export default Header;

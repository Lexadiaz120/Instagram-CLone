import { Link } from "react-router-dom";
import "./UserProfileGallery.css";
export const UserProfileGallery = ({ userphotos }) => {
  return (
    <>
      <div className="main">
        {userphotos[0] == null ? (
          <p>No hay publicaciones</p>
        ) : (
          userphotos?.map((photo) => {
            return (
              <>
                <Link to={`/photo/${photo.id}`}>
                  <img
                    src={`${process.env.REACT_APP_API_URL}/${photo.name_photo}`}
                  ></img>
                </Link>
              </>
            );
          })
        )}
      </div>
    </>
  );
};

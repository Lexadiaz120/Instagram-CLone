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
                <img src={`http://localhost:5000/${photo}`}></img>
              </>
            );
          })
        )}
      </div>
    </>
  );
};

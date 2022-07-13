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
                <img src={`${process.env.REACT_APP_API_URL}/${photo}`}></img>
              </>
            );
          })
        )}
      </div>
    </>
  );
};

import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Avatar from "../Avatar/Avatar";
import { DetailsModal } from "../DetailsModal/DetailsModal";
import "./UserGallery.css";
const UserGallery = () => {
  const { id } = useParams();
  const [photos, setPhoto] = useState([]);
  const [modal, setModal] = useState(false);
  useEffect(() => {
    const fetchPhoto = async () => {
      try {
        const res = await fetch(`http://localhost:5000/userProfile/${id}`);

        const body = await res.json();

        if (res.ok) {
          setPhoto(body.data);
        } else {
          throw new Error(body.message);
        }
      } catch (error) {
        alert(error.message);
      }
    };
    fetchPhoto();
  }, [id]);
  return (
    <>
      <div className="user-gallery-container">
        <Avatar
          avatar={photos[0]?.name_photo}
          username={photos[0]?.username}
        ></Avatar>
        <p>{photos[0]?.username}</p>
        <div className="user-publications-number">
          {photos.length} publications
        </div>
      </div>
      <div className="main">
        {photos ? (
          photos.map((photo) => {
            return (
              <>
                <Link to={`/photo/${photo.id}`}>
                  <img
                    onClick={() => setModal(true)}
                    src={`${process.env.REACT_APP_API_URL}/${photo?.name_photo}`}
                  />
                </Link>
              </>
            );
          })
        ) : (
          <p>This user doesn´t have fotos</p>
        )}
      </div>
    </>
  );
};

export default UserGallery;

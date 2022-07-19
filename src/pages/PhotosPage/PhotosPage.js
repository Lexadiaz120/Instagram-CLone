import { useState, useEffect } from "react";
import PhotosList from "../../components/PhotosList/PhotosList.js";

const PhotosPage = () => {
  const [photos, setPhotos] = useState([]);
  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const res = await fetch(`${process.env.REACT_APP_API_URL}/feed`);

        const body = await res.json();

        if (res.ok) {
          setPhotos(body.data);
        } else {
          throw new Error(body.message);
        }
      } catch (error) {
        alert(error.message);
      }
    };
    fetchPhotos();
  }, []);

  return (
    <section>{photos.length > 0 && <PhotosList photos={photos} />}</section>
  );
};

export default PhotosPage;

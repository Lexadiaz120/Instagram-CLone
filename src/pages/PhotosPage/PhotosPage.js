import PhotosList from "../../components/PhotosList/PhotosList.js";
const PhotosPage = ({ photos }) => {
  console.log(photos);
  return (
    <section>{photos?.length > 0 && <PhotosList photos={photos} />}</section>
  );
};

export default PhotosPage;

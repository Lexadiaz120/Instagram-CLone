import List from "../List/List.js";
import Photo from "../Photo/Photo";

const PhotosList = ({ photos }) => {
  return (
    <List
      data={photos}
      render={(photo) => (
        <li>
          <Photo photo={photo} />
        </li>
      )}
    />
  );
};

export default PhotosList;

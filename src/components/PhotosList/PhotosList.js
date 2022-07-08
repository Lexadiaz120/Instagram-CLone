import List from "../List/List.js";
import Photo from "../Photo/Photo";
import { Link } from "react-router-dom";

const PhotosList = ({ photos }) => {
  return (
    <List
      data={photos}
      render={(photo) => (
        <li key={photo.id}>
          <Photo photo={photo} />
        </li>
      )}
    />
  );
};

export default PhotosList;

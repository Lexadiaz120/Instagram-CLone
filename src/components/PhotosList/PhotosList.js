import List from "../List/List.js";
import Photo from "../Photo/Photo";
import { Link } from "react-router-dom";
import { useEffect } from "react";

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

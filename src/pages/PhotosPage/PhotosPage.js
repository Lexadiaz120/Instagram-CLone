import { useState, useEffect } from "react";
import { getFeed, getFeedEndPoint } from "../../api/index.js";
import PhotosList from "../../components/PhotosList/PhotosList.js";
import useFetch from "../../hooks/useFetch.js";
const PhotosPage = () => {
  const getFeedEndPoint = getFeed();
  const { data: photos, loading, error } = useFetch(getFeedEndPoint);
  return (
    <section>{photos?.length > 0 && <PhotosList photos={photos} />}</section>
  );
};

export default PhotosPage;

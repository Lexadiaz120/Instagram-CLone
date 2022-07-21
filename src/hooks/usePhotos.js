import { getFeed } from "../api";
import useFetch from "./useFetch";
const usePhotos = () => {
  const {
    data: photos,
    setData: setPhotos,
    loading,
    error,
  } = useFetch(getFeed());

  const addPhoto = (newPhoto) => {
    setPhotos([newPhoto, ...photos]);
  };

  return { photos, setPhotos, addPhoto, loading, error };
};
export default usePhotos;

import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import "./SearchPhotos.css";
const SearchPhotos = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [photo, setPhotos] = useState([]);
  const [modal, setModal] = useState(false);
  const [description_photo, setDescription] = useState(
    searchParams.get("description_photo") || ""
  );
  useEffect(() => {
    const fetchPhotos = async () => {
      const res = await fetch(
        `${process.env.REACT_APP_API_URL}/photos?${searchParams.toString()}`
      );
      const body = await res.json();

      if (res.ok) {
        setPhotos(body.data);
      }
    };
    fetchPhotos();
  }, [searchParams]);

  const filteredPhotos = photo.filter((photo) => {
    return photo?.description_photo
      .toLowerCase()
      .includes(description_photo.toLowerCase());
  });

  return (
    <>
      <div className="search">
        <div className="searchInput">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              let query = {};
              if (description_photo) {
                query.description_photo = description_photo;
              }
              setSearchParams(new URLSearchParams(query));
            }}
          >
            <input
              value={description_photo}
              onMouseLeave={() => {
                setModal(!modal);
              }}
              onClick={() => {
                setModal(!modal);
              }}
              onChange={(e) => {
                setDescription(e.target.value);
              }}
              type="text"
              placeholder="Search photos"
            ></input>
            <SearchIcon />
          </form>
        </div>
        {modal ? (
          <>
            <div
              onMouseLeave={() => setModal(false)}
              onMouseEnter={() => setModal(true)}
              className="search-results"
            >
              {filteredPhotos.length > 0 && (
                <>
                  {filteredPhotos?.map((photo, key) => (
                    <>
                      <div className="search-results-container">
                        <Link to={`/photo/${photo?.id}`}>
                          <img
                            key={photo?.id}
                            src={`${process.env.REACT_APP_API_URL}/${photo?.name_photo}`}
                            className="search-results-item"
                          ></img>
                        </Link>
                        <p>{photo?.description_photo}</p>
                      </div>
                    </>
                  ))}
                </>
              )}
            </div>
          </>
        ) : null}
      </div>
    </>
  );
};

export default SearchPhotos;

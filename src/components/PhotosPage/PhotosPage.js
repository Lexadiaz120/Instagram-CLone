import { useState, useEffect } from "react";
import PhotosList from "../../components/PhotosList";

const PhotosPage = () => {

    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        const fetchPhotos = async () => {
            try {                
                const res = await fetch("http://localhost:5000/feed");

                const body = await res.json();

                if(res.ok){
                    console.log(body.data)
                    setPhotos(body.data)
                } else {
                    throw new Error(body.message);
                }

            } catch (error) {
                alert(error.message)
            }
        };
        fetchPhotos();
    }, []);

    return (
        <section>
            <h2>Photos</h2>

            {photos.length > 0 && <PhotosList photos={photos}/>}
            
        </section>
    );    
};

export default PhotosPage;
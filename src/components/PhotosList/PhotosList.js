import List from "../List/List.js";
import "./style.css" 
import Photo from "../Photo/Photo"
import {Link} from "react-router-dom";

const PhotosList = ({ photos }) => {    
    return (
        <List 
            data={photos}             
            render={(photo) => (                
                <li key={photo.id}>
                    <Link to={`/photo/${photo.id}`}>
                        <Photo photo={photo}/>
                    </Link>                    
                </li>
            )}
        />
    );
}

export default PhotosList;
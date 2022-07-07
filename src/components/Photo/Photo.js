import Avatar from "../Avatar/Avatar";
import useUser from "../../hooks/useUser";
import Button from "../Button/Button";

const Photo = ({ photo }) => {

    const { user, loading, error } = useUser();
    console.log("user?avatar" + user?.avatar);    
    

    const{name_photo, username, description_photo} = photo;

    return(
        <article>
            <header className="header"> 
                <div className="perfilImage">
                    <Avatar avatar={user?.avatar} username={user?.username} />
                </div>
                <div className="photoDatas">                    
                    <p>{username}</p>
                </div>
                                            
            </header>
            <div className="bodyPhoto">
                <img src={`${process.env.REACT_APP_API_URL}/${name_photo}`} alt="Photo"/>
            </div>
            <div className="post-content">
                <div className="iconsPhoto">
                    <Button>{"🤍"}</Button>
                    <Button>{"💬"}</Button>                   
                </div>
                <p className="likes">1000 likes</p>
                <p className="description"><span>{username}</span>{description_photo}</p> 
            </div> 
                                                                       
        </article>
    );    
};

export default Photo;
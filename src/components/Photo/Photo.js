
const Photo = ({ photo }) => {

    const{name_photo, username, description_photo} = photo;

    return(
        <article>
            <header className="header"> 
                <div className="perfilImage">
                    <img src="https://source.unsplash.com/random/?people" alt="avatar"/>
                </div>
                <div className="photoDatas">                    
                    <p>{username}</p>
                </div>
                                            
            </header>
            <div className="bodyPhoto">
                <img src={`http://localhost:5000/${name_photo}`} alt="Photo"/>
                
                <div className="iconsPhoto">
                    <img src="https://png.pngtree.com/png-clipart/20210311/original/pngtree-love-heart-outline-png-image_6044200.jpg" alt="Like"/>
                    <img src="https://www.pngfind.com/pngs/m/65-657175_png-file-svg-transparent-comment-icons-png-png.png" alt="Comment"/>
                </div>
                
                <div className="footerPhoto">
                    <p>{username}</p>
                    <p>{description_photo}</p>   
                </div>                              
            </div>                                                          
        </article>
    );    
};

export default Photo;
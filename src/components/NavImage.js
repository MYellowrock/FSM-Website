import backgroundImage from "../image/navbargif1.gif";
import "../styles/navImage.css";

function NavImage() {
    
    const backgroundStyles = {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      };
    
    return (
        <div id="nav-image" style={backgroundStyles}>
            
        </div>
    )
}

export default NavImage;
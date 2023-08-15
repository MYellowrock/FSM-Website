import backgroundImage from "../image/navbargif1.gif";
import "../styles/navImage.css";

function NavImage() {
    
    const backgroundStyles = {
        backgroundImage: `url(${backgroundImage})`,
        backgroundPosition: "center",
      };
    
    return (
        <div id="nav-image" style={backgroundStyles} className="w-full">
            
        </div>
    )
}

export default NavImage;
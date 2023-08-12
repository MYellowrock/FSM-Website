import backgroundImage from "../image/ecard.png";
import "../styles/navImage.css";

function NavImage() {
    
    const backgroundStyles = {
        backgroundImage: `url(${backgroundImage})`,
        backgroundPosition: "center",
      };
    
    return (
        <div id="nav-image" style={backgroundStyles} className="w-full mt-36">
            
        </div>
    )
}

export default NavImage;
import electronicCard from "../image/electronicCard.jpg";
import "../styles/commercial.css";

function Commercial() {
  return (
    <div>
      <div className="component-container mt-12 z-10">
        <img
          src={electronicCard}
          alt="electronicCard"
          className="background-image"
        />
      </div>
    </div>
  );
}

export default Commercial;

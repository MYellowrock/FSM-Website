import "./solutionStyles/solutionsAll.css";
import highway1 from "./solutionsImage/highway1.png";
import highway2 from "./solutionsImage/highway2.png";

function Highway() {
  return (
    <div id="highway">
      <div
        id="header-smartStop"
        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 p-4 flex items-center justify-center my-12"
      >
        <h1 className="text-4xl font-bold text-white cursorCity">
          OTOYOL ÇÖZÜMLERİ
        </h1>
      </div>
      <div id="highway-images">
        <div className="flex flex-col justify-center items-center">
          <img src={highway1} alt="highway-1" width={1000} className="m-24" />
          <img src={highway2} alt="highway-2" width={1000} className="m-24" />
        </div>
      </div>
    </div>
  );
}

export default Highway;

import "../styles/product2.css";
import product2 from "../image/2.png";

function Product2() {
    return (
        <div id="product-2" className="bg-gray-100">
      <div className="product2">
        <div className="product-image flex justify-center py-12">
          <img src={product2} alt="product-2" width={700} />
        </div>
        <div className="product-text flex justify-center py-12">
          <h3 className="max-w-xl">Text text text text text text ...</h3>
        </div>
      </div>
    </div>
    )
}

export default Product2;
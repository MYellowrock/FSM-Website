import "../styles/product1.css";
import product1 from "../image/1.jpg";

function Product1() {
  return (
    <div id="product-1" className="bg-gray-100">
      <div className="product1">
        <div className="product-image flex justify-center py-12">
          <img src={product1} alt="product-1" width={700} />
        </div>
        <div className="product-text flex justify-center py-12">
          <h3 className="max-w-xl">Text text text text text text ...</h3>
        </div>
      </div>
    </div>
  );
}

export default Product1;

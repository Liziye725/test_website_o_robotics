import React from "react";
import { Link } from "react-router-dom";
import SnowScenarioBig from "../../assets/home/scenario-snow-big.png";
import "./ProductPage3.css";

const ProductPage3 = () => {
  return (
    <div className="product-page">
      <div className="product-page-img">
        <img src={SnowScenarioBig} alt="Product 3" />
      </div>
      <div className="product-page-text">
        <h1>Scenario 3: Snow Removal</h1>
        <p>
          Our robot excels in snow removal, making winter maintenance more
          efficient and less labor-intensive. It clears sidewalks, driveways,
          and parking lots, ensuring safe and accessible paths. With its robust
          design and effective snow-handling capabilities, this robot becomes an
          indispensable tool during the winter months, reducing the effort and
          time traditionally required for snow clearance.
        </p>
        <button>
          <Link to="/product">Back to Products</Link>
        </button>
      </div>
    </div>
  );
};

export default ProductPage3;

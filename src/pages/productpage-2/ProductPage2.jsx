import React from "react";
import { Link } from "react-router-dom";
import GarbageScenarioBig from "../../assets/home/scenario-garbage-big.jpg";
import "./ProductPage2.css";

const ProductPage2 = () => {
  return (
    <div className="product-page">
      <div className="product-page-img">
        <img src={GarbageScenarioBig} alt="Product 2" />
      </div>
      <div className="product-page-text">
        <h1>Scenario 2: Garbage Collection</h1>
        <p>provide description for garbage robot</p>
        <button>
          <Link to="/product">Back to Products</Link>
        </button>
      </div>
    </div>
  );
};

export default ProductPage2;

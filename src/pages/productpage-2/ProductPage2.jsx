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
        <h1> Garbage Collection</h1>
        <p>Our autonomous robot transforms the way we tackle waste management in urban areas. Equipped with advanced sensors and precision extraction tools, it identifies and removes small trash items (cigarette butts, bottle caps, small plastic wrappers) from paved surfaces with ease. With its ability to adapt to various debris sizes, Waste Warrior can tackle a wide range of waste types. If an item is too large or requires special handling, the robot will alert the operator, ensuring safe and efficient collection. This innovative solution promotes cleaner streets, public spaces, and healthier environments with minimal human intervention</p>
        <button>
          <Link to="/product">Back to Products</Link>
        </button>
      </div>
    </div>
  );
};

export default ProductPage2;

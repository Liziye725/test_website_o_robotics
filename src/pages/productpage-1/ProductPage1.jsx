import React from 'react';
import { Link } from 'react-router-dom';
import WeedScenarioBig from '../../assets/home/scenario-weed-big.png'



const ProductPage1 = () => {
  return (
    <div>
      <h1>Scenario 1: Weed Control</h1>
      <img src={WeedScenarioBig} alt="Product 1" style={{ maxWidth: '600px' }} />
      <p>Our robot revolutionizes weed control in gardens, agricultural fields, and public green spaces. It identifies and removes unwanted plants with precision, using advanced cutting and extraction tools. This scenario showcases the robot's ability to promote healthier and more aesthetically pleasing landscapes, maintaining well-kept environments with minimal human intervention.</p>
      <button><Link to="/mainproductpage">Back to Products</Link></button>
    </div>
  );
}

export default ProductPage1;

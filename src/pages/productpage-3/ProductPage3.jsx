import React from 'react';
import { Link } from 'react-router-dom';
import GarbageScenarioSmall from '../../assets/home/scenario-garbage-small.png'
import SnowScenarioSmall from '../../assets/home/scenario-snow-small.png'
import WeedScenarioSmall from '../../assets/home/scenario-weed-small.png'

const ProductPage3 = () => {
  return (
    <div>
      <h1>Scenario 3: Weed Control</h1>
      <img src={WeedScenarioSmall} alt="Product 3" style={{ maxWidth: '300px', maxHeight: '150px' }} />
      <p>Our robot revolutionizes weed control in gardens, agricultural fields, and public green spaces. It identifies and removes unwanted plants with precision, using advanced cutting and extraction tools. This scenario showcases the robot's ability to promote healthier and more aesthetically pleasing landscapes, maintaining well-kept environments with minimal human intervention.</p>
      <button><Link to="/mainproductpage">Back to Products</Link></button>
    </div>
  );
}

export default ProductPage3;

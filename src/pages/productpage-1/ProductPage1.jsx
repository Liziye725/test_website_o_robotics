import React from 'react';
import { Link } from 'react-router-dom';
import GarbageScenarioSmall from '../../assets/home/scenario-garbage-small.png'
import SnowScenarioSmall from '../../assets/home/scenario-snow-small.png'
import WeedScenarioSmall from '../../assets/home/scenario-weed-small.png'


const ProductPage1 = () => {
  return (
    <div>
      <h1>Scenario 1: Garbage Collection</h1>
      <img src={GarbageScenarioSmall} alt="Product 1" style={{ maxWidth: '400px', maxHeight: '150px' }} />
      <p>Our robot revolutionizes weed control in gardens, agricultural fields, and public green spaces. It identifies and removes unwanted plants with precision, using advanced cutting and extraction tools. This scenario showcases the robot's ability to promote healthier and more aesthetically pleasing landscapes, maintaining well-kept environments with minimal human intervention.</p>
      <button><Link to="/mainproductpage">Back to Products</Link></button>
    </div>
  );
}

export default ProductPage1;

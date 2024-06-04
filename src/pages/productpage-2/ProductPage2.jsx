import React from 'react';
import { Link } from 'react-router-dom';
import GarbageScenarioBig from '../../assets/home/scenario-garbage-big.jpg'


const ProductPage2 = () => {
  return (
    <div>
      <h1>Scenario 2: Garbage Collection</h1>
      <img src={GarbageScenarioBig} alt="Product 2" style={{ maxWidth: '300px', maxHeight: '150px' }} />
      <p>Our robot revolutionizes weed control in gardens, agricultural fields, and public green spaces. It identifies and removes unwanted plants with precision, using advanced cutting and extraction tools. This scenario showcases the robot's ability to promote healthier and more aesthetically pleasing landscapes, maintaining well-kept environments with minimal human intervention.</p>
      <button><Link to="/mainproductpage">Back to Products</Link></button>
    </div>
  );
}

export default ProductPage2;

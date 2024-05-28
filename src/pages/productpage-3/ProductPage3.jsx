import React from 'react';
import { Link } from 'react-router-dom';
import ProductPhoto3 from '../../assets/home/FullAssembly2.png'

const ProductPage3 = () => {
  return (
    <div>
      <h1>Product 3</h1>
      <img src={ProductPhoto3} alt="Product 3" style={{ maxWidth: '300px', maxHeight: '150px' }} />
      <p>Introducing Product 3, the ultimate weapon in your arsenal against outdoor grime! With its state-of-the-art scrubbing power and relentless perseverance, Product 3 annihilates dirt, mold, and mildew with the precision of a seasoned warrior on the battlefield. Say goodbye to grimy sidewalks and dingy driveways – Product 3 will transform your outdoor spaces into sparkling sanctuaries fit for royalty!</p>
      <button><Link to="/">Back to Main Page</Link></button>
    </div>
  );
}

export default ProductPage3;

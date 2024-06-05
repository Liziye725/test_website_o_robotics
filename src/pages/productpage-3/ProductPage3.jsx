import React from 'react';
import { Link } from 'react-router-dom';
import SnowScenarioBig from '../../assets/home/scenario-snow-big.png'


const ProductPage3 = () => {
  return (
    <div>
      <h1>Scenario 3: Snow Removal</h1>
      <img src={SnowScenarioBig} alt="Product 3" style={{ maxWidth: '600px' }} />
      <p>Our robot excels in snow removal, making winter maintenance more efficient and less labor-intensive. It clears sidewalks, driveways, and parking lots, ensuring safe and accessible paths. With its robust design and effective snow-handling capabilities, this robot becomes an indispensable tool during the winter months, reducing the effort and time traditionally required for snow clearance.</p>
      <button><Link to="/mainproductpage">Back to Products</Link></button>
    </div>
  );
}

export default ProductPage3;

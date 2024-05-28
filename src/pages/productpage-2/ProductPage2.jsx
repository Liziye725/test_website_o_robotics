import React from 'react';
import { Link } from 'react-router-dom';
import GarbageScenarioSmall from '../../assets/home/scenario-garbage-small.png'
import SnowScenarioSmall from '../../assets/home/scenario-snow-small.png'
import WeedScenarioSmall from '../../assets/home/scenario-weed-small.png'

const ProductPage2 = () => {
  return (
    <div>
      <h1>Scenario 2: Snow Removal</h1>
      <img src={SnowScenarioSmall} alt="Product 2" style={{ maxWidth: '300px', maxHeight: '150px' }} />
      <p>Our robot excels in snow removal, making winter maintenance more efficient and less labor-intensive. It clears sidewalks, driveways, and parking lots, ensuring safe and accessible paths. With its robust design and effective snow-handling capabilities, this robot becomes an indispensable tool during the winter months, reducing the effort and time traditionally required for snow clearance.</p>
      <button><Link to="/mainproductpage">Back to Products</Link></button>
    </div>
  );
}

export default ProductPage2;

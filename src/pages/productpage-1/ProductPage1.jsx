import React from 'react';
import { Link } from 'react-router-dom';
import ProductPhoto1 from '../../assets/home/FullAssembly3.png'


const ProductPage1 = () => {
  return (
    <div>
      <h1>Product 1</h1>
      <img src={ProductPhoto1} alt="Product 1" style={{ maxWidth: '400px', maxHeight: '150px' }} />
      <p>Sick of battling with Mother Nature's messes? Enter Product 1, your trusty sidekick in the quest for outdoor cleanliness! With its rugged design and unrivaled power, Product 1 tackles dirt, grime, and stubborn stains like a seasoned explorer conquering uncharted territory. Say goodbye to grimy patios and dusty decks – Product 1 is here to reclaim your outdoor spaces and turn them into pristine paradises!</p>
      <button><Link to="/">Back to Main Page</Link></button>
    </div>
  );
}

export default ProductPage1;

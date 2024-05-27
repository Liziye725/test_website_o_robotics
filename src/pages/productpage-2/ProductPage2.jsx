import React from 'react';
import { Link } from 'react-router-dom';
import ProductPhoto2 from '../../assets/home/FullAssembly4.png'

const ProductPage2 = () => {
  return (
    <div>
      <h1>Product 2</h1>
      <img src={ProductPhoto2} alt="Product 2" style={{ maxWidth: '300px', maxHeight: '150px' }} />
      <p>Meet Product 2, the superhero of outdoor cleaning! With its mighty suction and fearless determination, Product 2 takes on leaves, debris, and other outdoor offenders with the ferocity of a wild beast on the hunt. No mess is too big, no stain too stubborn – Product 2 will leave your outdoor surfaces looking immaculate, ready to impress even the pickiest of neighbors!</p>
      <button><Link to="/">Back to Main Page</Link></button>
    </div>
  );
}

export default ProductPage2;

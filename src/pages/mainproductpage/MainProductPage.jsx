import React from 'react';
import { Link } from 'react-router-dom';
import GarbageScenarioSmall from '../../assets/home/scenario-garbage-small.png';
import SnowScenarioSmall from '../../assets/home/scenario-snow-small.png';
import WeedScenarioSmall from '../../assets/home/scenario-weed-small.png';
import './MainProductPage.css';

const MainProductPage = () => {
  return (
    <div>
      <h1>Our scenarios</h1>
      <h2>Our robots can work in many different ways</h2>
      <div>
        <div>
          <Link to="/product1">
            <img src={WeedScenarioSmall} alt="Garbage" style={{ maxWidth: '300px', maxHeight: '150px' }} />
          </Link>
          <button>
            <Link to="/product1">Scenario 1</Link>
          </button>
        </div>
        <div>
          <Link to="/product2">
            <img src={GarbageScenarioSmall} alt="Snow" style={{ maxWidth: '300px', maxHeight: '150px' }} />
          </Link>
          <button>
            <Link to="/product2">Scenario 2</Link>
          </button>
        </div>
        <div>
          <Link to="/product3">
            <img src={SnowScenarioSmall} alt="Weed" style={{ maxWidth: '300px', maxHeight: '150px' }} />
          </Link>
          <button>
            <Link to="/product3">Scenario 3</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainProductPage;

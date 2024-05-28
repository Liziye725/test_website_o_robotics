import React from 'react';
import { Link } from 'react-router-dom';
import GarbageScenarioSmall from '../../assets/home/scenario-garbage-small.png';
import SnowScenarioSmall from '../../assets/home/scenario-snow-small.png';
import WeedScenarioSmall from '../../assets/home/scenario-weed-small.png';

const MainProductPage = () => {
  return (
    <div>
      <h1>Our scenarios</h1>
      <h2>Our robots can work in many different ways</h2>
      <div>
        <div>
          <img src={GarbageScenarioSmall} alt="Garbage" style={{ maxWidth: '300px', maxHeight: '150px' }} />
          <button>
            <Link to="/product1">Scenario 1</Link>
          </button>
        </div>
        <div>
          <img src={SnowScenarioSmall} alt="Snow" style={{ maxWidth: '300px', maxHeight: '150px' }} />
          <button>
            <Link to="/product2">Scenario 2</Link>
          </button>
        </div>
        <div>
          <img src={WeedScenarioSmall} alt="Weed" style={{ maxWidth: '300px', maxHeight: '150px' }} />
          <button>
            <Link to="/product3">Scenario 3</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainProductPage;

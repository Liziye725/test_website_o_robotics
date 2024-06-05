import React from "react";
import { Link } from "react-router-dom";
import GarbageScenarioSmall from "../../assets/home/scenario-garbage-small.png";
import SnowScenarioSmall from "../../assets/home/scenario-snow-small.png";
import WeedScenarioSmall from "../../assets/home/scenario-weed-small.png";
import "./MainProductPage.css";

const MainProductPage = () => {
  return (
    <div className="container">
      <h1>Our scenarios</h1>
      <h2>Our robots can work in many different ways</h2>
      <div className="scenarios">
        <div className="scenario">
          <Link to="/product/cleaningweed">
            <img src={WeedScenarioSmall} alt="Garbage" />
          </Link>
          <button>
            <Link to="/product/cleaningweed">Scenario 1</Link>
          </button>
        </div>
        <div className="scenario">
          <Link to="cleaninggarbage">
            <img src={GarbageScenarioSmall} alt="Snow" />
          </Link>
          <button>
            <Link to="cleaninggarbage">Scenario 2</Link>
          </button>
        </div>
        <div className="scenario">
          <Link to="/product/cleaningsnow">
            <img src={SnowScenarioSmall} alt="Weed" />
          </Link>
          <button>
            <Link to="/product/cleaningsnow">Scenario 3</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainProductPage;

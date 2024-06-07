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
          <a href="/product/weedcleaning" target="_blank" rel="noopener noreferrer">
            <img src={WeedScenarioSmall} alt="Weed" />
            <button>
              Scenario 1
            </button>
          </a>
        </div>
        <div className="scenario">
          <a href="/product/garbagecleaning" target="_blank" rel="noopener noreferrer">
            <img src={GarbageScenarioSmall} alt="Garbage" />
            <button>
              Scenario 2
            </button>
          </a>
        </div>
        <div className="scenario">
          <a href="/product/snowcleaning" target="_blank" rel="noopener noreferrer">
            <img src={SnowScenarioSmall} alt="Snow" />
            <button>
              Scenario 3
            </button>
          </a>
        </div>
      </div>
    </div >
  );
};

export default MainProductPage;

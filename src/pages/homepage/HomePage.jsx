import { Link } from "react-router-dom";
import overview1 from "../../assets/home/FullAssembly3.png";
import overview2 from "../../assets/home/FullAssembly4.png";

import scenarioWeed from "../../assets/home/scenario-weed-big.png";
import scenarioGarbage from "../../assets/home/scenario-garbage-big.jpg";
import scenarioSnow from "../../assets/home/scenario-snow-big.png";

import "./HomePage.css";

export default function HomePage() {
  return (
    <>
      <section>
        <div className="home-pictures">
          <div className="home-picture">
            <img src={overview1} alt="Overview 1" />
          </div>
          <div className="home-picture">
            <img src={overview2} alt="Overview 2" />
          </div>
        </div>
      </section>

      {/* <section>
        <div className="product-view">
          <div className="scenario-picture">
            <Link to={"/prodct/cleaningweed"} className="home-scenario">
              <img
                src={scenarioWeed}
                alt="Scenario 1"
                style={{ maxWidth: "1000px" }}
              />
              <p>Weed your yard</p>
            </Link>
          </div>
          <div className="scenario-picture">
            <Link to={"/product/cleaninggarbage"} className="submenu_item">
              <img
                src={scenarioGarbage}
                alt="Scenario 2"
                style={{ maxWidth: "1000px" }}
              />
              <p>Clean your garden</p>
            </Link>
          </div>
          <div className="scenario-picture">
            <Link to={"/product/cleaningsnow"} className="home-scenario">
              <img
                src={scenarioSnow}
                alt="Scenario 3"
                style={{ maxWidth: "1000px" }}
              />
              <p>Remove the snow</p>
            </Link>
          </div>
        </div>
      </section> */}
    </>
  );
}

import { Outlet, Link } from "react-router-dom";
import React from "react";
import logo from "../../assets/logo/logo.png";
import "./Menu.css";
import { useState } from "react";
import SearchBar from "../search/SearchBar";
import { faL } from "@fortawesome/free-solid-svg-icons";
import ScrollToLocation from "../ScrollToLocation";

export default function Menu() {
  const [showProductSubmenu, setShowProductSubmenu] = useState(false);
  const [showAboutSubmenu, setShowAboutSubmenu] = useState(false);

  const handleProductMouseEnter = () => {
    setShowProductSubmenu(false);
    setShowAboutSubmenu(false);
  };

  const handleProductMouseLeave = () => {
    setShowProductSubmenu(false);
  };

  const handleAboutMouseEnter = () => {
    setShowAboutSubmenu(false);
    setShowProductSubmenu(false);
  };

  const handleAboutMouseLeave = () => {
    setShowAboutSubmenu(false);
  };

  return (
    <>
      <Link to={"/"} className="menu_item--logo">
        <img
          src={logo}
          alt="Logo"
          style={{ maxWidth: "400px", maxHeight: "200px" }}
        />
      </Link>

      <nav className="menu">
        <div>
          <Link to={"/"} className="menu_item menu_item--logo">
            Home
          </Link>
          <Link
            to={"/product"}
            className="menu_item product_menu_item"
            onMouseEnter={handleProductMouseEnter}
            onMouseLeave={handleProductMouseLeave}
          >
            AMR Sweeper
            {showProductSubmenu && (
              <div className="product">
                <Link to={"/product/cleaningweed"} className="submenu_item">
                  <div className="item-product">Weed</div>
                </Link>
                <Link to={"/product/cleaninggarbage"} className="submenu_item">
                  <div className="item-product">Garbage</div>
                </Link>
                <Link to={"/product/cleaningsnow"} className="submenu_item">
                  <div className="item-product">Snow</div>
                </Link>
              </div>
            )}
          </Link>
          <Link
            to={"/about"}
            className="menu_item about_menu_item"
            onMouseEnter={handleAboutMouseEnter}
            onMouseLeave={handleAboutMouseLeave}
          >
            About Us
            {showAboutSubmenu && (
              <div className=" about">
                {/* <Link to={"/about#goal"} className="submenu_item">
                  <div className="item-about">Goals</div>
                </Link>
                <Link to={"/about#vision"} className="submenu_item">
                  <div className="item-about">Vision</div>
                </Link>
                <Link to={"/about#achievement"} className="submenu_item">
                  <div className="item-about">Achievements</div>
                </Link>
                <Link to={"/about#team"} className="submenu_item">
                  <div className="item-about">Teams</div>
                </Link> */}
              </div>
            )}
          </Link>
          <Link to={"/contact"} className="menu_item">
            Contact
          </Link>{" "}
        </div>
     
      </nav>
      <ScrollToLocation />
      <section>
        <Outlet />
      </section>
    </>
  );
}

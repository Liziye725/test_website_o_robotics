import { Outlet, Link } from "react-router-dom";
import React, { useState } from 'react'
import logo from '../../assets/logo/logo.png';
import './Menu.css'
import SearchBar from "../search/SearchBar";

export default function Menu() {
    const [showSubMenu, setShowSubMenu] = useState(false);
    
    const handleMouseEnter = () => {
        setShowSubMenu(true);
    }
    const handleMouseLeave = () => {
        setShowSubMenu(false);
    }
    return (
        <>
        <Link to={'/'} className="menu_item--logo">
            <img src={logo} alt="Logo" style={{ maxWidth: '400px', maxHeight: '200px' }} />
        </Link>
        
        
        <nav className="menu">
            <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <Link to={'/'} className="menu_item menu_item--logo">
                    Home
                </Link>
                <Link to={'/product'} className="menu_item" style={{ position: 'relative'}}>
                    Product
                    <div className="submenu-container" style={{ display: 'inline'}}>
                        {showSubMenu && ( 
                            <div className="submenu">
                                <Link to={'/product/weedcleaning'} className="submenu_item">
                                    <div className="item-product">Weed</div>
                                </Link>
                                <Link to={'/product/garbagecleaning'} className="submenu_item">
                                <div className="item-product">Garbage</div>
                                </Link>
                                <Link to={'/product/snowcleaning'} className="submenu_item">
                                <div className="item-product">Snow</div>
                                </Link>                                                        
                            </div>
                        )}
                    </div>

                    
                </Link>

                {/* <Link to={'/product/Weeding'} className="menu_item"> 
                    Weeding
                </Link>
                <Link to={'/product/Cleaning'} className="menu_item">
                    Cleaning
                </Link> */}
                <Link to={'/about'} className="menu_item">
                    About
                </Link>
                <Link to={'/contact'} className="menu_item">
                    Contact
                </Link>
            </div>
            <SearchBar />
        </nav>

        <section>
            <Outlet/>
        </section>
        </>
    );
};
import { Outlet, Link } from "react-router-dom";
import logo from '../assets/logo/logo.png';

export default function Menu() {
    return (
        <>
        <img src={logo} alt="Logo" style={{ maxWidth: '400px', maxHeight: '200px' }} />
        {/* Which will be replaced by our logo */}
        <nav className="menu">
            <div>
                <Link to={'/'} className="menu_item menu_item--logo">
                    Home
                </Link>
                {/* <Link to={'/product'} className="menu_item">
                    Product
                </Link>
                <Link to={'/product/feature'} className="menu_item"> 
                    Features
                </Link>
                <Link to={'/product/pricing'} className="menu_item">
                    Pricing
                </Link> */}
                <Link to={'/about'} className="menu_item">
                    About
                </Link>
                <Link to={'/mainproductpage'} className="menu_item"> 
                         Products 
                    </Link>
                {/* <Link to={'/contact'} className="menu_item">
                    Contact
                </Link> */}
            </div>
        </nav>

        <section>
            <Outlet/>
        </section>
        </>
    )
}
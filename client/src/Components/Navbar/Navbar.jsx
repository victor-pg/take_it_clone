import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll'
// import {FaFacebook} from 'react-icons/fa';
// import {FaInstagram} from 'react-icons/fa';
import './Navbar.scss';

const Navbar = () => {
    const [showNav, setShowNav] = useState(false);

    const changeNavState = () => {
        setShowNav(!showNav);
    }

    let navHeaderClass = showNav ? 'show-nav-header' : '';
    let navContentClass = showNav ? 'show-nav-content' : '';
    let positionInherit = showNav ? 'p-inherit' : '';


    return (
        <div className={`navbar ${positionInherit}`}>
            <nav className={navContentClass}>
                <div className={`nav-mobile-head ${navHeaderClass}`}>
                    <div className="burger" onClick={changeNavState}>
                        <div className="dot"></div>
                        <div className="dot"></div>
                        <div className="dot"></div>
                    </div>
                </div>
                <div className="logo">
                    <Link to="/"><img src={process.env.PUBLIC_URL + "/img/logo.png"} alt="logo" /></Link>
                </div>
                <div className="block-with-nav-items">
                    <ul className="nav-items">
                        <li><ScrollLink to="services" spy={true} smooth={true}>Serviciile noastre</ScrollLink></li>
                        <li><ScrollLink to="clients" spy={true} smooth={true}>Clientii nostri</ScrollLink></li>
                        <li><ScrollLink to="about" spy={true} smooth={true}>Despre</ScrollLink></li>
                        <li><ScrollLink to="partners" spy={true} smooth={true}>Parteneri</ScrollLink></li>
                        <li><ScrollLink to="footer" spy={true} smooth={true}>Contacte</ScrollLink></li>
                        <li><Link to="/catalog">Catalog</Link></li>
                        {/* <li><FaFacebook className="icon-size" /></li> */}
                        {/* <li><FaInstagram className="icon-size" /></li> */}
                        <li><button>Primiti oferta dvs.</button></li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
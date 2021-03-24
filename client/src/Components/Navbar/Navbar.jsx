import React from 'react';
import { Link } from 'react-router-dom';
import {Link as ScrollLink} from 'react-scroll'
import {FaFacebook} from 'react-icons/fa';
import {FaInstagram} from 'react-icons/fa';
import './Navbar.scss';

const Navbar = () => {

    return (
        <nav>
            <div className="logo">
                <Link to="/"><img src={process.env.PUBLIC_URL + "/img/logo.png"} alt="logo" /></Link>
            </div>
            <div>
                <ul className="nav-items">
                    <li><ScrollLink to="services" spy={true} smooth={true}>Serviciile noastre</ScrollLink></li>
                    <li><ScrollLink to="client" spy={true} smooth={true}>Clientii nostri</ScrollLink></li>
                    <li><Link to="/catalog">Catalog</Link></li>
                    <li><FaFacebook className="icon-size" /></li>
                    <li><FaInstagram className="icon-size" /></li>
                    <li><button>Primiti oferta dvs.</button></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
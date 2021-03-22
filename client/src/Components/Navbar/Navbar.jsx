import React from 'react';
import { Link } from 'react-router-dom';
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
                    <li><Link to="/">Serviciile noastre</Link></li>
                    <li><Link to="/test">Clientii nostri</Link></li>
                    <li><Link to="/catalog">Catalog</Link></li>
                    <li><FaFacebook className="icon-size" /></li>
                    <li><FaInstagram className="icon-size" /></li>
                    <li><a href="#"><button>Primiti oferta dvs.</button></a></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
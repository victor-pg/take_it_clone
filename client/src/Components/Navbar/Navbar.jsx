import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll'
// import ModalWindow from '../ModalWindow/ModalWindow';

import './Navbar.scss';

const Navbar = () => {
    const [showNav, setShowNav] = useState(false);
    // const [showModal, setShowModal] = useState(false);

    const changeNavState = () => {
        setShowNav(!showNav);
    }
    // const changeModalState = () => {
    //     setShowModal(!showModal);
    // }

    let navHeaderClass = showNav ? 'show-nav-header' : '';
    let navContentClass = showNav ? 'show-nav-content' : '';
    let positionInherit = showNav ? 'p-inherit' : '';

    // const modalHtmlContent = () => {
    //     return (
    //         <form action="#" method="post" className="modal-html-content">
    //             <div className="form-group">
    //                 <label htmlFor="name">Numele Dvs.</label>
    //                 <input type="text" name="name" required /> 
    //             </div>

    //             <div className="form-group">
    //                 <label htmlFor="phone">Telefonul</label>
    //                 <input type="tel" id="phone" required name="phone" placeholder="+373" pattern="/^\+373\[0-9]\{2\}-\[0-9]\{2\}-\[0-9]\{2\}-\[0-9]\{2\}$/i" />
    //             </div>
    //             {/* <input type="submit" value="Primeste oferta" className="submit-button" /> */}
    //             <a href="tel:+37330001015" className="submit-button">Sunați-ne</a>
    //         </form>
    //     );
    // };

    return (
        <div className={`navbar2 ${positionInherit} `}>
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
                        <li><ScrollLink to="clients" spy={true} smooth={true}>Clienții noștri</ScrollLink></li>
                        {/* <li><ScrollLink to="news" spy={true} smooth={true}>Noutăți</ScrollLink></li> */}
                        <li><ScrollLink to="about" spy={true} smooth={true}>Despre</ScrollLink></li>
                        <li><ScrollLink to="partners" spy={true} smooth={true}>Parteneri</ScrollLink></li>
                        <li><ScrollLink to="footer" spy={true} smooth={true}>Contacte</ScrollLink></li>
                        <li><Link to="/catalog" className="catalog-link">Catalog</Link></li>
                        {/* <li><FaFacebook className="icon-size" /></li> */}
                        {/* <li><FaInstagram className="icon-size" /></li> */}
                        <li>
                            {/* <button
                                onClick={changeModalState}
                            >
                                Sunați-ne
                            </button> */}
                            <a href="tel:+37330001015" className="submit-button">Sunați-ne</a>
                            {/* {
                                showModal ? <ModalWindow htmlContent={modalHtmlContent} showCloseButton={false} />
                                    : null
                            } */}
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
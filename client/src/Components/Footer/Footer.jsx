import React from 'react';
import { FaFacebook } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';

import './Footer.scss';

const Footer = () => {
    return (
        <footer id="footer">
            <div className="comunicare">
                <div className="container">
                    <p>SUNTEM DESCHIȘI PENTRU COMUNICARE</p>
                    <a href="https://www.facebook.com/takeit.md" target="_blank" rel="noreferrer">
                        Scrieți-ne
                    </a>
                </div>
            </div>
            <div className="footer-details">
                <div className="footer-map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1359.9283398184502!2d28.851461223296504!3d47.023418176271186!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd2c43288ec3e3f31!2sTakeIT!5e0!3m2!1sro!2s!4v1621328828192!5m2!1sro!2s" width="100%" height="100%" style={{ border: 0 }} title="take-it-map" allowfullscreen="" loading="lazy"></iframe>
                </div>
                <div className="number">
                    <div className="container">
                        <p className="footer-title">SUNTEM DESCHIȘI PENTRU COMUNICARE</p>
                        <p className="footer-email">sales@takeit.md</p>
                        <p className="footer-number">+373 79 33 99 33</p>
                        <div className="footer-icons">
                            <a href="https://www.facebook.com/takeit.md/" target="_blank" rel="noreferrer">
                                <FaFacebook />
                            </a>
                            <a href="https://www.instagram.com/take_it_srl/" target="_blank" rel="noreferrer">
                                <FaInstagram />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
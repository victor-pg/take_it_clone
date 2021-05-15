import React from 'react';
import {FaFacebook} from 'react-icons/fa';
import {FaInstagram} from 'react-icons/fa';

import './Footer.scss';

const Footer=()=>{
    return(
        <footer id="footer">
            <div className="comunicare">
                <div className="container">
                    <p>SUNTEM DESCHIȘI PENTRU COMUNICARE</p>
                    <a href="https: //www.facebook.com/takeit.md" target="_blank" rel="noreferrer">
                        Scrieți-ne
                    </a>
                </div>
            </div>
            <div className="number">
                <div className="container">
                    <p className="footer-title">SUNTEM DESCHIȘI PENTRU COMUNICARE</p>
                    <p className="footer-email">sales@takeit.md</p>
                    <p className="footer-number">+373 79 33 99 33</p>
                    <div className="footer-icons">
                        <a href="https://www.facebook.com/takeit.md/" target="_blank" rel="noreferrer">
                            <FaFacebook/>
                        </a>
                        <a href="https://www.instagram.com/take_it_srl/" target="_blank" rel="noreferrer">
                            <FaInstagram/>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
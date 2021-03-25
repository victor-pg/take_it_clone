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
                    <button>Scrieti-ne</button>
                </div>
            </div>
            <div className="number">
                <div className="container">
                    <p className="footer-title">SUNTEM DESCHIȘI PENTRU COMUNICARE</p>
                    <p className="footer-email">test@test.test</p>
                    <p className="footer-number">+373 00 00 00 00</p>
                    <div className="footer-icons">
                        <FaFacebook/>
                        <FaInstagram/>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
import React from 'react';
import {Link as ScrollLink} from 'react-scroll'
import { MdKeyboardArrowDown } from 'react-icons/md';

import './WelcomeSection.scss';

const WelcomeSection = () => {
    return (
        <div className="welcome-section" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/img/homepage.jpg)` }}>
            <div className="black-overlay"></div>
            <div className="welcome-section-content">
                <p className="welcome-section-title">Soluții pentru afaceri</p>
                <p className="welcome-section-subtitle">Soluții complexe pentru automatizarea proceselor operațonale in magazine, centre comerciale, restaurante, bănci, farmacii, centre auto și alte unități comerciale.</p>
            </div>
            <div className="welcome-section-arrow">
                <ScrollLink to="services" spy={true} smooth={true}>
                    <MdKeyboardArrowDown />
                </ScrollLink>
            </div>
        </div>
    );
}

export default WelcomeSection;
import React from 'react';
import {Link as ScrollLink} from 'react-scroll'
import { MdKeyboardArrowDown } from 'react-icons/md';
import {FormattedMessage} from 'react-intl';

import './WelcomeSection.scss';

const WelcomeSection = () => {
    return (
        <div className="welcome-section" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/img/homepage.jpg)` }}>
            <div className="black-overlay"></div>
            <div className="welcome-section-content">
                <p className="welcome-section-title"><FormattedMessage id="welcome-title"/></p>
                <p className="welcome-section-subtitle"><FormattedMessage id="welcome-subtitle"/></p>
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
import React, { useState } from 'react';
import { FaFacebook } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { AiOutlineArrowUp } from 'react-icons/ai';
import { FormattedMessage } from 'react-intl';

import './ServicesSection.scss';

const ServicesSection = () => {

    const [showScroll, setShowScroll] = useState(false)
    const checkScrollTop = () => {
        if (!showScroll && window.pageYOffset > 400) {
            setShowScroll(true)
        } else if (showScroll && window.pageYOffset <= 400) {
            setShowScroll(false)
        }
    };
    window.addEventListener('scroll', checkScrollTop)

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    return (
        <div className="services-section container" id="services">
            <p className="services-section-title"><FormattedMessage id="services-title" /></p>
            <p className="services-section-subtitle"><FormattedMessage id="services-subtitle" /></p>
            <div className="services-section-row">
                <img src={process.env.PUBLIC_URL + "/img/services1.jpg"} alt="services-image1" />
                <div>
                    <p className="services-section-text-title"><FormattedMessage id="services-block1-title" /></p>
                    <p className="services-section-text-subtitle"><FormattedMessage id="services-block1-subtitle" /></p>
                </div>
            </div>
            <div className="services-section-row flex-reverse">
                <img src={process.env.PUBLIC_URL + "/img/services2.jpg"} alt="services-image2" />
                <div>
                    <p className="services-section-text-title"><FormattedMessage id="services-block2-title" /></p>
                    <p className="services-section-text-subtitle"><FormattedMessage id="services-block2-subtitle" /></p>
                </div>
            </div>
            <div className="services-section-row">
                <img src={process.env.PUBLIC_URL + "/img/services3.jpg"} alt="services-image3" />
                <div>
                    <p className="services-section-text-title"><FormattedMessage id="services-block3-title" /></p>
                    <p className="services-section-text-subtitle"><FormattedMessage id="services-block3-subtitle" /></p>
                </div>
            </div>
            <p className="service-section-end-text">
                <FormattedMessage id="services-footer-text" />
            </p>
            <div className="service-section-end-icons">
                <a href="https://www.facebook.com/takeit.md/" target="_blanc" className="reset-this facebook-icon"><FaFacebook className="icon-size" /></a>
                <a href="https://www.instagram.com/take_it_srl/" target="_blanc" className="reset-this instagram-icon"><FaInstagram className="icon-size" /></a>

            </div>
            <div className="arrow-up-block">
                <AiOutlineArrowUp className="arrow-up" onClick={scrollToTop}
                    style={{ height: 40, display: showScroll ? '' : 'none' }}
                />
            </div>
        </div>
    );
}

export default ServicesSection;
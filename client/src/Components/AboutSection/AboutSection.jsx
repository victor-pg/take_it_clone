import React from 'react';
import { IoMdCheckmarkCircleOutline } from 'react-icons/io';
import {FormattedMessage} from 'react-intl';
import './AboutSection.scss';

const AboutSection = () => {
    return (
        <div className="about-section" id="about">
            <div className="container">
                <p className="about-section-title"><FormattedMessage id="about-title"/></p>
                <p className="about-section-subtitle"><FormattedMessage id="about-subtitle"/></p>
                <div className="about-section-benefits">
                    <div className="about-section-benefits-item">
                        <img src={process.env.PUBLIC_URL + '/img/cupa.svg'} className="benefits-icon" alt="cupa" />
                        <p className="benefits-title"><FormattedMessage id="about-block1-title"/></p>
                        <p className="benefits-subtitle"><FormattedMessage id="about-block1-subtitle"/></p>
                    </div>
                    <div className="about-section-benefits-item">
                        <img src={process.env.PUBLIC_URL + '/img/person.svg'} className="benefits-icon" alt="person" />
                        <p className="benefits-title"><FormattedMessage id="about-block2-title"/></p>
                        <p className="benefits-subtitle"><FormattedMessage id="about-block2-subtitle"/></p>
                    </div>
                    <div className="about-section-benefits-item">
                        <img src={process.env.PUBLIC_URL + '/img/magic.svg'} className="benefits-icon" alt="magic" />
                        <p className="benefits-title"><FormattedMessage id="about-block3-title"/></p>
                        <p className="benefits-subtitle"><FormattedMessage id="about-block3-subtitle"/></p>
                    </div>
                </div>
                <p className="about-section-title"><FormattedMessage id="about-benefits-title"/></p>
                <div className="about-section-last-info">
                    <div>
                        <IoMdCheckmarkCircleOutline className="mark-icon" />
                    </div>
                    <div className="about-section-last-content">
                        <p className="benefits-title"><FormattedMessage id="about-benefits-block1-title"/></p>
                        <p className="benefits-subtitle"><FormattedMessage id="about-benefits-block1-subtitle"/></p>
                    </div>
                </div>
                <div className="about-section-last-info">
                    <div>
                        <IoMdCheckmarkCircleOutline className="mark-icon" />
                    </div>
                    <div className="about-section-last-content">
                        <p className="benefits-title"><FormattedMessage id="about-benefits-block2-title"/></p>
                        <p className="benefits-subtitle"><FormattedMessage id="about-benefits-block2-subtitle"/></p>
                    </div>
                </div>
                <div className="about-section-last-info">
                    <div>
                        <IoMdCheckmarkCircleOutline className="mark-icon" />
                    </div>
                    <div className="about-section-last-content">
                        <p className="benefits-title"><FormattedMessage id="about-benefits-block3-title"/></p>
                        <p className="benefits-subtitle"><FormattedMessage id="about-benefits-block3-subtitle"/></p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutSection;
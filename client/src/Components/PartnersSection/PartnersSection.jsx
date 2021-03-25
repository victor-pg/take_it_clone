import React from 'react';
import './PartnersSection.scss';

const PartnersSection = () => {
    return (
        <div className="partners-section" id="partners">
            <div className="container">
                <p className="partners-section-title">Partenerii noștri</p>
                <p className="partners-section-subtitle">Take IT - importator oficial pe teritoriul Republicii Moldova, partener de incredere a producătorilor de echipamente cu mărci de renume mondial.</p>
                <div className="partners-section-images">
                    <img src={process.env.PUBLIC_URL + '/img/partners1.jpg'} className="partners-image" alt="partners1" />
                    <img src={process.env.PUBLIC_URL + '/img/partners2.jpg'} className="partners-image" alt="partners2" />
                    <img src={process.env.PUBLIC_URL + '/img/partners3.png'} className="partners-image" alt="partners3" />
                    <img src={process.env.PUBLIC_URL + '/img/partners4.jpg'} className="partners-image" alt="partners4" />
                    <img src={process.env.PUBLIC_URL + '/img/partners5.jpg'} className="partners-image" alt="partners5" />
                </div>
            </div>
        </div>
    );
}

export default PartnersSection;
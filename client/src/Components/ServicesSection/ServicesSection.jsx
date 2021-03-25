import React, { useState } from 'react';
import { FaFacebook } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { AiOutlineArrowUp } from 'react-icons/ai';

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
    console.log('render');
    return (
        <div className="services-section container" id="services">
            <p className="services-section-title">Serviciile noastre</p>
            <p className="services-section-subtitle">Oferim mai multe servicii de automatizarea cu echipament modern pentru dezvoltarea companiei dvs. Suntem întotdeauna gata să ne întâlnim și să discutăm cu ce vă putem ajuta.</p>
            <div className="services-section-row">
                <img src={process.env.PUBLIC_URL + "/img/services1.jpg"} alt="services-image1" />
                <div>
                    <p className="services-section-text-title">Soluții complexe</p>
                    <p className="services-section-text-subtitle">Noi creăm soluții complexe de automatizare a proceselor companiei în funcție de obiectivele afacerii. Alegerea echipamentelor și serviciilor se bazează pe analiza ofertelor de piață și a punctelor de creștere a eficienței pentru afacerea și personalul companiei dvs., loialitatea clienților dvs.</p>
                </div>
            </div>
            <div className="services-section-row flex-reverse">
                <img src={process.env.PUBLIC_URL + "/img/services2.jpg"} alt="services-image2" />
                <div>
                    <p className="services-section-text-title">Selectarea echipamentului</p>
                    <p className="services-section-text-subtitle">Echipamentul este o parte importantă dezvoltării companiei. Vă ajutăm să alegeți tehnologia necesară pentru afacerea dvs., să dezvoltați o echipă existentă sau să lansați o nouă afacere. Garanția calității și eficienței soluțiilor selectate individual.</p>
                </div>
            </div>
            <div className="services-section-row">
                <img src={process.env.PUBLIC_URL + "/img/services3.jpg"} alt="services-image3" />
                <div>
                    <p className="services-section-text-title">Service Centru Specializat</p>
                    <p className="services-section-text-subtitle">Angajații Call-centre vor răspunde la întrebările apărute și vor soluționa rapid deranjamentele. Tehnicienii noștri de înaltă calificare vor oferi servicii de garanție și post-garanție pentru echipamente noi și existente, documentație și alte aspecte importante ale muncii pentru companie dvs. Un grup operativ de tehnicieni este întotdeauna la dispoziția dumneavoastră.</p>
                </div>
            </div>
            <p className="service-section-end-text">
                Suntem partenerul dvs, vă oferim o serie de soluții complexe pentru automatizarea afacerii și imbunătățirea efecienței personalului, precum și sporirea loialității clienților dvs.
            </p>
            <div className="service-section-end-icons">
                <FaFacebook className="icon-size" />
                <FaInstagram className="icon-size" />
            </div>
            <div>
                <AiOutlineArrowUp className="arrow-up" onClick={scrollToTop}
                    style={{height: 40, display: showScroll ? '' : 'none'}}
                />
            </div>
        </div>
    );
}

export default ServicesSection;
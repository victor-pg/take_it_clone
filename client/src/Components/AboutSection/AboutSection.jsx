import React from 'react';
import { IoMdCheckmarkCircleOutline } from 'react-icons/io'
import './AboutSection.scss';

const AboutSection = () => {
    return (
        <div className="about-section" id="about">
            <div className="container">
                <p className="about-section-title">De ce Take IT?</p>
                <p className="about-section-subtitle">Avem peste 20 de ani de experiență asigurând acoperirea riscurilor informatice, a situațiilor de nefuncționare a echipamentelor IT. Oferim clienților soluții personalizate și suport tehnic necesar pentru evitarea intreruperilor în activitate. Avem capacitatea de a ințelege și de a ne adapta la creșterea rapidă a tehnologiei – pe măsura ce creștem, suntem capabili să ajutăm companiile și organizațiile de toate tipurile și dimensiunile să crească la rândul lor.</p>
                <div className="about-section-benefits">
                    <div className="about-section-benefits-item">
                        <img src={process.env.PUBLIC_URL + '/img/cupa.svg'} className="benefits-icon" alt="cupa" />
                        <p className="benefits-title">Experiența</p>
                        <p className="benefits-subtitle">Experiența noastră vorbește pentru noi. Am lucrat cu startupuri mici și cu branduri bine-cunoscute.</p>
                    </div>
                    <div className="about-section-benefits-item">
                        <img src={process.env.PUBLIC_URL + '/img/person.svg'} className="benefits-icon" alt="person" />
                        <p className="benefits-title">Abordare individuală</p>
                        <p className="benefits-subtitle">Fiecare companie cu care lucrăm are propriul concept. Dezvoltăm produse unice.
</p>
                    </div>
                    <div className="about-section-benefits-item">
                        <img src={process.env.PUBLIC_URL + '/img/magic.svg'} className="benefits-icon" alt="magic" />
                        <p className="benefits-title">Creșterea în continuare</p>
                        <p className="benefits-subtitle">Profesioniștii noștri cu experiență vă vor ajuta să vă dezvoltați afacerea implementind noi tehnologii de lucru.</p>
                    </div>
                </div>
                <p className="about-section-title">Beneficiile cooperării cu Take IT</p>
                <div className="about-section-last-info">
                    <div>
                        <IoMdCheckmarkCircleOutline className="mark-icon" />
                    </div>
                    <div className="about-section-last-content">
                        <p className="benefits-title">Înțelegere clară a automatizării afacerii dvs.</p>
                        <p className="benefits-subtitle">Scopul nostru constă în supportul afacerii, consumatorilor și angajaților dvs. Vă vom ajuta să analizați etapele anterioare de dezvoltare, și să înțelegeți care sunt necesitățile la moment, pentru a prezice pașii următori.</p>
                    </div>
                </div>
                <div className="about-section-last-info">
                    <div>
                        <IoMdCheckmarkCircleOutline className="mark-icon" />
                    </div>
                    <div className="about-section-last-content">
                        <p className="benefits-title">Economisiți timp și bani</p>
                        <p className="benefits-subtitle">Specialiștii noștri vă vor ajuta să creați o singură soluție cu echipamentul de care aveți nevoie, în parteneriat cu furnizorii de produse software, cu documentația. Nu pierdeți timpul în căutarea fiecărui tip de echipament și serviciu în mod individual.</p>
                    </div>
                </div>
                <div className="about-section-last-info">
                    <div>
                        <IoMdCheckmarkCircleOutline className="mark-icon" />
                    </div>
                    <div className="about-section-last-content">
                        <p className="benefits-title">Evaluarea performanței afacerii</p>
                        <p className="benefits-subtitle">Vă ajutăm să obțineți maximum de la afaceriea dvs. Experții noștri vă vor ajuta să identificați punctele de creștere și împreună cu dvs. vom dezvolta un plan de automatizare a proceselor operaționale care vă vor ajuta să vă îmbunătățiți eficiența angajaților dvs, atrăgând astfel noi cumpărători.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutSection;
import React from 'react';
import WelcomeSection from '../WelcomeSection/WelcomeSection';
import ServicesSection from '../ServicesSection/ServicesSection';
import ClientsSection from '../ClientsSection/ClientsSection';
import NewsSection from '../NewsSection/NewsSection';
import AboutSection from '../AboutSection/AboutSection';
import PartnersSection from '../PartnersSection/PartnersSection';
import Footer from '../Footer/Footer';

import './MainPage.scss';

const MainPage = () => {
    return (
        <>
            <WelcomeSection />
            <ServicesSection/>
            <ClientsSection/>
            <NewsSection/>
            <AboutSection/>
            <PartnersSection/>
            <Footer/>
        </>
    );
}

export default MainPage;
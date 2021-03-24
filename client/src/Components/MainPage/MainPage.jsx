import React from 'react';
import WelcomeSection from '../WelcomeSection/WelcomeSection';
import ServicesSection from '../ServicesSection/ServicesSection';

import './MainPage.scss';

const MainPage = () => {
    return (
        <>
            <WelcomeSection />
            <ServicesSection/>
        </>
    );
}

export default MainPage;
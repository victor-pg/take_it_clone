import React from 'react';
import WelcomeSection from '../WelcomeSection/WelcomeSection';
import ServicesSection from '../ServicesSection/ServicesSection';

import { MdKeyboardArrowDown } from 'react-icons/md';
import './MainPage.scss';

const MainPage = () => {
    console.log(process.env.PUBLIC_URL)
    return (
        <>
            <WelcomeSection />
            <ServicesSection/>
        </>
    );
}

export default MainPage;
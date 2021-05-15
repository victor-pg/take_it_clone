import React from 'react';
import {Link as ScrollLink} from 'react-scroll'
import { MdKeyboardArrowDown } from 'react-icons/md';

import './NewsPage.scss';

const NewsPage=()=>{
    return(
        <div className="news-page" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/img/news-background.jpg)` }}>
            <div className="black-overlay"></div>
            <div className="news-page-welcome-text">Noutățile in cadrul TakeIT</div>
            <div className="news-page-arrow">
                <ScrollLink to="" spy={true} smooth={true}>
                    <MdKeyboardArrowDown />
                </ScrollLink>
            </div>
        </div>
    );
}

export default NewsPage;
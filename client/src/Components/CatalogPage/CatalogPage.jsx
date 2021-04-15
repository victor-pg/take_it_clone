import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import axios from 'axios';

import CatalogItem from '../CatalogItem/CatalogItem';

import './CatalogPage.scss';

const CatalogPage = () => {
    const [data, setData] = useState([]);
    const [showNav, setShowNav] = useState(false);

    const changeNavState = () => {
        setShowNav(!showNav);
    }


    useEffect(() => {
        axios.get('/api/products')
            .then(res => setData(res.data))
            .catch(error => console.log(error.message));
    }, [])



    let navContentClass = showNav ? 'show-nav-content2' : '';
    let positionInherit = showNav ? 'p-inherit' : '';
    let m0Auto = showNav ? 'm0Auto' : '';

    return (
        <div className="catalog-page">
            <div className="container">
                <div className={`nav-mobile ${positionInherit}`}>
                    <div className="catalog-page-black-section">
                        <div className="catalog-page-black-section-text">
                            Take IT Echipment
                    </div>
                        <div className="burger" onClick={changeNavState}>
                            <div className="dot"></div>
                            <div className="dot"></div>
                            <div className="dot"></div>
                        </div>
                    </div>
                    <div className={`catalog-page-header ${navContentClass}`}>
                        <Link to="/"><img src={process.env.PUBLIC_URL + '/img/tiny-logo.jpg'} className="tiny-logo" alt="tiny-logo" />
                        </Link>
                        <div className="catalog-menu">
                            <hr className="catalog-delimitator" />
                            <ul>
                                <li><ScrollLink>Aures</ScrollLink></li>
                                <li><ScrollLink>Datalogic</ScrollLink></li>
                                <li><ScrollLink>Shopguard</ScrollLink></li>
                                <li><ScrollLink>Zebra</ScrollLink></li>
                                <li><ScrollLink>Bizerda</ScrollLink></li>
                                <li><ScrollLink>TSC</ScrollLink></li>
                            </ul>
                            <hr className="catalog-delimitator" />
                        </div>
                    </div>

                </div>
                <p className={`catalog-page-title ${m0Auto}`}>Partenerii noștri sunt branduri cu renume internațional, care combină funcționalitatea și designul elegant pentru afacerea dvs. Suntem foarte mândri de cooperarea noastră!</p>
                <p className="catalog-page-contacts">Contactați-ne: sales@takeit.md</p>
                <div className="catalog-page-content">
                    <p className="section-title">CCL</p>
                    <div className="section">
                    {
                            data.map((item) => {
                                return <CatalogItem item={item} key={item._id} className="catalog-item" />
                            })
                        }
                        {
                            data.map((item) => {
                                return <CatalogItem item={item} key={item._id} />
                            })
                        }
                    </div>
                </div>
            </div>
            <div className="catalog-footer">
                <div className="container">
                    <p className="catalog-footer-title">СONTACTAȚI-NE:</p>
                    <p className="catalog-footer-number">+373 79 33 99 33</p>
                    <div className="catalog-footer-email">sales@takeit.md</div>
                </div>
            </div>
        </div>
    );
}

export default CatalogPage;
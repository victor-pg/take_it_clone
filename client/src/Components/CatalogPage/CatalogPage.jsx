import React,{useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import axios from 'axios';

import CatalogItem from '../CatalogItem/CatalogItem';

import './CatalogPage.scss';

const CatalogPage = () => {
    const[data,setData]=useState([]);

    useEffect(()=>{
        axios.get('/api/products')
            .then(res=>setData(res.data))
            .catch(error=>console.log(error.message));
    },[])
    return (
        <div className="catalog-page">
            <div className="container">
                <div className="catalog-page-header">
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
                    <p className="catalog-page-title">Partenerii noștri sunt branduri cu renume internațional, care combină funcționalitatea și designul elegant pentru afacerea dvs. Suntem foarte mândri de cooperarea noastră!</p>
                    <p className="catalog-page-contacts">Contactați-ne: test@test.test</p>
                </div>
                <div className="catalog-page-content">
                    {
                        data.map((item)=>{
                            return <CatalogItem item={item} key={item._id} />                            
                        })
                    }
                </div>
            </div>
            <div className="catalog-footer">
                <div className="container">
                    <p className="catalog-footer-title">СONTACTAȚI-NE:</p>
                    <p className="catalog-footer-number">+373 00 00 00 00</p>
                    <div className="catalog-footer-email">test@test.test</div>
                </div>
            </div>
        </div>
    );
}

export default CatalogPage;
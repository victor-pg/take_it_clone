import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Loader from '../Loader/Loader';
import {FormattedMessage} from 'react-intl';

import './CatalogItemDetails.scss';

const CatalogItemDetails = ({ id }) => {
    const [item, setItem] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if(JSON.parse(localStorage.getItem('language'))==='ro'){
            setLoading(true);
            axios
            .get(`/api/details/${id}`)
            .then((res) => setItem(res.data))
            .catch((error) => console.log(error.message));
            setLoading(false);
          }else if(JSON.parse(localStorage.getItem('language'))==='ru'){
            setLoading(true);
            axios
            .get(`/api/details/ru/${id}`)
            .then((res) => setItem(res.data))
            .catch((error) => console.log(error.message));
            setLoading(false);
          }
    }, [id])



    if (!loading) {
        return (
            <>
                {
                    item.map(obj => {
                        return (
                            <div className="catalog-item-details" key={obj.id}>
                                <Link to="/catalog" className="back-button"><button><FormattedMessage id="back-button"/></button></Link>
                                <div className="details-image"><img src={process.env.PUBLIC_URL + '/img/products/' + obj.imgurl} alt={obj.name} /></div>
                                <div className="details-text">
                                    <p className="details-text-title">{obj.name}</p>
                                    <p className="details-text-description">{obj.description}</p>
                                </div>
                            </div>
                        );
                    })
                }
            </>
        );
    } else {
        return <Loader align={"center"} />
    }

}

export default CatalogItemDetails;
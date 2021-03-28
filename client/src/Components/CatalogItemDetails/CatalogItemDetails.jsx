import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import './CatalogItemDetails.scss';

const CatalogItemDetails = ({ id }) => {
    const [item, setItem] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        axios.get(`/api/details/${id}`)
            .then(res => { setItem(res.data); setLoading(false); })
            .catch(error => { console.log(error.message); setLoading(false); })

    }, [id])

    if (!loading) {
        return (
            <div className="catalog-item-details">
                <Link to="/catalog" className="back-button"><button>Inapoi</button></Link>
                <div className="details-image"><img src={process.env.PUBLIC_URL + '/img/' + item.imgUrl} alt={item.name} /></div>
                <div className="details-text">
                    <p className="details-text-title">{item.name}</p>
                    <p className="details-text-description">{item.description}</p>
                </div>
            </div>
        );
    } else {
        return <h1>Loading...</h1>
    }
}

export default CatalogItemDetails;
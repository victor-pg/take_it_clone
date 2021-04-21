import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Loader from '../Loader/Loader';

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
            <>
                {
                    item.map(obj => {
                        return (
                            <div className="catalog-item-details" key={obj.id}>
                                <Link to="/catalog" className="back-button"><button>Înapoi</button></Link>
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
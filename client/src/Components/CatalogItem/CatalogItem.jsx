import React from 'react';
import { Link } from 'react-router-dom';

import './CatalogItem.scss';

const CatalogItem = ({ item }) => {
    return (
        <div className="catalog-item">
            {/* <img src={process.env.PUBLIC_URL + '/img/' + item.imgUrl} alt={item.name} /> */}
            <div className="catalog-item-img" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/img/${item.imgUrl})` }}></div>
            <p className="catalog-item-name">{item.name}</p>
            <Link to={`/details/${item._id}`} params={{id:item._id}} >
                <button className="catalog-item-button">Detalii</button>
            </Link>
        </div>
    );
}

export default CatalogItem;
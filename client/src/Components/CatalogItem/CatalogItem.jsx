import React from 'react';
import { Link } from 'react-router-dom';
import {FormattedMessage} from 'react-intl';

import './CatalogItem.scss';

const CatalogItem = ({ item }) => {
    return (
        <div className="catalog-item">
            {/* <img src={process.env.PUBLIC_URL + '/img/' + item.imgUrl} alt={item.name} /> */}
            <div className="catalog-item-img" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/img/products/${item.imgurl})` }}></div>
            <p className="catalog-item-name">{item.name}</p>
            <div className="catalog-item-short-desc">{item.short_desc}</div>
            <Link to={`/details/${item.id}`} params={{id:item.id}} >
                <button className="catalog-item-button"><FormattedMessage id="details-button"/></button>
            </Link>
        </div>
    );
}

export default CatalogItem;
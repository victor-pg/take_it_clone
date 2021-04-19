import React from 'react';
import './NewsItem.scss';

const NewsItem = ({item}) => {
    return(
        <div className="news-item">
            <div className="news-img-wrapper" style={{backgroundImage:`url(${item.imgurl})`}}></div>
            <div className="news-item-title">{item.title}</div>
            <div className="news-item-subtitle">{item.subtitle}</div>
            {/* <div className="news-item-title">{item.timestamp}</div>             */}
        </div>
    );
}

export default NewsItem;
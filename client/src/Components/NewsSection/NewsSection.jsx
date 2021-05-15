import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import NewsItem from "../NewsItem/NewsItem";

import "./NewsSection.scss";

const NewsSection = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    axios
      .get("/api/newest")
      .then((res) => {
        setNews(res.data);
      })
      .catch((err) => {
        console.log("Cannot get news " + err);
      });
  }, []);

  return (
    <div className="news-section" id="news">
      <div className="container">
        <div className="news-section-content">
          {news.map((item) => {
            return <NewsItem item={item} key={item.id} />;
          })}
        </div>
        <Link to="/news" className="news-section-view-more">
          <button>Citește toate articolele</button>
        </Link>
      </div>
    </div>
  );
};

export default NewsSection;

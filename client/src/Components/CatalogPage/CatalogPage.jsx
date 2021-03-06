import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import axios from "axios";
import {FormattedMessage} from 'react-intl';

import CatalogItem from "../CatalogItem/CatalogItem";

import "./CatalogPage.scss";

const CatalogPage = () => {
  const [data, setData] = useState([]);
  const [productTypes, setProductTypes] = useState([]);

  const [showNav, setShowNav] = useState(false);

  const changeNavState = () => {
    setShowNav(!showNav);
  };

  useEffect(() => {
    if(JSON.parse(localStorage.getItem('language'))==='ro'){
      axios
      .get("/api/products")
      .then((res) => setData(res.data))
      .catch((error) => console.log(error.message));
    }else if(JSON.parse(localStorage.getItem('language'))==='ru'){
      axios
      .get("/api/products/ru")
      .then((res) => setData(res.data))
      .catch((error) => console.log(error.message));
    }
    
    getProductTypes();
  }, []);

  const getProductTypes = async () => {
    await axios
      .get("/api/products/types")
      .then((res) => setProductTypes(res.data))
      .catch((err) => console.log("Error while getting product types " + err));
  };

  let navContentClass = showNav ? "show-nav-content2" : "";
  let positionInherit = showNav ? "p-inherit" : "";
  let m0Auto = showNav ? "m0Auto" : "";

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
            <Link to="/">
              <img
                src={process.env.PUBLIC_URL + "/img/tiny-logo.jpg"}
                className="tiny-logo"
                alt="tiny-logo"
              />
            </Link>
            <div className="catalog-menu">
              <hr className="catalog-delimitator" />
              <ul>
                {productTypes.map(({ type }) => {
                  if(type.length<=3) {  
                  return(
                    <li className="text-uppercase">
                      <ScrollLink to={type} spy={true} smooth={true}>
                        {type}
                      </ScrollLink>
                    </li>
                  )
                   }else return (
                    <li className="text-capitalize">
                      <ScrollLink to={type} spy={true} smooth={true}>
                        {type}
                      </ScrollLink>
                    </li>
                  );
                })}

                {/* <li>
                  <ScrollLink to="datalogic" spy={true} smooth={true}>
                    Datalogic
                  </ScrollLink>
                </li>
                <li>
                  <ScrollLink to="shopguard" spy={true} smooth={true}>
                    Shopguard
                  </ScrollLink>
                </li>
                <li>
                  <ScrollLink to="zebra" spy={true} smooth={true}>
                    Zebra
                  </ScrollLink>
                </li>
                <li>
                  <ScrollLink to="bizebra" spy={true} smooth={true}>
                    Bizebra
                  </ScrollLink>
                </li>
                <li>
                  <ScrollLink to="tsc" spy={true} smooth={true}>
                    TSC
                  </ScrollLink>
                </li> */}
              </ul>
              <hr className="catalog-delimitator" />
            </div>
          </div>
        </div>
        <p className={`catalog-page-title ${m0Auto}`}>
          <FormattedMessage id="catalog-title"/>
        </p>
        <p className="catalog-page-contacts"><FormattedMessage id="catalog-contacts-info"/></p>

        <div className="catalog-page-content">
          {productTypes.map(({ type }) => {
            return (
              <>
                <p className="section-title text-uppercase" id={type}>
                  {type}
                </p>
                <div className="section">
                  {data
                    .filter((item) => item.type === type)
                    .map((filteredItem) => (
                      <CatalogItem
                        item={filteredItem}
                        key={filteredItem.id}
                        className="catalog-item"
                      />
                    ))}
                </div>
              </>
            );
          })}
        </div>
      </div>
      <div className="catalog-footer">
        <div className="container">
          <p className="catalog-footer-title"><FormattedMessage id="catalog-footer-contacts-text"/></p>
          <p className="catalog-footer-number">+373 79 33 99 33</p>
          <div className="catalog-footer-email">sales@takeit.md</div>
        </div>
        <div className="fragment">
          <Link to="/takeit-admin">
            <button></button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CatalogPage;

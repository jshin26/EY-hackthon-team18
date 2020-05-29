import React from 'react';
import './SubHeader.scss';
import searchIcon from '../../asset/Search Icon.png';

import { Link, Switch, Route } from 'react-router-dom';
import ProductCard from '../ProductCard/ProductCard'
import Apple from '../ProductCard/Apple';


const SubHeader = () => {
    return (
        <section className="subheader">

            <div className="subheader--top">
                <Link to="/market" className="subheader__logo-container">
                    {/* <img className="subheader__logo" src="" alt="logo"/> */}Marketplace
                </Link>
    
                <form className="subheader__form">
                    <img className="subheader__search-icon" src={searchIcon} alt="searchIcon"/>
                    <input className="subheader__search" type="text"/>
                </form>
            </div>

            <div className="subheader--bottom">
                <Link to="/market/products" className="subheader__link product">
                    Products                    
                </Link>
                <Link to="/market/farm" className="subheader__link vendor">
                    Vendors
                </Link>
                <Link to="/market/favourites" className="subheader__link favourites">
                    Favourites
                </Link>
            </div>

            

        </section>

    )
}

export default SubHeader;
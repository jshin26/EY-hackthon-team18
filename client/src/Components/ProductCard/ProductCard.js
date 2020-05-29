import React from 'react';
import './ProductCard.scss';

import Apple from './Apple';
import { Link, Switch, Route } from 'react-router-dom';

import apple from '../../asset/food img/apple.jpg';
import carrot from '../../asset/food img/carrot.jpg';
import kale from '../../asset/food img/kale.jpg';
import onion from '../../asset/food img/onion-red.jpg';
import potatofingerling from '../../asset/food img/potato-fingerling.jpg';
import potatorusset from '../../asset/food img/potato-russet.jpg';
import sweetpotato from '../../asset/food img/sweet-potato.jpg';
import tomato from '../../asset/food img/tomato-1.jpg';


const ProductCard = () => {

    return (

        <React.Fragment>
            <div>

            </div>
            <section className="productcard">
                <div className="card-container--top">
        
                    <Link to='/market/apples' className="card apple">
                        <img src={apple} className="card__img" alt="apple"/>
                        <p className="card__text">Apples - Gala</p>
                    </Link>
                    <div className="card">
                        <img src={onion} className="card__img" alt="apple"/>
                        <p className="card__text">Onion</p>
                    </div>
                    <div className="card">
                        <img src={carrot} className="card__img" alt="apple"/>
                        <p className="card__text">Carrot</p>
                    </div>
                    <div className="card">
                        <img src={kale} className="card__img" alt="apple"/>
                        <p className="card__text">Kale</p>
                    </div>
        
                </div>
        
                <div className="card-container--bottom">
        
                    <div className="card">
                        <img src={tomato} className="card__img" alt="apple"/>
                        <p className="card__text">Tomato</p>
                    </div>
                    <div className="card">
                        <img src={potatofingerling} className="card__img" alt="apple"/>
                        <p className="card__text">Potatoes-Fingerling</p>
                    </div>
                    <div className="card">
                        <img src={potatorusset} className="card__img" alt="apple"/>
                        <p className="card__text">Potatoes-Russet</p>
                    </div>
                    <div className="card">
                        <img src={sweetpotato} className="card__img" alt="apple"/>
                        <p className="card__text">Sweet Potatoes</p>
                    </div>
        
                </div>
            </section>

            
        </React.Fragment>
        
    )
}

export default ProductCard;

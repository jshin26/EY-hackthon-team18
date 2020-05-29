import React from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';

import willowtree from '../../asset/logo.png'

const Header = () => {
    return (
        
        <header className="main-header">
            <div className = "main-header__content">
                <Link to="/" className = "main-header__logo"><h1 >mrkt</h1></Link>
                <div className = "main-header__user">
                    <img className="user-img" src={willowtree}/>
                    <div className = "user-name">
                        <p>Stew's Mart</p>
                    </div>
                </div>
                <nav className = "main-header__nav">
                    <ul className = "main-header__routes">
                        <Link to="/home" className="link"><li>home</li></Link>
                        <Link to="/market" className="link"><li>market</li></Link>
                        <Link to="/orders" className="link"><li>orders</li></Link>
                        <Link to="/messages" className="link"><li>messages</li></Link>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header;
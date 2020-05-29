import React from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="header">
<<<<<<< HEAD
            <div className = "main-header__content">

            <Link to="/" ><img className="main-header__logo" src="" /></Link>

            <div className = "main-header__user">

                <img className="user-img" src=""/>

                <div className = "user-name">
                    <p>Name</p>
                    <p>Ben</p>
                </div>

                <img className ="user-arrow" src="" />

            </div>

            <nav className = "main-header__nav">
                <ul className = "main-header__routes">
                    <Link to="/home"><li>home</li></Link>
                    <Link to="/market"><li>market</li></Link>
                    <Link to="/orders"><li>orders</li></Link>
                    <Link to="/messages"><li>messages</li></Link>
                </ul>
            </nav>
=======

            <div className = "main-header__content">

                <Link to="/" ><img className="main-header__logo" src="" /></Link>

                <div className = "main-header__user">

                    <img className="user-img" src=""/>

                    <div className = "user-name">
                        <p>Name</p>
                        <p>Ben</p>
                    </div>

                    <img className ="user-arrow" src="" />

                </div>

                <nav className = "main-header__nav">
                    <ul className = "main-header__routes">
                        <Link to="/home"><li>home</li></Link>
                        <Link to="/market"><li>market</li></Link>
                        <Link to="/orders"><li>orders</li></Link>
                        <Link to="/messages"><li>messages</li></Link>
                    </ul>
                </nav>
>>>>>>> 14c03c7321bc4ca4f05c8bceaf9c840a6b38fa36

            </div>
        </header>
    )
}

export default Header;
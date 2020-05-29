import React from 'react';
import './Header.scss';

import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="header">
            <Link to="/" ></Link>
        </header>
    )
}

export default Header;
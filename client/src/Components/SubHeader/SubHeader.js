import React from 'react';
import './SubHeader.scss';

import { Link } from 'react-router-dom';

const SubHeader = () => {
    return (
        <section className="subheader">

            <div className="subheader--top">
                <Link to="/market">
                    <img src="" alt=""/>
                </Link>
    
                <form>
                    <input type="text"></input>
                </form>
            </div>

            <div className="subheader--bottom">
                <Link to="/market/products">

                </Link>
                <Link to="/market/farm">
                    
                </Link>
                <Link to="/market/products">
                    
                </Link>
            </div>

        </section>

    )
}

export default SubHeader;
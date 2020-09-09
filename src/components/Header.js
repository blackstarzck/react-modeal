import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header>
            <h1>
                <Link to="/">
                    <img className="logo" src='/images/app_logo.png' alt="logo"/>
                </Link>
            </h1>
        </header>
    )
}

export default Header
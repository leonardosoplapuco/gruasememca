// Header.js
import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <div className="logo">
                <a href="/">Google Cloud</a>
            </div>
            <nav className="nav">
                <ul>
                    <li><a href="#products">Products</a></li>
                    <li><a href="#solutions">Solutions</a></li>
                    <li><a href="#pricing">Pricing</a></li>
                    <li><a href="#docs">Documentation</a></li>
                    <li><a href="#support">Support</a></li>
                </ul>
            </nav>
            <div className="auth-buttons">
                <a href="#sign-in" className="button">Sign in</a>
                <a href="#get-started" className="button button-primary">Get started</a>
            </div>
        </header>
    );
};

export default Header;

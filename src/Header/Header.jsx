import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header className="neon-header">
            <nav>
                <ul className="neon-navbar">
                    <li><a href="/">Home</a></li>
                    <li><a href="/">About Us</a></li>
                    <li><a href="/">Contact Us</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;


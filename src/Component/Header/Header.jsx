import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/"></Link>
                <Link to="/"></Link>
            </nav>
            
        </div>
    );
};

export default Header;
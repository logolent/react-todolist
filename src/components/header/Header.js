import React from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <div className="header">
            <p> <Link to="/"> Home </Link> </p>
            <p> <Link to="/registration"> Registration </Link> </p>
        </div>
    )
};

export default Header;
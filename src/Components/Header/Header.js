import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';

const Header = () => {
    return (
        <div>
            <h1 className="text-center pt-3 pb-2 text-success">Legend Football Club</h1>
            <p className="header-text small text-center text-primary fw-bold pb-3">TEAM OF ULTIMATE LEGENDS</p>
        </div>
    );
};

export default Header;
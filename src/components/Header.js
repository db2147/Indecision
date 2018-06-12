import React from 'react';

const Header = (props) => (
    // we wrap the h1 below, not the header so the background will extend all the way
    //  across the screen
    <div className="header">
        <div className="container">
            <h1 className="header__title">{props.title}</h1>
            {props.subtitle && <h2 className="header__subtitle">{props.subtitle}</h2>}
        </div>
        
    </div>
);

Header.defaultProps = {
    title: 'Indecision'
};

export default Header;
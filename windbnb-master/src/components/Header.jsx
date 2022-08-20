import React from 'react';
import FilterForm from './Filter.jsx';
import Logo from '../../logo.png';

const Header = (props) => {
    return (
        <div className="header">
            <img src={Logo} alt="" />
            <FilterForm dropSetter={props.dropSetter} />
        </div>
    );
};

export default Header;

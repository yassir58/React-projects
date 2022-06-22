import React from 'react'
import FilterForm from './Filter.jsx';
import Logo from '../../logo.png'



const Header = ()=>
{
    return (
        <div className='header'>
            <img src={Logo} alt="" />
        <FilterForm/>
        </div>
    );
}


export default Header;
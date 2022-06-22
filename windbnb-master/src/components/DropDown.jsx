import React from 'react'
import Guests from './Guests.jsx';
import HiddenForm  from './HiddenForm.jsx';
import Location  from './Location.jsx';


const DropDown = ()=>
{
    return (
        <div className="dropdown">
            <HiddenForm/>
            <div className="hidden_section">
                <Location/>
                <Guests/>
            </div>
        </div>
    );
}



export default DropDown;
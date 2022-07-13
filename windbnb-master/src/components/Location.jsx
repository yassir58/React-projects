import React from 'react'
import data from '../stays.json'



const Location = (props)=>
{
    return (
        <div className='location-list' hidden={props.displayed == 1 || props.displayed == -1 ? true :false}>
        <ul>
            <li>test 1</li>
            <li>test 1</li>
            <li>test 1</li>
        </ul>
        </div>
    );
}


export default Location;
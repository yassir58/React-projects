import React from 'react'
import data from '../stays.json'



const Location = (props)=>
{
    const list = [];
    
    props.list.map (elm=>{
        let item = <li>{elm.city}</li>;
        list.push (item);
    });
    return (
        <div className='location-list' hidden={props.displayed == 1 || props.displayed == -1 ? true :false}>
        <ul>
            {list}
        </ul>
        </div>
    );
}


export default Location;
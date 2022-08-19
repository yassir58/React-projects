import React from 'react'
import data from '../stays.json'



const Location = (props)=>
{
    const list = [];
    let uniList = [];
    props.list.map (elm=>{
        let item = <li>{elm.city} 
        <small>{` (${elm.country})`}</small>
        </li>;
        if (uniList.includes (elm.city) == false)
        {
            list.push (item);
            uniList.push (elm.city);
        }
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
import React from 'react';

const Location = (props) => {
    const list = [];
    let uniList = [];
    props.list.map((elm) => {
        let item = (
            <li>
                {elm.city}
                <small>{` (${elm.country})`}</small>
            </li>
        );
        if (uniList.includes(elm.city) == false) {
            list.push(item);
            uniList.push(elm.city);
        }
    });
    return (
        <div className="location-list"  style={{visibility:props.displayed == 1 || props.displayed == -1 ? "hidden": "initial"}} >
            
            <h2>Available Locations</h2>
            <ul>{list.length != 0 ? list : "no available locations !"}</ul>
        </div>
    );
};

export default Location;

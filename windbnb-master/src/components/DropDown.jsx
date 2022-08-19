import React, { useState } from 'react'
import Location  from './Location.jsx';
import { search, minus, plus } from '../utils/font.js';
import {updateAdValue, updateChldValue, locationFilter, guestFilter} from '../utils/functions.js'



function handle_location_update (value, props)
{
    const rsArr = locationFilter (props.dataState, value);
    props.setState (rsArr);
}


function filter_update  (inputType, props,adultsState, childrenState, locationState, setLocation, flag)
{
    let resArr;
    if (inputType)
    {
        resArr = guestFilter (props.dataProp, (parseInt (adultsState) + parseInt (childrenState)));
        props.setState (resArr);
        setLocation ("");
    }
    else
    {
        resArr = locationFilter (props.dataProp, locationState);
        props.setState (resArr);
        setLocation ("");
    }
    if (flag == 1)
    {
        props.dropSetter (0);

    }
}

const DropDown = (props)=>
{
    const [inputType, setInputType] = useState (-1);
    const [locationState, setLocation] = useState ("");
    const [adultsState, setAdults] = useState ("0");
    const [childrenState, setChildren] = useState ("0");

    return (
        <div>
            <div className="dropdown" style={{display:props.dropState?"block":"none"}}>

            <form id="hiddenForm" action="" onSubmit={(e)=>{

                e.preventDefault ();
                    }}>
                <div className="inputArea">
                   <label htmlFor="location_hidden">Location</label>
                    <input id="location_hidden" className="location-hidden" placeholder="add location" type="text" value={locationState}
                    onFocus={()=>{
                        setInputType (0);
                    }}
                    onChange={(e)=>
                    {
                        setLocation (e.target.value);
                        handle_location_update (e.target.value, props);
                    }}
                    />
                </div>
                <div className="inputArea">
                    <label htmlFor="guest_hidden">Guests</label>
                    <input id="guest_hidden"  className="guests-hidden" placeholder="add guests" type="text"
                    onFocus={()=>{
                        setInputType (1);
                    }}
                    value=''
                    />
                </div>
               <div className="btnArea">
               <button className="hidden-btn" onClick={()=>{
                filter_update (inputType, props, adultsState, childrenState, locationState, setLocation, 1);
               }}>{search}</button>
               </div>
            </form>
        <div className="hidden_section">
            <Location displayed ={inputType} list={props.dataState}/>
            {/* Guests form <GUESTS/> */}
        </div> 
        </div>
        </div>
      
    );
}

export default DropDown;
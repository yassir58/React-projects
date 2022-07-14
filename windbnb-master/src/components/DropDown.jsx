import React, { useState } from 'react'
import Guests from './Guests.jsx';
import Location  from './Location.jsx';
import { search, minus, plus } from '../utils/font.js';
import {updateAdValue, updateChldValue, locationFilter, guestFilter} from '../utils/functions.js'




function handle_location_update (value, props)
{
    const rsArr = locationFilter (props.dataState, value);
    props.setState (rsArr);
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
                    onFocus={(e)=>{
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
                    onFocus={(e)=>{
                        setInputType (1);
                    }}
                    value=''
                    />
                </div>
               <div className="btnArea">
               <button className="hidden-btn" onClick={(e)=>{
                let resArr;
                if (inputType)
                {
                    resArr = guestFilter (props.dataProp, (parseInt (adultsState) + parseInt (childrenState)));
                    console.log (adultsState);
                    console.log (childrenState);
                    console.table (resArr);
                    props.setState (resArr);
                    setLocation ("");
                    props.dropSetter (0);
                }
                else
                {
                    resArr = locationFilter (props.dataProp, locationState);
                    console.log(locationState);
                    console.table (resArr);
                    props.setState (resArr);
                    setLocation ("");
                    props.dropSetter (0);
                }
               }}>{search}</button>
               </div>
            </form>
        <div className="hidden_section">
            <Location displayed ={inputType} list={props.dataState}/>
            <div className="guestForm" hidden={inputType == 0 || inputType == -1 ?true:false} >
            <div className="guestArea adultArea" >
                <h3>Adults</h3>
                <small>Ages 13 or above</small>
                <div className="guest_btn_area">
                    <button className='plusBtn' onClick={(e)=>{
                        let res = updateAdValue (0);
                        setAdults (String (res));
                        }}>{plus}</button>
                    <span id='AdultsCount' >{adultsState}</span>
                    <button className='minusBtn' onClick={(e)=>{
                        let res = updateAdValue (1);
                        setAdults (String (res));
                        }}>{minus}</button>
                </div>
            </div>
            <div className="guestArea childrenArea">
                <h3>Children</h3>
                <small>Ages 2-12</small>
                {<div className="guest_btn_area">
                    <button className='plusBtn' onClick={()=>{
                        let res = updateChldValue (0);
                        setChildren (String (res));
                    }}>{plus}</button>
                    <span id='ChildrenCount'>{childrenState}</span>
                    <button className='minusBtn' onClick={()=>{
                        let res = updateChldValue (1);
                        setChildren (String (res));
                    }}>{minus}</button>
                </div> 
                }
            </div>
        </div>
        </div>
        </div>
        </div>
    );
}

export default DropDown;
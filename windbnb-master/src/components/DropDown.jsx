import React, { useState } from 'react'
import Guests from './Guests.jsx';
import Location  from './Location.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch , faPlus, faMinus} from '@fortawesome/free-solid-svg-icons'
import data from '../stays.json'


const search = <FontAwesomeIcon icon={faSearch} color='white' transform="shrink-1" />
const minus = <FontAwesomeIcon icon={faMinus} color='#333333' transform="shrink-1" />
const plus = <FontAwesomeIcon icon={faPlus} color='#333333' transform="shrink-1" />


function updateAdult ()
{
    let value = 0;
    return (op)=>{
        if (op == 1 && value > 0)
            value--;
        else if (op == 0)
            value++;
        return value;
    }
}

function updateChild ()
{
    let value = 0;
    return (op)=>{
        if (op == 1 && value > 0)
            value--;
        else if (op == 0)
            value++;
        return value;
    }
}

const updateAdValue =  updateAdult();
const updateChldValue = updateChild ();

const DropDown = ()=>
{
    const [inputType, setInputType] = useState (-1);
    const [locationState, setLocation] = useState ("");
    const [adultsState, setAdults] = useState ("0");
    const [childrenState, setChildren] = useState ("0");


    return (
        <div>
            <div className="dropdown">

            <form id="hiddenForm" action="" onSubmit={(e)=>{

                e.preventDefault ();
                    }}>
                <div className="inputArea">
                   <label htmlFor="location_hidden">Location</label>
                    <input id="location_hidden" className="location-hidden" placeholder="add location" type="text"
                    onFocus={(e)=>{
                        setInputType (0);
                    }}
                    onChange={(e)=>
                    {
                        setLocation (e.target.value);
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
                if (inputType)
                    console.log(locationState);
                else
                {
                    console.log (guestsStateAdults);
                    console.log (guestsStatechildren);
                }
               }}>{search}</button>
               </div>
            </form>
        <div className="hidden_section">
            <Location displayed ={inputType}/>
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
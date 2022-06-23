import React, { useState } from 'react'
import Guests from './Guests.jsx';
import Location  from './Location.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import data from '../stays.json'


const search = <FontAwesomeIcon icon={faSearch} color='white' transform="shrink-1" />


const DropDown = ()=>
{
    const [renderedLocation, setRenderedLocation] = useState ("");
    const [renderedGuests, setRenderedGuests] = useState ("");
    const [inputType, setInputType] = useState (0);
    const [locationState, setLocation] = useState ("");
    const [guestsStateAdults, setAdults] = useState ("");
    const [guestsStatechildren, setChildren] = useState ("");

    const GuestsForm = (
        <form action="">
        <div className="number-input-area">
        <label htmlFor="adult">adults:</label>
        <input type="number" name="" id="adult" onChange={(e)=>
        {
            setAdults (e.target.value);
        }}
        value={guestsStateAdults}
        />
        </div>
        <div className="number-input-area">
        <label htmlFor="children">children:</label>
        <input type="number" name="" id="children" onChange={(e)=>
        {
            setChildren (e.target.value);
        }} 
        value={guestsStatechildren}
        />
        </div>
    </form>
    );

    return (
        <div className="dropdown">
            <div className="hiddenFormsection">
            <form id="hiddenForm" action="" onSubmit={(e)=>{
                
                e.preventDefault ();
                console.log (e.target.value)}}>
                <div className="inputArea">
                   <label htmlFor="location_hidden">Location</label>
                    <input id="location_hidden" className="location-hidden" placeholder="add location" type="text" 
                    onFocus={(e)=>{
                        setRenderedGuests (<div className="emptyDiv"></div>);
                        setRenderedLocation (<Location/>);
                        setInputType (1);
                    }}
                    onChange={(e)=>
                    {
                        setLocation (e.target.value);
                    }}
                    />
                </div>
                <div className="inputArea">
                    <label htmlFor="guest_hidden">Guests</label>
                    <input id="guest_hidden" className="guests-hidden" placeholder="add guests" type="text" 
                    onFocus={(e)=>{
                        setRenderedLocation (<div className="emptyDiv"></div>);
                        setRenderedGuests (GuestsForm);
                        setInputType (0);
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
        </div>
        <div className="hidden_section">
                {renderedLocation}
                {renderedGuests}
                <div className='emptyDiv'>

                </div>
        </div>
        </div>
    );
}



export default DropDown;
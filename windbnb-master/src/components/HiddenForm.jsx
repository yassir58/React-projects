import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const search = <FontAwesomeIcon icon={faSearch} color='white' transform="shrink-1" />




const HiddenForm  = ()=>
{
    return (
        <div className="hiddenFormsection">
            <form id="hiddenForm" action="">
                <div className="inputArea">
                   <label htmlFor="location_hidden">Location</label>
                    <input id="location_hidden" className="location-hidden" placeholder="add location" type="text" />
                </div>
                <div className="inputArea">
                    <label htmlFor="guest_hidden">Guests</label>
                    <input id="guest_hidden" className="guests-hidden" placeholder="add guests" type="text" />
                </div>
               <div className="btnArea">
               <button className="hidden-btn">{search}</button>
               </div>
            </form>
        </div>
    );
}

export default HiddenForm ;
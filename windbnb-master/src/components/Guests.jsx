import React from 'react'





const Guests = (props)=>
{
    return (
        <div className="guestForm" hidden={inputType == 0 || inputType == -1 ?true:false} >
            <div className="guestArea adultArea" >
                <h3>Adults</h3>
                <small>Ages 13 or above</small>
                <div className="guest_btn_area">
                    <button className='plusBtn' onClick={()=>{
                        let res = updateAdValue (0);
                        setAdults (String (res));
                        filter_update (inputType, props, adultsState, childrenState, locationState, setLocation, 0);
                        }}>{plus}</button>
                    <span id='AdultsCount' >{adultsState}</span>
                    <button className='minusBtn' onClick={()=>{
                        let res = updateAdValue (1);
                        setAdults (String (res));
                        filter_update (inputType, props, adultsState, childrenState, locationState, setLocation, 0);
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
                        filter_update (inputType, props, adultsState, childrenState, locationState, setLocation, 0);
                    }}>{plus}</button>
                    <span id='ChildrenCount'>{childrenState}</span>
                    <button className='minusBtn' onClick={()=>{
                        let res = updateChldValue (1);
                        setChildren (String (res));
                        filter_update (inputType, props, adultsState, childrenState, locationState, setLocation, 0);
                    }}>{minus}</button>
                </div> 
                }
            </div>
        </div>
    );
}


export default Guests;
import React from 'react';
import { updateAdValue, updateChldValue, filter_update } from '../utils/functions.js';
import { minus, plus } from '../utils/font.js';

const Guests = (props) => {
    return (
        <div className="guestForm "  style={{visibility:props.inputType == 0 || props.inputType == -1 ? "hidden" : "initial"}}>
            <div className="guestArea adultArea">
                <h3>Adults</h3>
                <small>Ages 13 or above</small>
                <div className="guest_btn_area">
                    <button
                        className="plusBtn"
                        onClick={() => {
                            let res = updateAdValue(0);
                            props.setAdults(String(res));
                            filter_update(
                                props.inputType,
                                props.parentProps,
                                props.adultsState,
                                props.childrenState,
                                props.locationState,
                                props.setLocation,
                                0,
                                props.setChildren,
                                props.setAdults
                            );
                        }}
                    >
                        {plus}
                    </button>
                    <span id="AdultsCount">{props.adultsState}</span>
                    <button
                        className="minusBtn"
                        onClick={() => {
                            let res = updateAdValue(1);
                            props.setAdults(String(res));
                            filter_update(
                                props.inputType,
                                props.parentProps,
                                props.adultsState,
                                props.childrenState,
                                props.locationState,
                                props.setLocation,
                                0,
                                props.setChildren,
                                props.setAdults
                            );
                        }}
                    >
                        {minus}
                    </button>
                </div>
            </div>
            <div className="guestArea childrenArea">
                <h3>Children</h3>
                <small>Ages 2-12</small>
                {
                    <div className="guest_btn_area">
                        <button
                            className="plusBtn"
                            onClick={() => {
                                let res = updateChldValue(0);
                                props.setChildren(String(res));
                                filter_update(
                                    props.inputType,
                                    props.parentProps,
                                    props.adultsState,
                                    props.childrenState,
                                    props.locationState,
                                    props.setLocation,
                                    0,
                                    props.setChildren,
                                    props.setAdults
                                );
                            }}
                        >
                            {plus}
                        </button>
                        <span id="ChildrenCount">{props.childrenState}</span>
                        <button
                            className="minusBtn"
                            onClick={() => {
                                let res = updateChldValue(1);
                                props.setChildren(String(res));
                                filter_update(
                                    props.inputType,
                                    props.parentProps,
                                    props.adultsState,
                                    props.childrenState,
                                    props.locationState,
                                    props.setLocation,
                                    0,
                                    props.setChildren,
                                    props.setAdults
                                );
                            }}
                        >
                            {minus}
                        </button>
                    </div>
                }
            </div>
        </div>
    );
};

export default Guests;

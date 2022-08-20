import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const element = <FontAwesomeIcon icon={faStar} color="#EB5757" transform="shrink-1" />;

const Card = (props) => {
    return (
        <div className="card">
            <img src={props.img} alt="prop_mage" />
            <div className="card_header">
                <small className="type">
                    {props.type}
                    {props.beds ? <span className="beds"> {props.beds} </span> : ''}
                </small>
                <span className="rating">
                    {element} {props.rating}
                </span>
            </div>
            <h6>{props.title}</h6>
        </div>
    );
};

export default Card;

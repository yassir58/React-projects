import React from 'react'
import { useState } from 'react'
import Card from './Card.jsx'
import toggle_btn_state from '../utils/functions'


const CardList = (props)=>
{
    let list = [];
    let temp = props.dataState;
    let length = props.dataState.length;

    {
        temp.forEach (elm=>{
            let item = <Card img={elm.photo} title={elm.title} rating={elm.rating} type={elm.type} beds={elm.beds}/>;
            list.push (item);
        })
    }
    return (
        <div classList='layout'>
            <div className="card-intro">
                <h1>Stays in finland</h1>
                <small>{`+${length} Stays`}</small>
            </div>
             <div className='cardList'>
                {list}
            </div>
        </div>
    );
}


export default CardList 
import React from 'react'
import { useState } from 'react'
import Card from './Card.jsx'
import toggle_btn_state from '../utils/functions'


const CardList = (props)=>
{
    let list = [];
    let first = 8;
    const [listSate, setListState] = useState (first);
    let temp = props.dataProp.slice(0,listSate);
    let length = props.dataProp.length - temp.length;
    console.log (length);
    console.table (props.dataState);
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
                <button className='btn' onClick={()=>{setListState(toggle_btn_state(listSate, length, first))}}>{`+${length} stays`}</button>
            </div>
             <div className='cardList'>
                {list}
            </div>
        </div>
    );
}


export default CardList 
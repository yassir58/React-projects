import React from 'react'
import { useState } from 'react'
import data from '../stays.json'
import Card from './Card.jsx'
import toggle_btn_state from './functions'


const CardList = ()=>
{
    let list = [];
    let first = 8;
    const [listSate, setListState] = useState (first);
    let temp = data.slice(0,listSate);
    let length = data.length - temp.length;
    console.log (length);
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
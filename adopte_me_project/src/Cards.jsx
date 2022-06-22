import React from 'react';
//import ReactDOM from 'react-dom';
import data from './data'

const Card = (props)=>
{
    return (
        <div className='card'>
            <h1>{props.title}</h1>
            <h2>{props.name}</h2>
            <p>{props.breed}</p>
            <small>{props.price}</small>
        </div>
    );
}


const CardsLayout  = ()=>
{
    const cardList = data.map (item=>{<Card title={item.title} name={item.name} price={item.price} breed={item.breed} />});
    return (cardList);
};

export default {Card ,  CardsLayout};

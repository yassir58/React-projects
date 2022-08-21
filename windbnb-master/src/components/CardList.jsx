import React from 'react';
import Card from './Card.jsx';
import { useEffect } from 'react';
import data from '../stays.json'


const IntroCard = () => {
    return (
        <div className="card-intro">
            <h1>Stays in finland</h1>
            <small>{`+${length} Stays`}</small>
        </div>
    );
};

const NoResult = (props) => {
    return (
        <div className="noResult">
            <p> Sorry no no results for your search</p>
            <button onClick={
                ()=>
                {
                        // useEffect(() => {
                        //     // Good!
                        //     // 
                        //     console.log ("hello world test");
                        //   }, [props]) ;
                        props.setState (data);
                        console.log ("hello world");
                }
            } >
                go back
            </button>
        </div>
    );
};

const CardList = (props) => {
    let list = [];
    let temp = props.dataState;
    
    temp.forEach((elm) => {
        let indx = 0;
        let item = <Card key={indx++} img={elm.photo} title={elm.title} rating={elm.rating} type={elm.type} beds={elm.beds} />;
        list.push(item);
    });
    return (
        <div classList="layout">
            {list.length > 0 ? <IntroCard /> : ''}
            <div className="cardList">{list.length > 0 ? list : <NoResult setState={props.setState}/>}</div>
        </div>
    );
};

export default CardList;

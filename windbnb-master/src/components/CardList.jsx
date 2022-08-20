import React from 'react';
import Card from './Card.jsx';


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
            <button
                // onClick={
                //     // props.setList (1)
                // }
            >
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
            <div className="cardList">{list.length > 0 ? list : <NoResult />}</div>
        </div>
    );
};

export default CardList;

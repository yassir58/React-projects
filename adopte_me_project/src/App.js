import React from 'react';
import ReactDOM from 'react-dom';
//import { render } from 'react-dom';
//import {Card, CardsLayout} from './Cards.jsx'
import data from './data'
import SearchForm from './searchParams'

const App = ()=>
{

    return (
    <div id="app">
        <h1>adopte me</h1>
        <SearchForm />
    </div>
    );
};




ReactDOM.render (<App/>, document.getElementById ("root"));
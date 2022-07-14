import React from 'react'
import ReactDOM from 'react-dom'
import CardList from './components/CardList.jsx'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import DropDown from './components/DropDown.jsx'
import { useState } from 'react/cjs/react.production.min.js'
import data from './stays.json'


const App =  ()=>
{
    const initialList = [];
    const [list, setList] = React.useState(initialList);


    return (
        <div className='App'>
            <DropDown dataProp={data}  dataState={list} setState={setList} />
            <Header/>
            <div className='main-section'>
                <CardList  dataProp={data} dataState={list} setState={setList}/>
            </div>
            <Footer />
        </div>
    );
}

ReactDOM.render (<App/>, document.getElementById ("root"));
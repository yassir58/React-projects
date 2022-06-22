import React from 'react'
import ReactDOM from 'react-dom'
import CardList from './components/CardList.jsx'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import DropDown from './components/DropDown.jsx'




const App =  ()=>
{
    return (
        <div className='App'>
            <DropDown/>
            <Header/>
            <div className='main-section'>
                <CardList />
            </div>
            <Footer />
        </div>
    );
}



ReactDOM.render (<App/>, document.getElementById ("root"));
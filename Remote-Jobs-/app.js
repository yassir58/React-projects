
import { useEffect, useState } from 'react';
import {render} from 'react-dom'
import Main from './components/MainComponent';
import initData from './data';
import loadData from './getData.js';


const DEFAULT_END_POINT = "https://remotive.io/api/remote-jobs?limit=30";


loadData (DEFAULT_END_POINT);
console.log (initData)

const App = ()=>
{
    const [initState, setInitState] = useState (initData);
    return (<div>
        <Main  initData={initState}/>
    </div>);
}


render ( <App/>, document.getElementById ("root"));
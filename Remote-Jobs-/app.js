
import { useEffect, useState } from 'react';
import {render} from 'react-dom'
import Main from './components/MainComponent';
import initData from './data';
import loadData from './getData.js';


const limit = 30;
const DEFAULT_END_POINT = "https://remotive.com/api/remote-jobs?limit=" + limit;


loadData (DEFAULT_END_POINT);
console.log (initData)

const App = ()=>
{
  
    const [initState, setInitState] = useState (initData);
   
    return (<div>
        <Main  initData={initState} />
    </div>);
}


render ( <App/>, document.getElementById ("root"));
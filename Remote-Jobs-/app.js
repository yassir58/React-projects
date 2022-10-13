
import { useEffect, useState } from 'react';
import {render} from 'react-dom'
import Main from './components/MainComponent';
import initData from './data';
import loadData from './getData.js';


const limit = 30;
const DEFAULT_END_POINT = "https://remotive.com/api/remote-jobs?limit=" + limit;


/// this applicatoin is for the purpose of learning react states and props
// this data fetching function is not effecient way to fetch data in react
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

import { useEffect, useState } from 'react';
import {render} from 'react-dom'
import Main from './components/MainComponent';

const DEFAULT_END_POINT = "https://remotive.io/api/remote-jobs?limit=30";

const App = ()=>
{
	
    return (<div>
        <Main/>
    </div>);
}


render ( <App/>, document.getElementById ("root"));
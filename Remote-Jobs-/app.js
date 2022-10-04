
import {render} from 'react-dom'
import Main from './components/MainComponent';
const App = ()=>
{
    return (<div>
        <Main/>
    </div>);
}


render ( <App/>, document.getElementById ("root"));
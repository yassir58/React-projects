import { useState } from "react";
import { getSearchData } from "../getData";
const SEARCH_END_POINT = "";




const Form = (props)=>
{
    const [searchInput, setSearchInput] = useState ('');
    const handleInput = (e)=>
    {
        e.preventDefault ();

        //do something with the state
        console.log (searchInput);
        getSearchData ()
        //props.setMode (2);
        // clear input
        setSearchInput('');
    }
    return (
        <div className='FormComponent'>
          <form action="" onSubmit={handleInput} className="Form">
            <div className="InputArea">
            <input type="text"  placeholder="Title, companies, expertise or benefits" onChange={(e)=>setSearchInput(e.target.value)} value={searchInput}/>
            </div>
                <div className="BtnArea">
                    <button type="submit" >search</button>
                </div>
            </form>
        </div>
    );
}


export default Form;
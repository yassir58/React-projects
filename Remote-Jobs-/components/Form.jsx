import { useState } from "react";
import { searchData } from "../data";
import { getSearchData } from "../getData";
const SEARCH_END_POINT = "https://remotive.com/api/remote-jobs?search=";




const Form = (props)=>
{
    const [searchInput, setSearchInput] = useState ('');
    const [inputError, setInputError] = useState (0);
    const handleInput = (e)=>
    {
        e.preventDefault ();

        //do something with the state
        if (searchInput == '')
            setInputError (1);
        else
        {
            props.setMode (2);
            console.log (searchInput);
            props.requestSetter (searchInput);
            getSearchData (SEARCH_END_POINT, searchInput, props.searchSetter);
            // clear input
            setSearchInput('');
        }
    }
    return (
        <div className='FormComponent'>
          <form action="" onSubmit={handleInput} className="Form">
            <div className="InputArea">
            <input type="text" className={inputError?"ErrorInput":"NormalInput"}  placeholder={inputError?"Invalid input !":"Title, companies, expertise or benefits"} onChange={(e)=>{setSearchInput(e.target.value), setInputError(0)}} value={searchInput}/>
            </div>
                <div className="BtnArea">
                    <button type="submit" >search</button>
                </div>
            </form>
        </div>
    );
}


export default Form;
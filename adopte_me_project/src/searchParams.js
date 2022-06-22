import React from 'react';
import { useState } from 'react';

const SearchForm = ()=>
{
   const [location, setLocation] = useState ("");
    return (
        <div className='search-params'>
            <form onSubmit={(e)=>setLocation (e.target.value)}>
                <label htmlFor='location'>Location {location}
                <input id="location" value={location} placeholder='Location' onChange={(e)=>setLocation (e.target.value)}/>
                </label>
                <button>submit</button>
            </form>
        </div>
    );
} 



export default SearchForm;
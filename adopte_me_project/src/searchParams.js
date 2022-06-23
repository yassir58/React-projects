import React from 'react';
import { useState } from 'react';


const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];

const SearchForm = ()=>
{
   const [location, setLocation] = useState ("");
   const [animal, setAnimals] = useState ("test");
    return (
        <div className='search-params'>
            <form onSubmit={(e)=>setLocation (e.target.value)}>
                <label htmlFor='location'>Location {location}
                <input id="location" value={location} placeholder='Location' onChange={(e)=>setLocation (e.target.value)}/>
                </label>
                <label htmlFor="animal">
  Animal
  <select
    id="animal"
    value={animal}
    onChange={(e) => {
      setAnimal(e.target.value);
      setBreed("");
    }}
    onBlur={(e) => {
      setAnimal(e.target.value);
      setBreed("");
    }}
  >
    <option />
    {ANIMALS.map((animal) => (
      <option key={animal} value={animal}>
        {animal}
      </option>
    ))}
  </select>
</label>
                <button>submit</button>
            </form>
        </div>
    );
} 



export default SearchForm;
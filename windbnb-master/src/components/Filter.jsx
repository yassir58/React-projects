import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import data from '../stays.json'

const search = <FontAwesomeIcon icon={faSearch} color='#F66B0E' transform="shrink-1" />

function drop(e, props)
{
    e.preventDefault ();
    props.dropSetter (1);
}

const FilterForm  = (props)=>
{
    return (
        <div>
            <form className='filterForm'>
                <input id="location" value={`${data[0].city}, ${data[0].country}`} type="text" />
                <input id="guests" placeholder='guests' type="text" onClick={(e)=>{drop (e, props)}}/>
                <button onClick={(e)=>{drop (e, props)}}> {search} </button>
            </form>
        </div>
    );
}

export default FilterForm;
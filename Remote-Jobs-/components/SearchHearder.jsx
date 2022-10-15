


const SearchHeader = (props)=>
{
    return (
        <div className="SearchHeader">
            <h2>Your Search Results</h2>
            <a href="" onClick={(e)=>{e.preventDefault (), props.setMode(0)}}>back to search</a>
        </div>
    );
}

export default SearchHeader;
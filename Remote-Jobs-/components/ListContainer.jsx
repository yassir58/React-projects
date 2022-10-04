import FilterContainer from "./FilterConteiner";
import CardList from "./CardList";

const ListContainer = ()=>
{
    return (
        <div className="ListContainer">
         <FilterContainer/>
         <CardList/>
        </div>
    );
}


export default ListContainer;
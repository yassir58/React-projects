import FilterContainer from "./FilterConteiner";
import CardList from "./CardList";

const ListContainer = (props)=>
{
    return (
        <div className="ListContainer">
         <FilterContainer/>
         <CardList cardList={props.initList}/>
        </div>
    );
}


export default ListContainer;
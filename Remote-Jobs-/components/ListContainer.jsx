import { useState } from "react";
import FilterContainer from "./FilterConteiner";
import CardList from "./CardList";

const ListContainer = (props)=>
{
    const [category, setCategory] = useState ("");
    const [partTime, setPart] = useState (0);
    const [fullTime, setFull] = useState (0);
    const [contract, setContract] = useState (0);
    const [keyword, setKeyword] = useState ("");

    return (
        <div className="ListContainer">
         <FilterContainer setCategory={setCategory} setFull={setFull} setPart={setPart} setContract={setContract} setKeyword={setKeyword}/>
         <CardList cardList={props.initList} category={category} setCategory={setCategory} full={fullTime} part={partTime} contract={contract} keyword={keyword} setItem={props.setItem} setMode={props.setMode}/>
        </div>
    );
}


export default ListContainer;
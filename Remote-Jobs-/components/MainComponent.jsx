
import Footer from "./Footer";
import Header from "./Header";
import FormContainer from "./FormContainer";
import ListContainer from "./ListContainer";
import DetailsPage from "./DetailsPage";
import { useState } from "react";
const Main = (props)=>
{

    const [mode, setMode] = useState (0);
    const [item, setItem] = useState ({});
    const [searchRequest, setSearchRequest] = useState ("");
    const [searchState, setSearch] = useState ([]);
    const homePage = [ <FormContainer searchSetter={setSearch}   setMode={setMode} requestSetter={setSearchRequest}/> , <ListContainer initList={props.initData} setItem={setItem} setMode={setMode} mode={mode} request={searchRequest}/>];
    const searchPage = [ <FormContainer  searchSetter={setSearch} setMode={setMode} requestSetter={setSearchRequest} /> , <ListContainer initList={searchState} setItem={setItem} setMode={setMode} mode={mode} request={searchRequest}/>];
    const details = <DetailsPage item={item} setMode={setMode}/>;
    let rendered;

    if (mode == 0)
        rendered = homePage;
    else if (mode == 1)
        rendered = details;
    else
    {
        console.log ("search request", searchRequest);
        console.log ("search data => ", searchState);
        rendered = searchPage;
    }
    return (
        <div className="MainSection">
            <Header/>
            {rendered}
            <Footer/>
        </div>
    );
}

export default Main;
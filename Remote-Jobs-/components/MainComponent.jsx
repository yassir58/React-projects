
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
    const homePage = [ <FormContainer  setMode={setMode}/> , <ListContainer initList={props.initData} setItem={setItem} setMode={setMode} mode={mode}/>];
    const details = <DetailsPage item={item} setMode={setMode}/>;
    let rendered;

    if (mode == 0)
        rendered = homePage;
    else if (mode == 1)
        rendered = details;
    return (
        <div className="MainSection">
            <Header/>
            {rendered}
            <Footer/>
        </div>
    );
}

export default Main;
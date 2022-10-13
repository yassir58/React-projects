
import Footer from "./Footer";
import Header from "./Header";
import FormContainer from "./FormContainer";
import ListContainer from "./ListContainer";
const Main = (props)=>
{
    return (
        <div className="MainSection">
            <Header/>
            <FormContainer />
            <ListContainer initList={props.initData} />
            <Footer/>
        </div>
    );
}

export default Main;
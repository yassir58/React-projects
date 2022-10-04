
import Footer from "./Footer";
import Header from "./Header";
import FormContainer from "./FormContainer";
import ListContainer from "./ListContainer";
const Main = ()=>
{
    return (
        <div className="MainSection">
            <Header/>
            <FormContainer/>
            <ListContainer/>
            <Footer/>
        </div>
    );
}

export default Main;
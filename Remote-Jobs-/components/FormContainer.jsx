import Form from "./Form";



const FormContainer = (props)=>
{
    return (
        <div className="FormContainer">
           <Form  setMode={props.setMode} searchSetter={props.searchSetter} requestSetter={props.requestSetter}/>
        </div>
    );
}


export default FormContainer;


import Form from "./Form";



const FormContainer = (props)=>
{
    return (
        <div className="FormContainer">
           <Form  setMode={props.setMode} />
        </div>
    );
}


export default FormContainer;






const NextPage = (props)=>
{
    return (
        <div className="NextPage">
            <button className="NextBtn" onClick={()=>{props.startSetter(0), props.endSetter(5)}}>1</button>
            <button className="NextBtn" onClick={()=>{props.startSetter(5), props.endSetter(11)}}>2</button>
            <button className="NextBtn" onClick={()=>{props.startSetter(10), props.endSetter(16)}}>3</button>
            <button className="NextBtn" onClick={()=>{props.startSetter(15), props.endSetter(21)}}>4</button>
            <button className="NextBtn" onClick={()=>{props.startSetter(20), props.endSetter(26)}}>5</button>
            <button className="NextBtn" onClick={()=>{props.startSetter(25), props.endSetter(30)}}>6</button>
        </div>
    );
}


export default NextPage;
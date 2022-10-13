


const JobCard = (props)=>
{
    return (
        <div className="JobCard" >
            <div className="JobBanner" data-test-id={props.key}>
                <img src={props.url} alt="test" />
            </div>
            <div className="JobInfo">
                <div className="jobHeader">
					<h5>{props.companyName}</h5>
                	<h3> {props.jobTitle}</h3>
				</div>
				<div className="ExtraInfo">
                   <div className="typeArea">
                   <span className="Genre"> <small>{props.jobType}</small> </span>
                   <a href="" className="detailsLink" id={props.key} onClick={(e)=>{e.preventDefault (),  console.log (props.item), props.setItem(props.item), props.setMode(1)}}>see details ..</a>
                   </div>
                    <div className="LocationTime">
                        <small>{props.location.length > 15 ? props.location.substring (0, 15) + '..': props.location }</small>
                        <small>{props.time}</small>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default JobCard;


                
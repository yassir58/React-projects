


const JobCard = (props)=>
{
    return (
        <div className="JobCard" id={props.id}>
            <div className="JobBanner">
                <img src={props.url} alt="test" />
            </div>
            <div className="JobInfo">
                <div className="jobHeader">
					<h5>{props.companyName}</h5>
                	<h3> {props.jobTitle}</h3>
				</div>
				<div className="ExtraInfo">
                    <span className="Genre"> <small>{props.jobType}</small> </span>
                    <div className="LocationTime">
                        <small>{props.location}</small>
                        <small>{props.time}</small>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default JobCard;


                
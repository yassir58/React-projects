


const JobCard = ()=>
{
    return (
        <div className="JobCard">
            <div className="JobBanner">
                <img src="https://openai.com/content/images/2022/05/twitter-1.png" alt="test" />
            </div>
            <div className="JobInfo">
                <div className="jobHeader">
					<h5> company x</h5>
                	<h3> Front-end Software engineer</h3>
				</div>
				<div className="ExtraInfo">
                    <span className="Genre"> <small>full-time</small> </span>
                    <div className="LocationTime">
                        <small>casablanca</small>
                        <small>5 days ago</small>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default JobCard;


                
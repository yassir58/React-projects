



const handleChecked = (checked, setState)=>{
	if (checked)
		setState (1);
	else
		setState (0);
}

const FilterContainer  = (props)=>
{

	
    return (
        <div className="FilterContainer">
			<div className="fullTimeCheck">
			<input type="checkbox" id="fullTime" onChange={(e)=>{handleChecked (e.target.checked, props.setFull)}}></input>
			<label htmlFor="fullTime">Full time</label>
			<input type="checkbox" id="partTime" onChange={(e)=>{handleChecked (e.target.checked, props.setPart)}}></input>
			<label htmlFor="partTime">Part time</label>
			<input type="checkbox" id="contract" onChange={(e)=>{handleChecked (e.target.checked, props.setContract)}}></input>
			<label htmlFor="contract">Contract</label>
			</div>
			<div className="locationFilter">
				<input type="text" className="locationInput" placeholder="search for specefic company"></input>
				<form action="" className="radioForm">
					<div className="radioArea">
						<input type="radio" id="Software Development"  name="category"  onChange={(e)=>{props.setCategory(e.target.id)}}/>
						<label htmlFor="Software Development">Software Development</label>
					</div>
					<div className="radioArea">
						<input type="radio" id="Customer Service" name="category" onChange={(e)=>{props.setCategory(e.target.id)}}/>
						<label htmlFor="Customer Service" >Customer Service</label>
					</div>
					<div className="radioArea">
						<input type="radio" id="Marketing" name="category" onChange={(e)=>{props.setCategory(e.target.id)}}/>
						<label htmlFor="Marketing">Marketing</label>
					</div>
					<div className="radioArea">
						<input type="radio" id="DevOps / Sysadmin" name="category" onChange={(e)=>{props.setCategory(e.target.id)}}/>
						<label htmlFor="DevOps / Sysadmin">DevOps / Sysadmin</label>
					</div>
					<div className="radioArea">
						<input type="radio" id="Business" name="category" onChange={(e)=>{props.setCategory(e.target.id)}}></input>
						<label htmlFor="Business">Business</label>
					</div>
					
					<div className="radioArea">
						<input type="radio" id="Data" name="category" onChange={(e)=>{props.setCategory(e.target.id)}}/>
						<label htmlFor="Data">Data</label>
					</div>
					<div className="radioArea">
						<input type="radio" id="All others" name="category" onChange={(e)=>{props.setCategory(e.target.id)}}/>
						<label htmlFor="All others">All others</label>
					</div>
				</form>
			</div>
        </div>
    );
}

export default FilterContainer;
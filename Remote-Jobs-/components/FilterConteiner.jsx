

const FilterContainer  = ()=>
{
    return (
        <div className="FilterContainer">
			<div className="fullTimeCheck">
			<input type="checkbox" id="fullTime"></input>
			<label htmlFor="fullTime">Full time</label>
			</div>
			<div className="locationFilter">
				<input type="text" className="locationInput" placeholder="search for specefic company"></input>
				<form action="" className="radioForm">
					<div className="radioArea">
						<input type="radio" id="london"/>
						<label htmlFor="london">Software Development</label>
					</div>
					<div className="radioArea">
						<input type="radio" id="amesterdam"/>
						<label htmlFor="amesterdam">Customer Service</label>
					</div>
					<div className="radioArea">
						<input type="radio" id="berlin" />
						<label htmlFor="berlin">Marketing</label>
					</div>
					<div className="radioArea">
						<input type="radio" id="new-york"/>
						<label htmlFor="new-york">DevOps / Sysadmin</label>
					</div>
					<div className="radioArea">
						<input type="radio" id="new-york"/>
						<label htmlFor="new-york">Business</label>
					</div>
					<div className="radioArea">
						<input type="radio" id="new-york"/>
						<label htmlFor="new-york">DevOps / Sysadmin</label>
					</div>
					<div className="radioArea">
						<input type="radio" id="new-york"/>
						<label htmlFor="new-york">Data</label>
					</div>
					<div className="radioArea">
						<input type="radio" id="new-york"/>
						<label htmlFor="new-york">All others</label>
					</div>
				</form>
			</div>
        </div>
    );
}

export default FilterContainer;
import JobCard from "./JobCard";

const CardList  = ()=>
{
	const [defaultState, setDefault] = React.useState ([]);
	let list = [];
	/// fetch initial data
	fetch(DEFAULT_END_POINT)
		.then (res => res.json ())
		.then (res =>console.log (res));
	for (let i = 0; i < 10; i++)
	{
		// let jobItem = <JobCard  imgUrl={defaultState[0]} companyName={} jobTitle={} location={}/>
		list.push (jobItem);
	}
    return (
        <div className="CardList">
		
        </div>
    );
}


export default CardList;
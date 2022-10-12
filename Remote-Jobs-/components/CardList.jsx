import JobCard from "./JobCard";

const CardList  = (props)=>
{
	// const [defaultState, setDefault] = React.useState ([]);
	const list = [];
	// /// fetch initial data
	// fetch(DEFAULT_END_POINT)
	// 	.then (res => res.json ())
	// 	.then (res =>console.log (res));
	// for (let i = 0; i < 10; i++)
	// {
	// 	// let jobItem = <JobCard  imgUrl={defaultState[0]} companyName={} jobTitle={} location={}/>
	// 	list.push (jobItem);
	// }
	console.log (props.cardList)
	props.cardList.map (obj=>{
		list.push (<JobCard key={obj.id}  jobTitle={obj.title} companyName={obj.company_name} url={obj.company_logo_url} time={obj.publication_data} location={obj.candidate_required_location} jobType={obj.job_type}/>);
	})
    return (
        <div className="CardList">
			{console.table(list)}
			{list}
        </div>
    );
}


export default CardList;
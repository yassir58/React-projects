import { useEffect, useState } from 'react';
import JobCard from "./JobCard";
import NextPage from "./NextPages";



const typeFilter =  (list, full, part, contract)=>{
	const newList = [];
	list.filter (item=>{
		if (full)
		{
			if (item.job_type.includes ("full_time"))
				newList.push (item);
		}
		if (part)
		{
			if (item.job_type.includes ("part_time"))
				newList.push (item);
		}
		if (contract)
		{
			if (item.job_type.includes ("contract"))
				newList.push (item);
		}
	});
	return (newList);
}

const CardList  = (props)=>
{
	// const [defaultState, setDefault] = React.useState ([]);
	let itemsList = [];
	const list = [];
	const [startIndex, setStart] = useState (0);
    const [endIndex , setEnd] = useState(5);
	
	if (props.full || props.part || props.contract)
		itemsList = typeFilter(props.cardList, props.full, props.part, props.contract);
	else
		itemsList = [...props.cardList];
	itemsList.map (obj=>{
		if (!(props.category == '' || props.category.includes('All others')))
		{
			if (obj.category.includes (props.category))
				list.push (<JobCard key={obj.id}  jobTitle={obj.title} companyName={obj.company_name} url={obj.company_logo_url} time={obj.publication_data} location={obj.candidate_required_location} jobType={obj.job_type}/>);
		}
		else
			list.push (<JobCard key={obj.id}  jobTitle={obj.title} companyName={obj.company_name} url={obj.company_logo_url} time={obj.publication_data} location={obj.candidate_required_location} jobType={obj.job_type}/>);
	});
	

    return (
        <div className="CardList">
			{list.slice(startIndex, endIndex).length > 0 ?  list.slice(startIndex, endIndex):<small>No jobs available for this category :(</small>}
			{list.length > 5 ? <NextPage startSetter={setStart} endSetter={setEnd}/>:''}
        </div>
    );
}


export default CardList;
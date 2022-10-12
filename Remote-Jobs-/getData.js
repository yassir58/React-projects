import initData from "./data.js";


function loadData (DEFAULT_END_POINT)
{
   let jobsData = localStorage.getItem ("jobs");
   let data;

   if (jobsData)
   {
        console.log ("data is found in local storage");
        data = JSON.parse (jobsData);
        data.jobs.map (obj=>initData.push(obj))
   }
   else
   {
        console.log ("data not found in local storage");
        console.log ("fetching data from API ... ");
        fetch(DEFAULT_END_POINT)
        .then(response=>response.json())
        .then (data=>{
            data.jobs.map (obj=>initData.push(obj))
            localStorage.setItem ("jobs", JSON.stringify(data))
            console.log ("caching data in local storage");
        })
   }
}


export default loadData ;

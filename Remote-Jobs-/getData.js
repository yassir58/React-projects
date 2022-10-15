import initData from "./data.js";
import searchData from '/data.js'

function loadData (DEFAULT_END_POINT, stateSetter)
{
   let jobsData = localStorage.getItem ("jobs");
   let data;

   if (jobsData)
   {
        console.log ("data is found in local storage");
        data = JSON.parse (jobsData);
        stateSetter (data.jobs);
   }
   else
   {
        console.log ("data not found in local storage");
        console.log ("fetching data from API ... ");
        fetch(DEFAULT_END_POINT)
        .then(response=>response.json())
        .then (data=>{
          stateSetter (data.jobs);
            localStorage.setItem ("jobs", JSON.stringify(data))
            console.log ("caching data in local storage");
        })
        .catch (err=>{
          throw (err);
        });
   }
}


export function getSearchData (END_POINT, request, stateSetter)
{
     let responseData = localStorage.getItem (request);
     let data;

     if (responseData)
     {
          console.log ('search data found in localstorage');
          data = JSON.parse (responseData);
          console.log ("cached data : ", data);
          stateSetter (data.jobs);
     }
     else
     {
          console.log ('no data found in local storage');
          console.log ("fetching data ..")
          fetch(END_POINT + request)
          .then(res=>res.json())
          .then (data=>{
               console.log ('search data fetched : ', data.jobs)
               localStorage.setItem (request, JSON.stringify(data));
               stateSetter (data.jobs);
          })
          .catch (err=>{
               throw (err);
          })
     }

}

export default loadData ;

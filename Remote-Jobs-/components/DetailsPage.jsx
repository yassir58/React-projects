import Header from "./Header";
import { Markup } from "interweave";

const DetailsPage =  (props)=>{
    return (
        <div className="detailsPage">
            <div className="detailsMain">
                <div className="detailsNavigation">
                    <a href="" onClick={(e)=>{e.preventDefault (), props.setMode(0)}}>back to search</a>
                    <h3>HOW TO APPLY</h3>
                    <p>Please email a copy of your resume and online portfolio <br/> <a href="">{props.item.company_name}</a></p>
                </div>
                <div className="detailsArea">
                  <div className="detailsHeader">
                    <h1>{props.item.title}</h1>
                    <span className="Genre"><small>{props.item.job_type}</small></span> 
                  </div>
                    <small className="pubTime">{props.item.publication_date}</small>
                    <div className="companyInfoArea">
                        <img src={props.item.company_logo_url} alt="" />
                        <div className="companyInfo">
                            <h4>{props.item.company_name}</h4>
                            <small>{props.item.candidate_required_location}</small>
                        </div>
                    </div>
                   <Markup content= {props.item.description}/>
                </div>
            </div>
        </div>
    );
}




export default DetailsPage;
import React from "react";
import {OurTeamImgData} from "./svg-img/ourTeamImgData";
import "./ourTeam.scss"
import {LeadersData} from "./leadersData";

function OurTeam (){
  return(
     <div className="ourTeamCont">
       <img className="mapImg" width="100%" src={OurTeamImgData.mapp} alt=""/>
       <svg className="mapLine" xmlns="http://www.w3.org/2000/svg" width="100%" height="686" viewBox="0 0 1659 686" fill="none">
         <path d="M2679.69 262.444C2666.85 271.79 2578.49 29.2015 2348.17 9.75748C2117.86 -9.6868 2157.14 153.857 2005.57 181.644C1854 209.432 1776.08 59.816 1638.26 85.6734C1500.44 111.531 1429.27 273.661 1296.07 285.734C1162.88 297.807 1120.27 129.782 971.543 158.691C822.818 187.6 856.057 313.923 677.903 343.975C499.75 374.028 438.768 224.128 257.998 292.238C77.229 360.348 7.55664 683.883 7.55664 683.883" stroke="#797A1C" stroke-opacity="0.1" stroke-width="15"/>
       </svg>
       
       <div className="ourTeamContent">
          <div className="contentTextBlock">
            <h2 className="ourTeamHeader">Every Revolution Needs a Leader</h2>
            <p className="ourTeamPrg">
              We offer comprehensive digital services, including marketing, branding, and development. Our team creates customized solutions to achieve your goals, from website design to AI. We empower businesses to stay ahead of the competition with our visionary leadership and expertise.
            </p>
          </div>
         
         <div className="leadersBlock">
           <p className="overHeader">
             <img style={{marginRight: "5px"}} src={OurTeamImgData.star} alt=""/>
             Our Team
           </p>
           
           <div className="leadersCont">
             {LeadersData.map((el, index)=>{
               return (
                  <div className="everyLeader" id={index}>
                    <img className="leaderImg" src={el.img} alt=""/>
                    <span className="leaderName">{el.name}</span>
                    <span className="leaderWork">{el.master}</span>
                  </div>
               )
             })}
           </div>
           
           <div className="viewMoreLink"><span className="viewMore">View  More <img src={OurTeamImgData.right} alt=""/></span></div>
         </div>
       </div>
     </div>
  )
}
export default OurTeam
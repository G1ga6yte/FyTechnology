import React, {useState} from "react";
import {OurTeamImgData} from "./svg-img/ourTeamImgData";
import "./ourTeam.scss"



function OurTeam (){
  const [settings, setSettings] = useState({
    transform: "translateY(400px)",
    opacity: "0",
    marginTopH: "150px",
    marginTopP: "200px",
    marginTopO: "40px"
  })
  
  window.addEventListener('scroll', function(){
    if(this.scrollY >= 6700){
      setSettings({
        transform: "translateY(0)",
        opacity: "1",
        marginTopH: "0",
        marginTopP: "0",
        marginTopO: "0"
      })
    }
  })

  return(
     <div className="ourTeamCont">
       <div className="ourTeamContBck">
         <img className="mapImg" width="100%" src={OurTeamImgData.mapp} alt=""/>
         <svg className="mapLine" xmlns="http://www.w3.org/2000/svg" width="100%" height="686" viewBox="0 0 1659 686" fill="none">
           <path d="M2679.69 262.444C2666.85 271.79 2578.49 29.2015 2348.17 9.75748C2117.86 -9.6868 2157.14 153.857 2005.57 181.644C1854 209.432 1776.08 59.816 1638.26 85.6734C1500.44 111.531 1429.27 273.661 1296.07 285.734C1162.88 297.807 1120.27 129.782 971.543 158.691C822.818 187.6 856.057 313.923 677.903 343.975C499.75 374.028 438.768 224.128 257.998 292.238C77.229 360.348 7.55664 683.883 7.55664 683.883" stroke="#797A1C" stroke-opacity="0.1" stroke-width="15"/>
         </svg>
  
         <div className="ourTeamContent">
           <div className="contentTextBlock">
             
             <div className="ourTeamHeaderBlock">
               <h2 style={{marginTop: settings.marginTopH, opacity: settings.opacity}} className="ourTeamHeader">Every Revolution Needs a Leader</h2>
             </div>
             
             <div className="ourTeamPrgBlock">
               <p style={{marginTop: settings.marginTopP, opacity: settings.opacity}} className="ourTeamPrg">
                 We offer comprehensive digital services, including marketing, branding, and development. Our team creates customized solutions to achieve your goals, from website design to AI. We empower businesses to stay ahead of the competition with our visionary leadership and expertise.
               </p>
             </div>
             
             
           </div>
    
           <div className="leadersBlock">
             
             <div className="overHeaderBlock">
               <p style={{marginTop: settings.marginTopO, opacity: settings.opacity}} className="overHeader">
                 <img style={{marginRight: "5px"}} src={OurTeamImgData.star} alt=""/>
                 Our Team
               </p>
             </div>
             
      
             <div className="leadersCont">
               <div  style={{transform: settings.transform, opacity: settings.opacity, backgroundImage: `url('${OurTeamImgData.peopleImg2}')`, transition: "0.3s ease-in-out"}} className="peopleImg"></div>
               <div style={{transform: settings.transform, opacity: settings.opacity, backgroundImage: `url('${OurTeamImgData.peopleImg2}')`, transition: "0.6s ease-in-out"}} className="peopleImg"></div>
               <div style={{transform: settings.transform, opacity: settings.opacity, backgroundImage: `url('${OurTeamImgData.peopleImg2}')`, transition: "0.9s ease-in-out"}} className="peopleImg"></div>
               <div style={{transform: settings.transform, opacity: settings.opacity, backgroundImage: `url('${OurTeamImgData.peopleImg2}')`, transition: "1.2s ease-in-out"}} className="peopleImg"></div>
               <div style={{transform: settings.transform, opacity: settings.opacity, backgroundImage: `url('${OurTeamImgData.peopleImg2}')`, transition: "1.5s ease-in-out"}} className="peopleImg"></div>
               <div style={{transform: settings.transform, opacity: settings.opacity, backgroundImage: `url('${OurTeamImgData.peopleImg2}')`, transition: "1.8s ease-in-out"}} className="peopleImg"></div>
             </div>
    
           </div>
         </div>
       </div>
       
     </div>
  )
}
export default OurTeam
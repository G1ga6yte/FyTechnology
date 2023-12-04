import React, {useState} from "react";
import "./review.scss"
import {TopReviewData} from "./topReviewData";
import {ReviewImgData} from "./img-svg/reviewImgData";

function Review (){
  const [settings, setSettings] = useState({
    marginTopPrg: "300px",
    opacity: "0",
    marginTop: "200px"
  })
  
  window.addEventListener('scroll', function(){
    if (this.scrollY >= 7700){
      setSettings({
        marginTopPrg: "0",
        opacity: "1",
        marginTop: "0"
      })
    }
  })
  
  return(
     <div className="ReviewCont">
       <div className="reviewContBck">
         <div className="Review1">
           <div className="imageBlock">
             <img className="img" src={TopReviewData.img} alt=""/>
           </div>
           
           <div className="reviewTextBlock">
             <span className="quotes">“</span>
             <div className="reviewPrgBlock">
               <p style={{marginTop: settings.marginTopPrg, opacity: settings.opacity}} className="reviewPrg">{TopReviewData.reviewText}</p>
             </div>
             
             <div className="name-buttons">
               <div className="name-work">
                 <span style={{marginTop: settings.marginTop, opacity: settings.opacity}} className="name">{TopReviewData.name}</span>
                 <p style={{marginTop: settings.marginTop, opacity: settings.opacity}} className="work">{TopReviewData.work}</p>
               </div>
               <div className="buttons">
                 <a className="button" href=""><img src={ReviewImgData.left} alt=""/></a>
                 <a className="button" href=""><img src={ReviewImgData.right} alt=""/></a>
               </div>
             </div>
           </div>
           
         </div>
       </div>
       
     </div>
  )
}
export default Review
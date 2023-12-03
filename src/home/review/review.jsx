import React from "react";
import "./review.scss"
import {TopReviewData} from "./topReviewData";
import {ReviewImgData} from "./img-svg/reviewImgData";

function Review (){
  return(
     <div className="ReviewCont">
       <div className="reviewContBck">
         <div className="Review1">
           <div className="imageBlock">
             <img className="img" src={TopReviewData.img} alt=""/>
           </div>
           <div className="reviewTextBlock">
             <span className="quotes">“</span>
             <p className="reviewPrg">{TopReviewData.reviewText}</p>
             <div className="name-buttons">
               <div className="name-work">
                 <span className="name">{TopReviewData.name}</span>
                 <p className="work">{TopReviewData.work}</p>
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
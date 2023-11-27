import React from "react";
import "./priceTab.scss";
import {PriceTabImgData} from "./img-svg/priceTabImgData";
import {PriceTabData} from "./priceTabData";
import {SvgsData} from "../../svgs/svgsData";

function PriceTab (){
  return(
     <div className="priceCont">
       <img className="bigBall" src={PriceTabImgData.bigball} alt=""/>
        <div className="overline"></div>
       
       <div className="PriceContent">
         <p className="overHeader">
           <img style={{marginRight: "5px"}} src={PriceTabImgData.star} alt=""/>
           Free 30-Day Trial — No Credit Card Required.
         </p>
         <h2 className="priceHeader">Whether you’re part of an agency or a larger team we have a plan for you</h2>
       
          <div className="PriceBlock">
            {PriceTabData.map((el, index)=>{
              return(
                 <div className={`priceItem ${el.checked ? "checked" : ""}`}  id={index}>
                    <span className="itemClass">{el.class}</span>
                    <span className="price">${el.price}<span className="month">/moth</span></span>
                    
                   <div className="descLayout">
                     <span className="itemDesc">
                     <img style={{marginRight: "10px"}} src={PriceTabImgData.checked} alt=""/>{el.desc1}
                   </span>
                     <span className="itemDesc">
                     <img style={{marginRight: "10px"}} src={PriceTabImgData.checked} alt=""/>{el.desc2}
                   </span>
                     <span className="itemDesc">
                     <img style={{marginRight: "10px"}} src={PriceTabImgData.checked} alt=""/>{el.desc3}
                   </span>
                   </div>
                   
                   <button className="buttonPurchase">Purchase Now</button>
                   
                   <span className={`${el.checked ? "checkedText": "none"}`}>Most popular</span>
                 
                 </div>
              )
            })}
          </div>
       </div>
  
       <div  className="vector" style={{position:"absolute", left: "15%", top: "320px"}}>
         <img src={SvgsData.vector} style={{position:"absolute", left:0, top: 0}} alt=""/>
         <img src={SvgsData.radial} style={{position:"absolute", left:0, top: 0}} alt=""/>
       </div>
       <div  className="vector" style={{position:"absolute", right: "20%", top: "200px", transform: "scale(-1, -1)"}}>
         <img src={SvgsData.vector} style={{position:"absolute", left:0, top: 0}} alt=""/>
         <img src={SvgsData.radial} style={{position:"absolute", left:0, top: 0}} alt=""/>
       </div>
     </div>
  )
}
export default PriceTab
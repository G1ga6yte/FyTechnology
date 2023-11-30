import React from "react";
import "./collabPartneship.scss"
import {CollabPartnerData} from "./collabPartnerData";
import {collabImg} from "./collabPartnerImg/collabPartnerImgData";
import {SvgsData} from "../../svgs/svgsData";

function CollabPartnership (){
  return(
     <div className="CollabPartnership">
        <h2 className="collabHeader">Long-term collaboration & partnership</h2>
       {CollabPartnerData.map((el, index)=>{
         return(
            <div id={index} className="collabBlock" style={{backgroundImage: `url(${collabImg.bck})`}} >
              <img className="grid-img" src={collabImg.grid2} alt=""/>
              <img className="collabBlockStars" src={collabImg.stars} alt=""/>
              <img className="collabBlockStars" src={collabImg.stars} alt=""/>
              <div className="CDE-block">
                  <img src={collabImg.star} alt=""/>
                  <span className="CDE-text">Crafting Digital Experiences</span>
                </div>
                
              <div className={`img-text-block ${el.reverse ? "reverse" : ""}`}>
                <div className="imageText">
                  <img src={collabImg.grid} alt=""/>
                  <span className="imgText">{el.imgText}</span>
                </div>
                
                <div className="header-prg">
                  <span className="item-header">{el.header}</span>
                  <p className="item-prg">{el.description}</p>
                  <button className="item-button G-link-button">{el.button}</button>
                </div>
              </div>
            </div>
         )
       })}
       <img className="ball1" src={collabImg.ball1} alt=""/>
       <img className="ball2" src={collabImg.ball2} alt=""/>
       <img className="ball3" src={collabImg.ball3} alt=""/>
       <div  className="vector" style={{position:"absolute"}}>
         <img src={SvgsData.vector} style={{position:"absolute", left:0, top: 0}} alt=""/>
         <img src={SvgsData.radial} style={{position:"absolute", left:0, top: 0}} alt=""/>
       </div>
       <div  className="vector" style={{position:"absolute"}}>
         <img src={SvgsData.vector} style={{position:"absolute", left:0, top: 0}} alt=""/>
         <img src={SvgsData.radial} style={{position:"absolute", left:0, top: 0}} alt=""/>
       </div>
     </div>
  )
}

export default CollabPartnership
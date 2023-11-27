import React from "react";
import "./provided.scss"
import {ProvidedData} from "./providedData";
import {ProvidedSVGData} from "./img-svg/providedSVGData";
import {SvgsData} from "../../svgs/svgsData";

function Provided(){
  return(
     <div className="providedBlock">
       <div className="overline"></div>
  
       <p className="overHeader">
         <img style={{marginRight: "5px"}} src={ProvidedSVGData.star} alt=""/>
         Our Services
       </p>
       <h2 className="providedHeader">Provided Features</h2>
       
       <div className="features">
         {ProvidedData.map((el, index)=>{
           return(
              <div className="featureItem" id={index}>
                <img style={{marginRight: "15px"}} src={el.svg} alt=""/>
                <div className="textBox">
                  <h5 className="itemHeader">{el.header}</h5>
                  <p className="itemPrg">{el.prg}</p>
                </div>
              </div>
           )
         })}
       </div>
  
       <div  className="vector" style={{position:"absolute", right: "20%", top: "0"}}>
         <img src={SvgsData.vector} style={{position:"absolute", left:0, top: 0}} alt=""/>
         <img src={SvgsData.radial} style={{position:"absolute", left:0, top: 0}} alt=""/>
       </div>
     </div>
  )
}
export default Provided
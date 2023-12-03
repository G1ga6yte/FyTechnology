import React, {useState} from "react";
import "./provided.scss"
import {ProvidedData} from "./providedData";
import {ProvidedSVGData} from "./img-svg/providedSVGData";
import {SvgsData} from "../../svgs/svgsData";


function Provided(){
 const [header, setHeader] = useState({
  // 5800
    marginTopO: "40px",
   opacity: "0",
   marginTopH: "100px"
 })
  const [items, setItems] = useState({
    marginTopH: "50px",
    opacity: "0",
    marginTop: "200px"
  })
  
  window.addEventListener('scroll', function(){
    if (this.scrollY >=5800) {
      setHeader({
        marginTopO: "0",
        opacity: "1",
        marginTopH: "0"
      })
    }
    
    if (this.scrollY >= 6100){
      setItems({
        marginTopH: "0",
        opacity: "1",
        marginTop: "0"
      })
    }
  })

  return(
     <div className="providedBlock">
       <div className="ProvidedBlockBck">
         <div className="overline"></div>
  
         <div className="overHeaderBlock">
           <p style={{marginTop: header.marginTopO, opacity: header.opacity}} className="overHeader">
             <img style={{marginRight: "5px"}} src={ProvidedSVGData.star} alt=""/>
             Our Services
           </p>
         </div>
         
         <div className="providedHeaderBlock">
           <h2 style={{marginTop: header.marginTopH, opacity: header.opacity}} className="providedHeader">Provided Features</h2>
         </div>
  
         <div className="features">
           {ProvidedData.map((el, index)=>{
             return(
                <div className="featureItem" id={index}>
                  
                    <img className="itemImg"  src={el.svg} alt=""/>
                  
                  <div className="textBox">
                    <div className="itemHeaderBlock">
                      <h5 style={{marginTop: items.marginTopH, opacity: items.opacity}} className="itemHeader">{el.header}</h5>
                    </div>
                    <div className="itemPrgBlock">
                      <p style={{marginTop: items.marginTop, opacity: items.opacity}} className="itemPrg">{el.prg}</p>
                    </div>
                    
                    
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
       
     </div>
  )
}
export default Provided
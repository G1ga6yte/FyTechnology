import React, {useState} from "react";
import "./priceTab.scss";
import {PriceTabImgData} from "./img-svg/priceTabImgData";
import {PriceTabData} from "./priceTabData";
import {SvgsData} from "../../svgs/svgsData";

function PriceTab() {
  const [header, setHeader] = useState({
    marginTop: "140px", opacity: "0",
  });
  const [desc, setDesc] = useState({
    marginTop: "100px",
    opacity: "0"
  })
  
  window.addEventListener("scroll", function () {
    if (this.scrollY >= 5000) {
      setHeader({
        marginTop: "0", opacity: "1",
      });
      if (this.scrollY >= 5300){
        setDesc({
          marginTop: "0",
          opacity: "1"
        })
      }
    }
  });
  
  return (<div className="priceCont">
       <div className="priceContBck">
         <div className="overline"></div>
         
         
         <div className="PriceContent">
           <div className="overHeaderBlock">
             <p style={{marginTop: header.marginTop, opacity: header.opacity}} className="overHeader">
               <img style={{marginRight: "5px"}} src={PriceTabImgData.star} alt=""/>
               Free 30-Day Trial — No Credit Card Required.
             </p>
           </div>
           <div className="priceHeaderBlock">
             <h2 style={{marginTop: header.marginTop, opacity: header.opacity}} className="priceHeader">Whether you’re
               part of an agency or a larger team we have a plan for you</h2>
           </div>
           
           
           <div className="PriceBlock">
             {PriceTabData.map((el, index) => {
               return (<div className={`priceItem ${el.checked ? "checked" : ""}`} id={index}>
                    <div  className="itemClassBlock">
                      <span style={{marginTop: desc.marginTop, opacity: desc.opacity}} className="itemClass">{el.class}</span>
                    </div>
                 <div className="priceBlock">
                   <span style={{marginTop: desc.marginTop, opacity: desc.opacity}} className="price">${el.price}<span className="month">/moth</span></span>
                 </div>
                    
                 
                 
                    <div className="descLayout">
                     
                      <div className="itemDescBlock">
                        <span style={{marginTop: desc.marginTop, opacity: desc.opacity}} className="itemDesc">
                     <img style={{marginRight: "10px"}} src={PriceTabImgData.checked} alt=""/>{el.desc1}
                   </span>
                      </div>
                     
                      <div className="itemDescBlock">
                        <span style={{marginTop: desc.marginTop, opacity: desc.opacity}} className="itemDesc">
                     <img style={{marginRight: "10px"}} src={PriceTabImgData.checked} alt=""/>{el.desc2}
                   </span>
                      </div>
                      
                      <div className="itemDescBlock">
                        <span style={{marginTop: desc.marginTop, opacity: desc.opacity}} className="itemDesc">
                     <img style={{marginRight: "10px"}} src={PriceTabImgData.checked} alt=""/>{el.desc3}
                   </span>
                      </div>
                      
                    
                    </div>
                    
                    <button className="buttonPurchase G-link-button">Purchase Now</button>
                    
                    <span className={`${el.checked ? "checkedText" : "none"}`}>Most popular</span>
                  
                  </div>);
             })}
           </div>
         </div>
         
         <div className="vector" style={{position: "absolute", left: "15%", top: "320px"}}>
           <img src={SvgsData.vector} style={{position: "absolute", left: 0, top: 0}} alt=""/>
           <img src={SvgsData.radial} style={{position: "absolute", left: 0, top: 0}} alt=""/>
         </div>
         <div className="vector" style={{position: "absolute", right: "20%", top: "200px", transform: "scale(-1, -1)"}}>
           <img src={SvgsData.vector} style={{position: "absolute", left: 0, top: 0}} alt=""/>
           <img src={SvgsData.radial} style={{position: "absolute", left: 0, top: 0}} alt=""/>
         </div>
       </div>
     
     
     </div>);
}

export default PriceTab;
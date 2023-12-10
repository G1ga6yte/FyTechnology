import React from "react";
import "./block.scss";
import {Link} from "react-router-dom";
import {BlockData} from "./blockData";
import {BlockSVGData} from "./blockSVG/blockSVGData";
import EachBlock from "../All-experiences/allBlocks/eachBlock/eachBlock";
import {useCartContext} from "../../../CartContext";

function Block() {
  const {setService, setLine1P, line1, setLine1, line1P} = useCartContext()
  const scrollToTop = () => {
    setTimeout(()=>{
      
      setService(100)
    }, 1000)
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };
  
  return (
     <div className="block">
       {BlockData.map((el, index) => {
         
         if (index < 6){
         return (
            <EachBlock header={el.header} icon={el.icon} desc={el.desc} index={index} />
         );}
       })}
  
       <div className="GBlock">
       <div className={`block-item ${line1P ? " line1" : ""} `} style={{backgroundImage: `url(${BlockSVGData.background})`}}>
         <img className="item-grid" src={BlockSVGData.grid} alt=""/>
         <img className="item-grid2" src={BlockSVGData.stars} alt=""/>
         <img className="item-grid3" src={BlockSVGData.stars} alt=""/>
         
         <div style={{position: "relative", transform: line1.transform, opacity: line1.opacity}} className="icons">
           <img className="iconBck" src={BlockSVGData.circle} alt=""/>
           <span className="iconText" style={{position:"absolute", left: "50%", top: "50%", transform: "translate(-50%, -50%)"}}>+6</span>
         </div>
         <div className="itemHeaderBlock">
           <h4 style={{marginTop: line1.header, opacity: line1.opacity}} className="item-header">More</h4>
         </div>
         <div className="itemPrgBlock">
           <p style={{marginTop: line1.prg, opacity: line1.opacity}} className="item-prg">We are offering more for ur idea </p>
         </div>
         <Link onClick={scrollToTop}  to="/brand_experiences" className="discoverButton G-round-button">Discover</Link>
       </div>
       </div>
       
       
       
     </div>
  );
}

export default Block;
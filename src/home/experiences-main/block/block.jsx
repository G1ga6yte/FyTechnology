import React from "react";
import "./block.scss";
import {Link} from "react-router-dom";
import {BlockData} from "./blockData";
import {BlockSVGData} from "./blockSVG/blockSVGData";
import EachBlock from "../All-experiences/allBlocks/eachBlock/eachBlock";

function Block() {
  
  const scrollToTop = () => {
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
       <div className="block-item" style={{backgroundImage: `url(${BlockSVGData.background})`}}>
         <img className="item-grid" src={BlockSVGData.grid} alt=""/>
         <img className="item-grid2" src={BlockSVGData.stars} alt=""/>
         <img className="item-grid3" src={BlockSVGData.stars} alt=""/>
         <div style={{position: "relative"}} className="icons">
           <img src={BlockSVGData.circle} alt=""/>
           <span className="iconText" style={{position:"absolute", left: "50%", top: "50%", transform: "translate(-50%, -50%)"}}>+6</span>
         </div>
         <h4 className="item-header">More</h4>
         <p className="item-prg">We are offering more for ur idea </p>
         <Link onClick={scrollToTop}  to="/brand_experiences" className="G-round-button">Discover</Link>
       </div>
       </div>
       
       
       
     </div>
  );
}

export default Block;
import React from "react";
import "./block.scss";
import {BlockData} from "./blockData";
import {BlockSVGData} from "./blockSVG/blockSVGData";

function Block() {
  return (
     <div className="block">
       {BlockData.map((el, index) => {
         return (
            <div id={index} className="block-item" style={{backgroundImage: `url(${BlockSVGData.background})`}}>
              <img className="item-grid" src={BlockSVGData.grid} alt=""/>
              <img className="item-grid2" src={BlockSVGData.stars} alt=""/>
              <img className="item-grid3" src={BlockSVGData.stars} alt=""/>
              <div style={{position: "relative"}} className="icons">
                <img src={BlockSVGData.circle} alt=""/>
                <img style={{position:"absolute", left: "50%", top: "45%", transform: "translate(-50%, -50%)"}} src={el.icon} alt=""/>
                <span className={el.icontext ? "iconText" : "none"} style={{position:"absolute", left: "50%", top: "50%", transform: "translate(-50%, -50%)"}}>+6</span>
              </div>
              <h4 className="item-header">{el.header}</h4>
              <p className="item-prg">{el.desc}</p>
              <button className={el.button ? "discoverButton" : "none"}>Discover</button>
            </div>
         );
       })}
     </div>
  );
}

export default Block;
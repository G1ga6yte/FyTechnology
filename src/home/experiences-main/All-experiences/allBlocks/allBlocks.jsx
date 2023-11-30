import React, {useState} from "react";
import "./allBlock.scss";
import {BlockData} from "../../block/blockData.js";
import {BlockSVGData} from "../../block/blockSVG/blockSVGData.js";
import EachBlock from "./eachBlock/eachBlock";


function AllBlock() {
  // const icon = BlockData[0].icon
  // const header = BlockData[0].header
  // const desc = BlockData[0].desc
  
  return (
     
     <div className="allBlock">
       <div className="allBlocksCont">
         {BlockData.map((el, index) => {
           
           
           return (
            <EachBlock header={el.header} icon={el.icon} desc={el.desc} index={index} />
           );
         })}
         
         
         

       </div>
       
  
       <div className="talkUsBlock">
          <button className="letsTalkUsButton G-square-button">Let’s Talk Us</button>
         <p className="letsTalkUsText">Whether you're looking for advice, inspiration, or simply want to connect with like-minded individuals</p>
       </div>
     </div>
  );
}

export default AllBlock;
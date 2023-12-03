import React, {useState} from "react";
import ReactCardFlip from "react-card-flip";
import {BlockSVGData} from "../../../block/blockSVG/blockSVGData";
import {useCartContext} from "../../../../../CartContext";



function EachBlock(props) {
  const [flip, setFlip] = useState(false);
  const {line1, setLine1, line1P, setLine1P} = useCartContext()
  
  
  return (
     <div key={props.id} className="GBlock">
       <ReactCardFlip isFlipped={flip}
                      flipDirection="horizontal">
         
         <div onClick={() => setFlip(!flip)} className={`block-item ${line1P ? " line1" : ""} `}
              style={{backgroundImage: `url(${BlockSVGData.background})`, backgroundSize: "cover"}}>
           <img className="item-grid" src={BlockSVGData.grid} alt=""/>
           <img className="item-grid2" src={BlockSVGData.stars} alt=""/>
           <img className="item-grid3" src={BlockSVGData.stars} alt=""/>
           <div style={{position: "relative", transform: line1.transform, opacity: line1.opacity}} className="icons">
             <img src={BlockSVGData.circle} alt=""/>
             <img style={{position: "absolute", left: "50%", top: "45%", transform: "translate(-50%, -50%)"}}
                  src={props.icon} alt=""/>
           </div>
           
           <div className="itemHeaderBlock">
             <span style={{marginTop: line1.header, opacity: line1.opacity}} className="item-header">{props.header}</span>
           </div>
           <div className="itemPrgBlock">
             <p style={{marginTop: line1.prg, opacity: line1.opacity}} className="item-prg">{props.desc}</p>
           </div>
           
         </div>
         
         <div onClick={() => setFlip(!flip)} className="block-item flippedItem">
           
           <div className="ItemIconHeader">
             <div style={{position: "relative"}} className="icons">
               <img src={BlockSVGData.circle} alt=""/>
               <img style={{position: "absolute", left: "50%", top: "45%", transform: "translate(-50%, -50%)"}}
                    src={props.icon} alt=""/>
             </div>
             
             <span className="item-header">{props.header}</span>
           </div>
           
           <button className="findPriceButton G-square-button">Find out the price</button>
         
         </div>
       </ReactCardFlip>
     </div>
  );
}

export default EachBlock;
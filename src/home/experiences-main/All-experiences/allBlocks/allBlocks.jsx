import React, {useState} from "react";
import "./allBlock.scss";
import {BlockData} from "../../block/blockData.js";
import {BlockSVGData} from "../../block/blockSVG/blockSVGData.js";
import EachBlock from "./eachBlock/eachBlock";
import {useCartContext} from "../../../../CartContext";



function AllBlock() {
  const {handleDialog} = useCartContext()
  const settings1 = {
    widthB: "0",
    paddingB: "15px 0",
    marginP: "100px"
  }
  const settings2 = {
    widthB: "350px",
    paddingB: "15px 100px",
    marginP: "0"
  }
  const [settings, setSettings] = useState(settings1)
  window.addEventListener("scroll", function(){
    if(this.scrollY >= 1300){
      setSettings(settings2)
    }
  })
  return (
     
     <div className="allBlock">
       <div className="allBlocksCont">
         {BlockData.map((el, index) => {
           return (
            <EachBlock key={el.id} id={el.id} header={el.header} icon={el.icon} desc={el.desc} />
           );
         })}
       </div>
       
  
       <div className="talkUsBlock">
          <button onClick={handleDialog} style={{width: settings.widthB, padding: settings.paddingB}} className="letsTalkUsButton G-square-button">Let’s Talk Us</button>
         <div className="prgBlock">
           <p style={{marginTop: settings.marginP}} className="letsTalkUsText">Whether you're looking for advice, inspiration, or simply want to connect with like-minded individuals</p>

         </div>
       </div>
     </div>
  );
}

export default AllBlock;
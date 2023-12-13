import React, {useState} from "react";
import {Link} from "react-router-dom";
import ReactCardFlip from "react-card-flip";
import "./itemBlock.scss"

function ItemBlock(props) {
  const [flip, setFlip] = useState(false);
  
  return (<Link to={`/project/${props.el.id.toString()}`} onMouseOver={()=>{setFlip(true)}} onMouseLeave={()=>{setFlip(false)}} className="itemBlock">
    <ReactCardFlip isFlipped={flip}  flipDirection="horizontal">
        <div  className="cardSide">
          <div className="cardImg" style={{backgroundImage: `url("${props.el.img[0]}")`}}></div>
          <div className="ItemFrontTextBlock">
            <div className="backTextBlock">
              <p className="nameHeader">{props.el.projectName}</p>
              <p className="prg">{props.el.descH}</p>
            </div>
            <div className="usedSkills">
              {props.el.skills.map((el)=>{
                return(
                   <div className="skill">
                     {el}
                   </div>
                )
              })}
            </div>
          </div>
        </div>
      
        <div className="cardSide backSide">
          <div className="backTextBlock">
            <p className="nameHeader">{props.el.projectName}</p>
            <p className="prg">{props.el.descH}</p>
          </div>
  
          <div className="usedSkills">
            {props.el.skills.map((el)=>{
              return(
                 <div className="skill">
                   {el}
                 </div>
              )
            })}
          </div>
        </div>
    </ReactCardFlip>
  </Link>);
}
export default ItemBlock
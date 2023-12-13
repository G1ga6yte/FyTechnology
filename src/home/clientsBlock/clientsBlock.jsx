import React, {useState} from "react";
import "./clientsBlock.scss";
import {ClientsImgSvgData} from "./img-svg/clientsImgSvgData";
import {ClientsData} from "./clientsData";
import {useCartContext} from "../../CartContext";

function ClientsBlock() {
  const {handleDialog} = useCartContext()
  const [header, setHeader] = useState({
    translate1 : "translateY(450px)",
    translate2 : "translateY(450px)",
    marginTopH: "200px",
    opacity: "0"
  })
  
  const [line, setLine] = useState({
    marginTopL: "100px",
    opacity: "0"
  })
  
  window.addEventListener('scroll', function(){
    if (this.scrollY>=9500){
      setHeader({
        translate1 : "translateY(30px)",
        translate2 : "translateY(-30px)",
        marginTopH: "0",
        opacity: "1"
      })
    }
    if (this.scrollY>=9700){
      setLine({
        marginTopL: "0",
        opacity: "1"
      })
    }
  })
  
  return (
     <div className="ClientsBlock">
       <div className="clientsBlockBck">
         
         <div className="clientsCondM">
           <div className="ClientsCont">
    
             <div style={{transform: header.translate1, opacity: header.opacity}} className="clientsLine">
               <div className="clientsItem" id={ClientsData[0].id}>
                 <img className="moreDots" src={ClientsImgSvgData.dots} alt=""/>
                 <img className="clientImg" width="64px" src={ClientsData[0].img} alt=""/>
                 <span className="clientsName">{ClientsData[0].name}</span>
                 <p className="clientsMail"><img src={ClientsImgSvgData.mail} alt=""/>{ClientsData[0].email}</p>
               </div>
      
               <div className="clientsItem middleItem">
                 <div className="halfBlock">
                   <img src={ClientsImgSvgData.paper} alt=""/>
                   <span className="Value">$3,500</span>
                   <span className="description">In Draft</span>
                 </div>
                 <div className="halfBlock">
                   <img src={ClientsImgSvgData.timer} alt=""/>
                   <span className="Value">02:00</span>
                   <span className="description">Unbilled Time</span>
                 </div>
               </div>
      
               <div className="clientsItem" id={ClientsData[1].id}>
                 <img className="moreDots" src={ClientsImgSvgData.dots} alt=""/>
                 <img className="clientImg" width="64px" src={ClientsData[1].img} alt=""/>
                 <span className="clientsName">{ClientsData[1].name}</span>
                 <p className="clientsMail"><img src={ClientsImgSvgData.mail} alt=""/>{ClientsData[1].email}</p>
               </div>
             </div>
    
             <div style={{transform: header.translate2, opacity: header.opacity}} className="clientsLine">
               <div className="clientsItem" id={ClientsData[2].id}>
                 <img className="moreDots" src={ClientsImgSvgData.dots} alt=""/>
                 <img className="clientImg" width="64px" src={ClientsData[2].img} alt=""/>
                 <span className="clientsName">{ClientsData[2].name}</span>
                 <p className="clientsMail"><img src={ClientsImgSvgData.mail} alt=""/>{ClientsData[2].email}</p>
               </div>
      
               <div className="clientsItem">
                 <span className="headClients">Clients</span>
                 <button className="addClientButton">+ Add Client</button>
               </div>
      
               <div className="clientsItem" id={ClientsData[3].id}>
                 <img className="moreDots" src={ClientsImgSvgData.dots} alt=""/>
                 <img className="clientImg" width="64px" src={ClientsData[3].img} alt=""/>
                 <span className="clientsName">{ClientsData[3].name}</span>
                 <p className="clientsMail"><img src={ClientsImgSvgData.mail} alt=""/>{ClientsData[3].email}</p>
               </div>
             </div>
  
           </div>
  
           <div className="ClientsTextCont">
             
             <div className="textHeaderBlock">
               <span style={{marginTop: header.marginTopH, opacity: header.opacity}} className="clientsTextHeader">We Create Ideas & Politicies for Your Company Future.</span>
             </div>
             
             <div className="ideasClients">
               <div className="ideaLine">
                 <div style={{marginTop: line.marginTopL, opacity: line.opacity}} className="circle">
                   <img src={ClientsImgSvgData.wifi} alt=""/>
                 </div>
                 <span style={{marginTop: line.marginTopL, opacity: line.opacity}} className="ideaText">Explain your value prop as easily as possible.</span>
               </div>
               <div className="ideaLine">
                 <div style={{marginTop: line.marginTopL, opacity: line.opacity}} className="circle">
                   <img src={ClientsImgSvgData.toggle} alt=""/>
                 </div>
                 <span style={{marginTop: line.marginTopL, opacity: line.opacity}} className="ideaText">Communicate your most important features.</span>
               </div>
               <div className="ideaLine">
                 <div style={{marginTop: line.marginTopL, opacity: line.opacity}} className="circle">
                   <img src={ClientsImgSvgData.quotes} alt=""/>
                 </div>
                 <span style={{marginTop: line.marginTopL, opacity: line.opacity}} className="ideaText">Close with killer testimonials.</span>
               </div>
             </div>
             <button onClick={handleDialog} className="letsTalkUsButton G-square-button">Let’s Talk Us</button>
           </div>
         </div>
         <div className="overline"></div>
       </div>
  
       
     </div>
  );
}

export default ClientsBlock;
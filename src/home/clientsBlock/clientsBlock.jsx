import React from "react";
import "./clientsBlock.scss";
import {ClientsImgSvgData} from "./img-svg/clientsImgSvgData";
import {ClientsData} from "./clientsData";

function ClientsBlock() {
  return (
     <div className="ClientsBlock">
       <div className="ClientsCont">
         
         <div className="clientsLine">
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
         
         <div className="clientsLine">
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
          <span className="clientsTextHeader">We Create Ideas & Politicies for Your Company Future.</span>
          <div className="ideasClients">
            <div className="ideaLine">
                <div className="circle">
                  <img src={ClientsImgSvgData.wifi} alt=""/>
                </div>
              <span className="ideaText">Explain your value prop as easily as possible.</span>
            </div>
            <div className="ideaLine">
              <div className="circle">
                <img src={ClientsImgSvgData.toggle} alt=""/>
              </div>
              <span className="ideaText">Communicate your most important features.</span>
            </div>
            <div className="ideaLine">
              <div className="circle">
                <img src={ClientsImgSvgData.quotes} alt=""/>
              </div>
              <span className="ideaText">Close with killer testimonials.</span>
            </div>
          </div>
         <button className="letsTalkUsButton">Let’s Talk Us</button>
       </div>
     </div>
  );
}

export default ClientsBlock;
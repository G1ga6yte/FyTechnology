import React from "react";
import "./footer.scss"
import {FooterImgSvgData} from "./img-svg/footerImgSvgData";
import {useCartContext} from "../CartContext";

function Footer() {
  const {Call} = useCartContext()
  
  return (
     <div style={{display: `${Call("/pricing") ? "none" : "block"}`}} className={`${Call("/") ? "Footer padding" : "Footer"} ${Call("/home") ? "Footer padding" : "Footer"}`}>
       
       <div className="footerCont">
         <div className="footerLine">
            <p className="logoHeader"><img style={{marginRight: "8px"}} src={FooterImgSvgData.sun} alt=""/> FyTechnology</p>
            <span className="gps"><img style={{marginRight: "8px"}} src={FooterImgSvgData.gps} alt=""/>Sofia, Bulgaria</span>
         </div>
         <div className="footerLine">
           <h6 className="lineHeader">Services</h6>
           <p className="lineItem">Social Media Planning</p>
           <p className="lineItem">Branding & UI UX Design</p>
           <p className="lineItem">Fullstack Development</p>

         </div>
         <div className="footerLine">
           <h6 className="lineHeader">Social Media</h6>
           <p className="lineItem">Dribbble</p>
           <p className="lineItem">Instagram</p>
           <p className="lineItem">Behance</p>

         </div>
         <div className="footerLine">
           <h6 className="lineHeader">Contact</h6>
           <p className="lineItem">WhatsApp</p>
           <p className="lineItem">Telegram</p>
           <p className="lineItem">Email</p>

         </div>
       </div>
       
       <div className="line"></div>
       
       <div className="rightLine">
          <span className="rightsText">Copyright © 2021 Fytechnology LTD . All Rights Reserved.</span>
          <div className="termsPrivacy">
            <span className="rightsText">Terms of Use</span>
            <span className="rightsText">Privacy Policy</span>
          </div>
       </div>
     </div>
  );
}

export default Footer;
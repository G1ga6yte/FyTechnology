import React from "react";
import "./footer.scss";
import {FooterImgSvgData} from "./img-svg/footerImgSvgData";

function Footer() {
  return (
     <div className="Footer">
       
       <div className="backgroundFooter">
         <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="699" viewBox="0 0 1694 599" fill="none">
           <path
              d="M154.517 0.597961C766.522 0.597961 1045.87 217.616 1574.41 217.616C1615.01 217.616 1654.91 216.693 1694 214.99V829.265H0.177246V4.57568C49.6957 2.00568 101.168 0.597961 154.517 0.597961Z"
              fill="url(#paint0_linear_6_6334)"/>
           <defs>
             <linearGradient id="paint0_linear_6_6334" x1="-29.2294" y1="747.515" x2="1802.21" y2="-48.8248"
                             gradientUnits="userSpaceOnUse">
               <stop stop-color="#161C21"/>
               <stop offset="1" stop-color="#323121"/>
             </linearGradient>
           </defs>
         </svg>
       </div>
       <div className="footerBall"></div>
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
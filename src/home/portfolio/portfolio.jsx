import React, {useState} from "react";
import Slider from "react-slick";
import "./portfolio.scss"
import {PortfolioImgData} from "./img-svg/portfolioImgData";

function Portfolio (){
  var settings = {
    dots: false,
    infinite: true,
    speed: 5000,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows        : true,
    autoplay      : true,
    autoplaySpeed : 0,
  };
  
  const [header, setHeader] = useState({
    marginTopH: "100px",
    opacity: "0"
  })
  
  window.addEventListener('scroll', function(){
    if (this.scrollY >= 7000){
    setHeader({
      marginTopH: "0",
      opacity: "1"
    })
    }
  })
  
  return(
     <div className="Portfolio">
       <div className="portfolioBck">
         <div className="portfolioHeaderBlock">
           <h2 style={{marginTop: header.marginTopH, opacity: header.opacity}} className="portfolioHeader">Our portfolio</h2>
         </div>
  
         <div className="sliderCont">
           <Slider {...settings}>
             <div className="itemBlock"><img width="100%" className="portfolioItem" src={PortfolioImgData.bg1} alt=""/></div>
             <div className="itemBlock"><img width="100%" className="portfolioItem" src={PortfolioImgData.bg2} alt=""/></div>
             <div className="itemBlock"><img width="100%" className="portfolioItem" src={PortfolioImgData.bg3} alt=""/></div>
             <div className="itemBlock"><img width="100%" className="portfolioItem" src={PortfolioImgData.bg4} alt=""/></div>
             <div className="itemBlock"><img width="100%" className="portfolioItem" src={PortfolioImgData.bg5} alt=""/></div>
           </Slider>
         </div>
       </div>
       
     </div>
  )
}
export default Portfolio
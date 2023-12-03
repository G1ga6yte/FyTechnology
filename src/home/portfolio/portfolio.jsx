import React from "react";
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
  
  return(
     <div className="Portfolio">
       <div className="portfolioBck">
         <h2 className="portfolioHeader">Our portfolio</h2>
  
         <div className="sliderCont">
           <Slider {...settings}>
             <div className="itemBlock"><img width="100%" height="280px" className="portfolioItem" src={PortfolioImgData.bg1} alt=""/></div>
             <div className="itemBlock"><img width="100%" height="280px" className="portfolioItem" src={PortfolioImgData.bg2} alt=""/></div>
             <div className="itemBlock"><img width="100%" height="280px" className="portfolioItem" src={PortfolioImgData.bg3} alt=""/></div>
             <div className="itemBlock"><img width="100%" height="280px" className="portfolioItem" src={PortfolioImgData.bg4} alt=""/></div>
             <div className="itemBlock"><img width="100%" height="280px" className="portfolioItem" src={PortfolioImgData.bg5} alt=""/></div>
           </Slider>
         </div>
       </div>
       
     </div>
  )
}
export default Portfolio
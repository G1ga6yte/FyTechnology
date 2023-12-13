import React, {useState} from "react";
import {Link} from "react-router-dom";
import "./nav.scss"
import { useLocation } from 'react-router-dom'
import {SvgsData} from "../svgs/svgsData";
import {useCartContext} from "../CartContext";






function Navigation(){
  const {setLine1P, Call} = useCartContext()
  const [navAnim, setNavAnim] = useState("-150px")
// let navAnim = "-150px"
  setTimeout(()=>{
    setNavAnim("0")
  }, 1000)
  
  function homeLink (){
    setLine1P(false)
  }
  function servicesLink (){
    setLine1P(true)
  }
  
  if(Call("/brand_experiences")){
    setLine1P(true)
  }
  
  return(
       <div className="navCont">
         <div style={{top: navAnim}} className="navBlock G-flex G-align-center G-justify-around">
           <Link onClick={homeLink} to="/home" className="logoName">
             <img className="logo" src={SvgsData.logo} alt=""/>
           </Link>
  
           <div className="navigation-block">
    
             <Link onClick={homeLink} to="/home" className={`${Call("/") ? "nav-link lighting" : "nav-link"} ${Call("/home") ? "nav-link lighting" : "nav-link"}`}><span className="icon-home"></span>Home</Link>
             <Link onClick ={servicesLink} to="/brand_experiences" className={`${Call("/brand_experiences") ? "nav-link lighting" : "nav-link"}`}><span className="icon-shopping-bag"></span>Services</Link>
             <Link to="/home" className={`${Call("/About") ? "nav-link lighting" : "nav-link"}`}><span className="icon-message-circle"></span> About</Link>
             <Link to="/works" className={`${Call("/works") ? "nav-link lighting" : "nav-link"}`}><span className="icon-code1"></span> Works</Link>
             <Link to="/pricing" className={`${Call("/pricing") ? "nav-link lighting" : "nav-link"}`}><span className="icon-tag"></span> Pricing</Link>
             <Link to="/contact" className={`${Call("/contact") ? "nav-link lighting" : "nav-link"}`}><span className="icon-contacts"></span>Contact</Link>
  
           </div>
           <Link to="/home" className="G-link-button">
             FyTrading
           </Link>
         </div>
       </div>
  )
}
export default Navigation
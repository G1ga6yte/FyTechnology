import React, {useState} from "react";
import {Link} from "react-router-dom";
import "./nav.scss"
import { useLocation } from 'react-router-dom'
import {SvgsData} from "../svgs/svgsData";
import {useCartContext} from "../CartContext";


function Call(el, el2){
  const locat = useLocation()
    return el === locat.pathname
}



function Navigation(){
  const {setLine1P} = useCartContext()
  const [navAnim, setNavAnim] = useState("-150px")
// let navAnim = "-150px"
  setTimeout(()=>{
    setNavAnim("0")
  }, 1000)
  
  function homeLink (){
    setLine1P(false)
  }
  function sevicesLink (){
    setLine1P(true)
  }
  
  
  return(
       <div className="navCont">
         <div style={{top: navAnim}} className="navBlock G-flex G-align-center G-justify-around">
           <Link onClick={homeLink} to="/home" className="logoName">
             <img  src={SvgsData.logo} alt=""/>
           </Link>
  
           <div className="navigation-block">
    
             <Link onClick={homeLink} to="/home" className={`${Call("/") ? "nav-link lighting" : "nav-link"} ${Call("/home") ? "nav-link lighting" : "nav-link"}`}>Home</Link>
             <Link onClick ={sevicesLink} to="/brand_experiences" className={`${Call("/brand_experiences") ? "nav-link lighting" : "nav-link"}`}>Services</Link>
             <Link to="/home" className={`${Call("/About") ? "nav-link lighting" : "nav-link"}`}>About</Link>
             <Link to="/home" className={`${Call("/Work") ? "nav-link lighting" : "nav-link"}`}>Work</Link>
             <Link to="/home" className={`${Call("/Pricing") ? "nav-link lighting" : "nav-link"}`}>Pricing</Link>
             <Link to="/home" className={`${Call("/Contact") ? "nav-link lighting" : "nav-link"}`}>Contact</Link>
  
           </div>
           <Link to="/home" className="G-link-button">
             FyTrading
           </Link>
         </div>
       </div>
  )
}
export default Navigation
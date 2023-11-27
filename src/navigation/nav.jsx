import React from "react";
import {Link} from "react-router-dom";
import "./nav.scss"

function Navigation(){
  return(
       <div className="navBlock">
         <Link to="/home" className="logoName">
           <svg className="logo" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
             <g clip-path="url(#clip0_0_18675)">
               <path d="M12.8716 0H11.1309V6H12.8716V0Z" fill="#F9FB6C"/>
               <path d="M6.7546 1.1726L5.24707 2.04297L8.24707 7.23912L9.7546 6.36875L6.7546 1.1726Z" fill="#F9FB6C"/>
               <path d="M2.04225 5.24638L1.17188 6.75391L6.36803 9.75391L7.2384 8.24638L2.04225 5.24638Z" fill="#F9FB6C"/>
               <path d="M6 11.1289H0V12.8696H6V11.1289Z" fill="#F9FB6C"/>
               <path d="M6.36998 14.2461L1.17383 17.2461L2.0442 18.7536L7.24035 15.7536L6.36998 14.2461Z" fill="#F9FB6C"/>
               <path d="M8.24609 16.7648L5.24609 21.9609L6.75362 22.8313L9.75362 17.6352L8.24609 16.7648Z" fill="#F9FB6C"/>
               <path d="M12.8716 18H11.1309V24H12.8716V18Z" fill="#F9FB6C"/>
               <path d="M15.7536 16.7624L14.2461 17.6328L17.2461 22.829L18.7536 21.9586L15.7536 16.7624Z" fill="#F9FB6C"/>
               <path d="M17.6311 14.2464L16.7607 15.7539L21.9569 18.7539L22.8273 17.2464L17.6311 14.2464Z" fill="#F9FB6C"/>
               <path d="M24 11.1289H18V12.8696H24V11.1289Z" fill="#F9FB6C"/>
               <path d="M21.9569 5.24609L16.7607 8.24609L17.6311 9.75362L22.8273 6.75362L21.9569 5.24609Z" fill="#F9FB6C"/>
               <path d="M17.2461 1.17104L14.2461 6.36719L15.7536 7.23756L18.7536 2.04141L17.2461 1.17104Z" fill="#F9FB6C"/>
             </g>
             <defs>
               <clipPath id="clip0_0_18675">
                 <rect width="24" height="24" fill="white"/>
               </clipPath>
             </defs>
           </svg>
           <span className="name">FyTechnology</span>
         </Link>
         <div className="navigation-block">
           <Link to="/home" className="nav-link">Home</Link>
           <Link to="/home" className="nav-link">Services</Link>
           <Link to="/home" className="nav-link">About</Link>
           <Link to="/home" className="nav-link">Work</Link>
           <Link to="/home" className="nav-link">Pricing</Link>
           <Link to="/home" className="nav-link">Contact</Link>
         </div>
         <Link to="/home" className="button-fyTrading">
           FyTrading
         </Link>
       </div>
  )
}
export default Navigation
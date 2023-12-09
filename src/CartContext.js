import React, {createContext, useContext, useEffect, useState} from "react";
import {BlockData} from "./home/experiences-main/block/blockData";
import {useLocation} from "react-router-dom";
const CartContext = createContext();

export const CartProvider = ({children}) => {
  
  function Call(el, el2){
    const locat = useLocation()
    return el === locat.pathname
  }
  
  const [line1, setLine1] = useState({
    transform: "rotate3d(0, 1, 0, 90deg)",
    opacity  : "0",
    header   : "50px",
    prg      : "100px",
  });
  const [line1P, setLine1P] = useState(false);
  const [service, setService] = useState(800)
  
  window.addEventListener("scroll", function () {
    if (this.scrollY >= service) {
      setLine1P(true);
    }
  });
  
  
  
  
  
  
  return (<CartContext.Provider value={{
    line1,
    setLine1,
    line1P,
    setLine1P,
    service,
    setService,
    Call
  }}>
    {children}
  </CartContext.Provider>);
};

export const useCartContext = () => {
  return useContext(CartContext);
};
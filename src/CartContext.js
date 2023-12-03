import React, {createContext, useContext, useState} from "react";
import {BlockData} from "./home/experiences-main/block/blockData";
const CartContext = createContext();

export const CartProvider = ({children}) => {
  
  
  
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
    setService
  }}>
    {children}
  </CartContext.Provider>);
};

export const useCartContext = () => {
  return useContext(CartContext);
};
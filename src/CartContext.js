import React, {createContext, useContext, useEffect, useState} from "react";

const CartContext = createContext();

export const CartProvider = ({children}) => {
  const [light, setLight] = useState([])
  
  
  
  return (<CartContext.Provider value={{
  
  }}>
    {children}
  </CartContext.Provider>);
};

export const useCartContext = () => {
  return useContext(CartContext);
};
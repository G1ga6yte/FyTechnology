import React from "react";
import ReactDOM from "react-dom/client";
import {BrowserRouter} from "react-router-dom";
import "./index.css";
import "./styles/mixin.scss"
import "./icomoon/style.css"
import App from "./App";
import {CartProvider} from "./CartContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
   <BrowserRouter>
     <CartProvider>
       <App/>
     </CartProvider>
   </BrowserRouter>,
);


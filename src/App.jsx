import React from "react";
import {Route, Routes} from "react-router-dom";
import './App.scss';
import Home from "./home/home";
import Navigation from "./navigation/nav";

function App() {
  return (
    <div className="App">
      <div></div>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/home" element={<Home />}/>
      </Routes>
    </div>
  );
}

export default App;

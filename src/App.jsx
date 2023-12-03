import React from "react";
import {Route, Routes} from "react-router-dom";
import './App.scss';
import Home from "./home/home";
import Navigation from "./navigation/nav";
import AllExperiences from "./home/experiences-main/All-experiences/allExperiences";
import Footer from "./footer/footer";




function App() {
// window.addEventListener('scroll', function(){
//   console.log(this.scrollY);
// })

  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/home" element={<Home />}/>
        <Route path="/brand_experiences" element={<AllExperiences/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;

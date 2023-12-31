import React, {useState} from "react";
import {Route, Routes} from "react-router-dom";
import './App.scss';
import Home from "./home/home";
import Navigation from "./navigation/nav";
import AllExperiences from "./home/experiences-main/All-experiences/allExperiences";
import Footer from "./footer/footer";
import Pricing from "./pricing/Pricing";
import Contacts from "./contacts/contacts";
import Works from "./works/works";
import LinkToItem from "./works/itemBlock/linkToItem/linkToItem";
import LetsTalkToUsDialog from "./LetsTalkToUs/letsTalkToUs";




function App() {

  
  const [bottom, setBottom] = useState("-150px")
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };
  
  
  window.addEventListener("scroll", function () {
    if(this.scrollY >= 1000){
      if (window.innerWidth <= 665){
        setBottom("110px")
      }else{
        setBottom("50px")
      }
    } else {
      setBottom("-150px")
    }
    console.log(this.scrollY);
  });

  return (
    <div className="App">
      <LetsTalkToUsDialog />
   
      
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />}/>  // home
        <Route path="/home" element={<Home />}/> // home
        <Route path="/brand_experiences" element={<AllExperiences/>}/> // services
        <Route path="/works" element={<Works/>}/>
        <Route path="/pricing" element={<Pricing/>}/>
        <Route path="/contact" element={<Contacts/>}/>
        <Route path="/project/:id" element={<LinkToItem/>}/> // each Project Link
      </Routes>
      <Footer/>
      
      <button onClick={scrollToTop} style={{bottom: bottom}} className="pageUp">
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 72 72" fill="none">
          <path d="M36 57L36 15M36 15L15 36M36 15L57 36" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
    </div>
  );
}

export default App;

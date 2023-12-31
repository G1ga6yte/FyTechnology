import React from "react";
import "./home.scss"
import HomeMain from "./home-main/home-main";
import ExperiencesMain from "./experiences-main/experiences-main";
import CollabPartnership from "./colladb-partnership/collabPartnership";
import Ideas from "./ideas/ideas";
import PriceTab from "./priceTab/priceTab";
import Provided from "./provided-features/provided";
import OurTeam from "./ourTeam/ourTeam";
import Portfolio from "./portfolio/portfolio";
import Review from "./review/review";
import ClientsBlock from "./clientsBlock/clientsBlock";
import Photos from "./photos/photos";
import BeInTouch from "./beInTouch/beInTouch";


function Home(){
  return(
     <div className="home-cont">
       
       <HomeMain/>
       <ExperiencesMain/>
       <Photos/>
       <CollabPartnership/>
       
       <PriceTab/>
       <Provided/>
       <OurTeam/>
       <Portfolio/>
       
       <Review/>
       <Ideas/>
       <ClientsBlock/>
       
       <BeInTouch/>
     </div>
  )
}
export default Home
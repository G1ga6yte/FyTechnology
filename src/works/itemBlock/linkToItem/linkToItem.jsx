import React, {useEffect, useState} from "react";
import {ItemsData} from "../../itemsData";
import {useParams} from "react-router-dom";
import "./linkToItem.scss";

function LinkToItem() {
  const {id} = useParams();
  const [uniqueData, setUniqueData] = useState([]);
  
  useEffect(() => {
    const filteredData = ItemsData.filter((element) => element.id.toString() === id);
    if (filteredData.length > 0) {
      setUniqueData(filteredData);
    }
  }, [id]);
  
  const [random1, setRandom1] = useState({});
  const [random2, setRandom2] = useState({});
  
  useEffect(() => {
    let x1 = ItemsData[Math.round(Math.random() * (ItemsData.length-1))];
    let x2 = ItemsData[Math.round(Math.random() * (ItemsData.length-1))];
    setRandom1(x1);
    setRandom2(x2);
    console.log(x1);
    console.log(x2);
  }, random1, random2);
  
  
  return (
     <div className="LinkToItemBlock">
       {uniqueData.map((el) => {
         return (
            <div className="ItemCont">
              <div className="headerImage" style={{backgroundImage: `url("${el.img[0]}")`}}></div>
              
              <div className="miniInfoBlock">
                <h1 className="projectName">{el.projectName}</h1>
                <p className="prg">{el.descH}</p>
                
                <div className="usedSkills">
                  {el.skills.map((el) => {
                    return (
                       <div className="skill">
                         {el}
                       </div>
                    );
                  })}
                </div>
              </div>
              
              <div className="infoBlock">
                <span className="infoHeader">Description</span>
                <p className="infoPrg">{el.description}</p>
                
                <div className="infoBlockImg" style={{backgroundImage: `url("${el.img[0]}")`}}></div>
              </div>
              <div className="infoBlock">
                <span className="infoHeader">Concept</span>
                <p className="infoPrg">{el.concept}</p>
                
                <div className="infoBlockImg" style={{backgroundImage: `url("${el.img[0]}")`}}></div>
              </div>
              <div className="infoBlock">
                <span className="infoHeader">Tasks</span>
                <p className="infoPrg">{el.tasks}</p>
                
                <div className="infoBlockImg" style={{backgroundImage: `url("${el.img[0]}")`}}></div>
              </div>
              <div className="infoBlock">
                <span className="infoHeader">Result</span>
                <p className="infoPrg">{el.result}</p>
                
                <div className="infoBlockImg" style={{backgroundImage: `url("${el.img[0]}")`}}></div>
              </div>
              
              
              <div className="moreProjects">
                <p className="moreProjectsHeader">More Projects</p>
                
                <div className="projectsCont">
                  <div className="project">
                    <div className="projectImg" style={{backgroundImage: `url("${random1.img[0]}")`}}></div>
                    <div className="projectTextCont">
                      <div className="projectTextBlock">
                        <p className="nameHeader">{random1.projectName}</p>
                        <p className="prg">{random1.descH}</p>
                      </div>
                      <div className="usedSkills">
                        {random1.skills.map((el) => {
                          return (
                             <div className="skill">
                               {el}
                             </div>
                          );
                        })}
                      </div>
                    </div>
                    
                  </div>
  
                  <div className="project">
                    <div className="projectImg" style={{backgroundImage: `url("${random2.img[0]}")`}}></div>
                    <div className="projectTextCont">
                      <div className="projectTextBlock">
                        <p className="nameHeader">{random2.projectName}</p>
                        <p className="prg">{random2.descH}</p>
                      </div>
                      <div className="usedSkills">
                        {random2.skills.map((el) => {
                          return (
                             <div className="skill">
                               {el}
                             </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            
            </div>
         );
       })}
     </div>
  );
}

export default LinkToItem;
import React, {useState, useEffect} from "react";
import "./photos.scss";
import {PngData} from "./png/pngData";

function Photos(){
  const [index, setIndex] = useState(0)
  const [bck, setBck] = useState("")
  const [scale, setScale] = useState(1)
  const [transition, setTransition] = useState("5s ease-in-out")
  
  const [currentIndex, setCurrentIndex] = useState(0);
  
  useEffect(() => {
    const intervalId = setInterval(() => {
  
      if(currentIndex === PngData.length - 1) {
        setCurrentIndex(0);
      }
      else {
        setCurrentIndex(currentIndex + 1);
      }
    }, 4000)
    return () => clearInterval(intervalId);
  }, [currentIndex])
  
  
  
  useEffect(()=>{
    setTransition("none")
    setScale(1)
    const intervalStyle = setInterval(()=>{
      setTransition("5s ease-in-out")
      setScale(1.2)
      
    }, 100)
    return ()=> clearInterval(intervalStyle)
  }, [currentIndex])
  
  
  
  
  return(
     <div className="photosCont">
        <div style={{backgroundImage: `url('${PngData[currentIndex]}')`, transform: `scale(${scale})`, transition: transition}} className="png">
        
        </div>
     </div>
  )
}

export default Photos
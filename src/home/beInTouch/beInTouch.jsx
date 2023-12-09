import React, {useState, useEffect} from "react";
import "./beInTouch.scss"
import logo from"./svg/logo.svg"
import logoName from "./svg/logoName.svg"


function BeInTouch (){
  const [settings, setSettings] = useState({
    position: "relative",
    height: "100vh"
  })
  
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [heightPx, setHeightPx] = useState(4700)
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    
    window.addEventListener('resize', handleResize);
    
    if(windowWidth <= 1920){
      if(windowWidth <=1440){
        if (windowWidth <=1256){
         setHeightPx(9000)
        }else {
          setHeightPx(10600)
        }
      }else{
        setHeightPx(10880)
      }
    
    }
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  window.addEventListener('scroll',function(){
    if(this.scrollY >= 6810){
      setSettings({
        position: "fixed"
      })
      if(this.scrollY >= heightPx){ //10945 - 1920-1440
        setSettings({
          position: "relative",
          height: "100%"
        })
      }
    } else {
      setSettings({
        position: "relative",
        height: "100%"
      })
    }
  })
  
  document.addEventListener("mousemove", parallax);
  const [elem, setElem] = useState("")
// const elem = document.querySelector("#parallax");
// Magic happens here
  function parallax(e) {
    let _w = window.innerWidth/2;
    let _h = window.innerHeight/2;
    let _mouseX = e.clientX;
    let _mouseY = e.clientY;
    let wPosition = `${(_mouseX-_w)/10}px`
    let hPosition = `${(_mouseY-_h)/10}px`
    let x = `${wPosition}, ${hPosition}`;
    setElem(x)
    // elem.style.backgroundPosition = x;
  }

  return(
     <div style={{position: settings.position, height: settings.height}} className="beInTouch">
        <div className="beInTouchCont">
          <span className="beInTouchHeader">be in touch</span>

          <div className="circleCont">
              <div style={{transform: `translate(${elem})`}} className="circle">
                <img className="logo" src={logo} alt=""/>
                <img className="fytechnology" style={{marginTop: "30px"}} src={logoName} alt=""/>
              </div>
          </div>
        </div>
     </div>
  )
}

export default BeInTouch
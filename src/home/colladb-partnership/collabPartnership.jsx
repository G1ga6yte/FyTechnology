import React, {useEffect, useState} from "react";
import "./collabPartneship.scss";
import {CollabPartnerData} from "./collabPartnerData";
import {collabImg} from "./collabPartnerImg/collabPartnerImgData";
import {SvgsData} from "../../svgs/svgsData";

function CollabPartnership() {
  
  const [header, setHeader] = useState({
    marginTopHbefore: "80px", opacity: "0",
  });
  const [global, setGlobal] = useState({
    width: "0", opacity: "0", imgOpacity: "0", marginTopH: "50px", widthPrg: "0", marginLeftB: "400px",
  });
  const [block1, setBlock1] = useState(global);
  const [block2, setBlock2] = useState(global);
  const [block3, setBlock3] = useState(global);
  const [matrix, setMatrix] = useState({
    position: "relative", bottom: "0",
  });
  
  
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [heightPx, setHeightPx] = useState(4700);
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    
    window.addEventListener("resize", handleResize);
    
    if (windowWidth <= 1920) {
      if (windowWidth <= 1440) {
        if (windowWidth <= 1256) {
          if (windowWidth <= 1024){
            if (windowWidth <=992){
              if (windowWidth <= 950){
                if (windowWidth <= 876){
                  if (windowWidth <= 665){
                    if (windowWidth <=576){
                      if (windowWidth <= 375){
                        if (windowWidth <= 350){
                          setHeightPx(4300)
                        }else {
                          setHeightPx(4200)
                        }
                      }else {
                        if (window.innerHeight > 700){
                          setHeightPx(4100)
                        }else{
                          setHeightPx(4350)
                        }
                      }
                    }else {
                      setHeightPx(3000)
                    }
                  }else {
                    setHeightPx(2750)
                  }
                }else {
                  setHeightPx(3100)
                }
              }else {
                setHeightPx(2900)
              }
            }else{
              setHeightPx(3800)
            }
          }else{
            setHeightPx(3700);
          }
        } else {
          setHeightPx(4700);
        }
      } else {
        setHeightPx(4800);
      }
    }
    
    
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  
  let widthSet = [3100, 3400, 3900, 4300]
  if(window.innerWidth <= 1256){
    widthSet = [2200, 2500, 2900, 3100]
  
    if (window.innerWidth <= 876){
      widthSet = [1500, 1700, 1900, 2100]
      
    }
  }
  window.addEventListener("scroll", function () {
    if (this.scrollY >= widthSet[0]) {
      setHeader({
        marginTopHbefore: "0", opacity: "1",
      });
    }
    if (this.scrollY >= widthSet[1]) {
      setBlock1({
        width: "initial", opacity: "1", imgOpacity: "0.4", marginTopH: "0", widthPrg: "initial", marginLeftB: "0",
      });
    }
    if (this.scrollY >= widthSet[2]) {
      setBlock2({
        width: "initial", opacity: "1", imgOpacity: "0.4", marginTopH: "0", widthPrg: "initial", marginLeftB: "0",
      });
    }
    if (this.scrollY >= widthSet[3]) {
      setBlock3({
        width: "initial", opacity: "1", imgOpacity: "0.4", marginTopH: "0", widthPrg: "initial", marginLeftB: "0",
      });
    }
    
    
    if (this.scrollY >= heightPx) {
      if (windowWidth <= 665){
        setMatrix({
          position: "fixed", bottom: "50px",
        });
      } else {
        setMatrix({
          position: "fixed", bottom: "0",
        });
      }
      
      if (this.scrollY >= 7000) {
        setMatrix({
          position: "relative", bottom: "0",
        });
      } else {
        if (windowWidth <= 665){
          setMatrix({
            position: "fixed", bottom: "50px",
          });
        } else {
          setMatrix({
            position: "fixed", bottom: "0",
          });
        }
      }
    } else {
      setMatrix({
        position: "relative", bottom: "0",
      });
    }
  });
  
  
  return (<div className="CollabPartnershipBlock">
    <div style={{position: matrix.position, bottom: matrix.bottom}} className="CollabPartnership">
      <div className="headerBlock">
        <h2 style={{marginTop: header.marginTopHbefore, opacity: header.opacity}} className="collabHeader">Long-term
          collaboration & partnership</h2>
      </div>
      
      {CollabPartnerData.map((el) => {
        let x;
        if (el.id === 1) {
          x = block1;
        } else if (el.id === 2) {
          x = block2;
        } else {
          x = block3;
        }
        return (<div className="collabBlock" style={{backgroundImage: `url(${collabImg.bck})`}}>
          <img className="grid-img" src={collabImg.grid2} alt=""/>
          <img className="collabBlockStars" src={collabImg.stars} alt=""/>
          <img className="collabBlockStars" src={collabImg.stars} alt=""/>
          
          <div className="CDE-block">
            <img src={collabImg.star} alt=""/>
            <span style={{width: x.width, opacity: x.opacity}}
                  className="CDE-text">Crafting Digital Experiences</span>
          </div>
          
          <div className={`img-text-block ${el.reverse ? "reverse" : ""}`}>
            <div className="imageText">
              <img src={collabImg.grid} alt=""/>
              <span style={{opacity: x.imgOpacity}} className="imgText">{el.imgText}</span>
            </div>
            
            <div className="header-prg">
              <div className="itemHeaderBlock">
                      <span style={{marginTop: x.marginTopH, opacity: x.opacity}}
                            className="item-header">{el.header}</span>
              </div>
              <div className="itemPrgBlock">
                <p style={{width: x.widthPrg, opacity: x.opacity}} className="item-prg">{el.description}</p>
              </div>
              <div className="buttonBlock">
                <button style={{marginLeft: x.marginLeftB, opacity: x.opacity}}
                        className="item-button G-link-button">{el.button}</button>
              </div>
            </div>
          </div>
        </div>);
      })}
      
      
      <img className="ball1" src={collabImg.ball1} alt=""/>
      <img className="ball2" src={collabImg.ball2} alt=""/>
      <img className="ball3" src={collabImg.ball3} alt=""/>
      <div className="vector" style={{position: "absolute"}}>
        <img src={SvgsData.vector} style={{position: "absolute", left: 0, top: 0}} alt=""/>
        <img src={SvgsData.radial} style={{position: "absolute", left: 0, top: 0}} alt=""/>
      </div>
      <div className="vector" style={{position: "absolute"}}>
        <img src={SvgsData.vector} style={{position: "absolute", left: 0, top: 0}} alt=""/>
        <img src={SvgsData.radial} style={{position: "absolute", left: 0, top: 0}} alt=""/>
      </div>
    </div>
  
    <div onScroll={ ()=>{
      console.log(window.scrollY);
    }}></div>
  </div>);
}

export default CollabPartnership;
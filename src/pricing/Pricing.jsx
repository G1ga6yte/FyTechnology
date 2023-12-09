import React, {useState} from "react";
import "./pricing.scss";
import {SvgImgData} from "./svgs/svg-imgData";


function PricingCont() {
  const [settings, setSettings] = useState({
    marginTopOH : "30px",
    marginTopH  : "70px",
    marginTopBck: "150px",
    opc         : "0",
  });
  setTimeout(() => {
    setSettings({
      marginTopOH : "0",
      marginTopH  : "0",
      marginTopBck: "0",
      opc         : "1",
    });
  }, 1000);
  
  const [active, setActive] = useState("step1");
  const [loadLine, setLoadLine] = useState("10%");
  const [prevBtn, setPrevBtn] = useState("none");
  const [nextBtn, setNextBtn] = useState("block");
  const [finishBtn, setFinishBtn] = useState("none");
  const [steps, setSteps] = useState(1);
  const [step1, setStep1] = useState(false);
  const [step2, setStep2] = useState(false);
  const [step3, setStep3] = useState(false);
  const [step4, setStep4] = useState(false);
  
  
  function nextFromStep() {
    switch (active) {
      case "step1":
        setPrevBtn("flex");
        setSteps(2);
        setLoadLine("30%");
        setStep1(true);
        setActive("step2");
        break;
      case "step2":
        setSteps(3);
        setLoadLine("55%");
        setStep2(true);
        setActive("step3");
        break;
      case "step3":
        setFinishBtn("block");
        setNextBtn("none");
        setSteps(4);
        setLoadLine("80%");
        setStep3(true);
        setActive("step4");
        break;
      default:
        setActive("step1");
    }
  }
  
  function backFromStep() {
    switch (active) {
      case "step2":
        setPrevBtn("none");
        setSteps(1);
        setLoadLine("10%");
        setStep2(false);
        setActive("step1");
        break;
      case "step3":
        setSteps(2);
        setLoadLine("30%");
        setStep3(false);
        setActive("step2");
        break;
      case "step4":
        setFinishBtn("none");
        setNextBtn("block");
        setSteps(3);
        setLoadLine("55%");
        setStep4(false);
        setActive("step3");
        break;
      default:
        setActive("step1");
    }
  }
  
  //////////////////////// 1st step ////////////////////////////////
  
  
  const [selectedValue1, setSelectedValue1] = useState("text1");
  const [openedSelect1, setOpenedSelect1] = useState({
    border: "1px solid var(--grayscale-500, #D9D9D9)",
    rotate: "rotate(0deg)",
    color : "#AEAEAE",
  });
  const [optionsBlock1, setOptionsBlock1] = useState({
    height    : "0",
    visibility: "hidden",
    overflow  : "hidden",
  });
  
  function openOptions1() {
    if (openedSelect1.color === "#AEAEAE") {
      setOpenedSelect1({
        border: "1px solid var(--grayscale-500, #F9FB6C)",
        rotate: "rotate(180deg)",
        color : "#F9FB6C",
      });
    } else {
      setOpenedSelect1({
        border: "1px solid var(--grayscale-500, #D9D9D9)",
        rotate: "rotate(0deg)",
        color : "#AEAEAE",
      });
    }
    
    
    if (optionsBlock1.height === "200px") {
      setOptionsBlock1({
        height    : "0",
        visibility: "hidden",
        overflow  : "hidden",
      });
    } else {
      setOptionsBlock1({
        height    : "200px",
        visibility: "visible",
        overflow  : "auto",
      });
    }
    
  }
  
  function selectOption1(event) {
    setOpenedSelect1({
      border: "1px solid var(--grayscale-500, #D9D9D9)",
      rotate: "rotate(0deg)",
      color : "#AEAEAE",
    });
    console.log(event.innerText);
    setSelectedValue1(event.innerText);
    setOptionsBlock1({
      height    : "0",
      visibility: "hidden",
      overflow  : "hidden",
    });
  }
  
  
  ////////////////////////// 2nd step 1st question ////////////////////////////////
  
  
  const [selectedValue2, setSelectedValue2] = useState("text1");
  const [openedSelect2, setOpenedSelect2] = useState({
    border: "1px solid var(--grayscale-500, #D9D9D9)",
    rotate: "rotate(0deg)",
    color : "#AEAEAE",
  });
  const [optionsBlock2, setOptionsBlock2] = useState({
    height    : "0",
    visibility: "hidden",
    overflow  : "hidden",
  });
  
  function openOptions2() {
    if (openedSelect2.color === "#AEAEAE") {
      setOpenedSelect2({
        border: "1px solid var(--grayscale-500, #F9FB6C)",
        rotate: "rotate(180deg)",
        color : "#F9FB6C",
      });
    } else {
      setOpenedSelect2({
        border: "1px solid var(--grayscale-500, #D9D9D9)",
        rotate: "rotate(0deg)",
        color : "#AEAEAE",
      });
    }
    
    
    if (optionsBlock2.height === "200px") {
      setOptionsBlock2({
        height    : "0",
        visibility: "hidden",
        overflow  : "hidden",
      });
    } else {
      setOptionsBlock2({
        height    : "200px",
        visibility: "visible",
        overflow  : "auto",
      });
    }
    
  }
  
  function selectOption2(event) {
    setOpenedSelect2({
      border: "1px solid var(--grayscale-500, #D9D9D9)",
      rotate: "rotate(0deg)",
      color : "#AEAEAE",
    });
    console.log(event.innerText);
    setSelectedValue2(event.innerText);
    setOptionsBlock2({
      height    : "0",
      visibility: "hidden",
      overflow  : "hidden",
    });
  }
  
  /////////////////////////// 2th step 2nd question /////////////////////////
  const [selectedValue3, setSelectedValue3] = useState("text1");
  const [openedSelect3, setOpenedSelect3] = useState({
    border: "1px solid var(--grayscale-500, #D9D9D9)",
    rotate: "rotate(0deg)",
    color : "#AEAEAE",
  });
  const [optionsBlock3, setOptionsBlock3] = useState({
    height    : "0",
    visibility: "hidden",
    overflow  : "hidden",
  });
  
  function openOptions3() {
    if (openedSelect3.color === "#AEAEAE") {
      setOpenedSelect3({
        border: "1px solid var(--grayscale-500, #F9FB6C)",
        rotate: "rotate(180deg)",
        color : "#F9FB6C",
      });
    } else {
      setOpenedSelect3({
        border: "1px solid var(--grayscale-500, #D9D9D9)",
        rotate: "rotate(0deg)",
        color : "#AEAEAE",
      });
    }
    
    
    if (optionsBlock3.height === "200px") {
      setOptionsBlock3({
        height    : "0",
        visibility: "hidden",
        overflow  : "hidden",
      });
    } else {
      setOptionsBlock3({
        height    : "200px",
        visibility: "visible",
        overflow  : "auto",
      });
    }
    
  }
  
  function selectOption3(event) {
    setOpenedSelect3({
      border: "1px solid var(--grayscale-500, #D9D9D9)",
      rotate: "rotate(0deg)",
      color : "#AEAEAE",
    });
    console.log(event.innerText);
    setSelectedValue3(event.innerText);
    setOptionsBlock3({
      height    : "0",
      visibility: "hidden",
      overflow  : "hidden",
    });
  }
  
  /////////////////////////// 3th step 1st question /////////////////////////
  const [selectedValue4, setSelectedValue4] = useState("text1");
  const [openedSelect4, setOpenedSelect4] = useState({
    border: "1px solid var(--grayscale-500, #D9D9D9)",
    rotate: "rotate(0deg)",
    color : "#AEAEAE",
  });
  const [optionsBlock4, setOptionsBlock4] = useState({
    height    : "0",
    visibility: "hidden",
    overflow  : "hidden",
  });
  
  function openOptions4() {
    if (openedSelect4.color === "#AEAEAE") {
      setOpenedSelect4({
        border: "1px solid var(--grayscale-500, #F9FB6C)",
        rotate: "rotate(180deg)",
        color : "#F9FB6C",
      });
    } else {
      setOpenedSelect4({
        border: "1px solid var(--grayscale-500, #D9D9D9)",
        rotate: "rotate(0deg)",
        color : "#AEAEAE",
      });
    }
    
    
    if (optionsBlock4.height === "200px") {
      setOptionsBlock4({
        height    : "0",
        visibility: "hidden",
        overflow  : "hidden",
      });
    } else {
      setOptionsBlock4({
        height    : "200px",
        visibility: "visible",
        overflow  : "auto",
      });
    }
    
  }
  
  function selectOption4(event) {
    setOpenedSelect4({
      border: "1px solid var(--grayscale-500, #D9D9D9)",
      rotate: "rotate(0deg)",
      color : "#AEAEAE",
    });
    console.log(event.innerText);
    setSelectedValue4(event.innerText);
    setOptionsBlock4({
      height    : "0",
      visibility: "hidden",
      overflow  : "hidden",
    });
  }
  
  /////////////////////////// 3th step 2st question /////////////////////////
  const [selectedValue5, setSelectedValue5] = useState("text1");
  const [openedSelect5, setOpenedSelect5] = useState({
    border: "1px solid var(--grayscale-500, #D9D9D9)",
    rotate: "rotate(0deg)",
    color : "#AEAEAE",
  });
  const [optionsBlock5, setOptionsBlock5] = useState({
    height    : "0",
    visibility: "hidden",
    overflow  : "hidden",
  });
  
  function openOptions5() {
    if (openedSelect5.color === "#AEAEAE") {
      setOpenedSelect5({
        border: "1px solid var(--grayscale-500, #F9FB6C)",
        rotate: "rotate(180deg)",
        color : "#F9FB6C",
      });
    } else {
      setOpenedSelect5({
        border: "1px solid var(--grayscale-500, #D9D9D9)",
        rotate: "rotate(0deg)",
        color : "#AEAEAE",
      });
    }
    
    
    if (optionsBlock5.height === "200px") {
      setOptionsBlock5({
        height    : "0",
        visibility: "hidden",
        overflow  : "hidden",
      });
    } else {
      setOptionsBlock5({
        height    : "200px",
        visibility: "visible",
        overflow  : "auto",
      });
    }
    
  }
  
  function selectOption5(event) {
    setOpenedSelect5({
      border: "1px solid var(--grayscale-500, #D9D9D9)",
      rotate: "rotate(0deg)",
      color : "#AEAEAE",
    });
    console.log(event.innerText);
    setSelectedValue5(event.innerText);
    setOptionsBlock5({
      height    : "0",
      visibility: "hidden",
      overflow  : "hidden",
    });
  }
  
  
  const [imageSrcList, setImageSrcList] = useState([]);
  const handleImage = (event) => {
    const input = event.target;
    
    if (input.files && input.files.length > 0) {
      const newImages = Array.from(input.files).map((file) => {
        return URL.createObjectURL(file);
      });
      
      // Update the image source list
      setImageSrcList((prevImages) => [...prevImages, ...newImages]);
    }
  };
  const removeProduct = (index) => {
    setImageSrcList(old => {
      return old.filter(el => el !== index);
    });
  };
  
  return (
     <div className="Pricing">
       
       <div className="HeaderBlock">
         <div className="overHeaderBlock">
           <p style={{marginTop: settings.marginTopOH, opacity: settings.opc}} className="overHeader"><img
              src={SvgImgData.star} alt=""/>We make future for u</p>
         </div>
         
         <div className="headerBlock">
           <h1 style={{marginTop: settings.marginTopOH, opacity: settings.opc}} className="header">Cost calculator</h1>
         </div>
         
         <div className="bckHeaderBlock">
           <span style={{marginTop: settings.marginTopOH, opacity: settings.opc}} className="bckHeader">Price</span>
         </div>
       </div>
       
       <div className="priceOverPrg">
         <p className="overPrg">
           The calculator allows you to estimate the cost of developing a mobile application based on basic
           requirements. If you don't understand any of the mandatory parameters, hover your mouse cursor over the
           tooltip icon to get a consultation. The intermediate cost estimate may be adjusted with each of your choices.
           You can make adjustments at each stage of the estimation.
         </p>
       </div>
       
       <div className="priceContentPrice">
         <div className="priceContentCont">
           <div className="priceContent">
             
             <div className="loadLine" style={{width: loadLine}}></div>
             <div className="steps"><span>step {steps}/4</span></div>
             
             
             <div
                className={`${active === "step1" ? "active stepBlock" : "stepBlock"} ${step1 === true ? " passed" : " noPassed"}`}>
               
               <p className="overInputPrg">Choose service*</p>
               
               <div className="selectCont">
                 <div onClick={openOptions1} style={{border: openedSelect1.border}} className="selectBlock">
                   <span className="selectedValue">{selectedValue1}</span>
                   <svg style={{transform: openedSelect1.rotate}} xmlns="http://www.w3.org/2000/svg" width="24"
                        height="24" viewBox="0 0 24 24" fill="none">
                     <path d="M6 9L12 15L18 9" stroke={`${openedSelect1.color}`} stroke-width="2" stroke-linecap="round"
                           stroke-linejoin="round"/>
                   </svg>
                 </div>
                 
                 <div style={{
                   height    : optionsBlock1.height,
                   overflow  : optionsBlock1.overflow,
                   visibility: optionsBlock1.visibility,
                 }} className="optionsBlock">
                  <span onClick={(el) => {
                    selectOption1(el.target.valueOf());
                  }} className="option">text1</span>
                   <span onClick={(el) => {
                     selectOption1(el.target.valueOf());
                   }} className="option">text2</span>
                   <span onClick={(el) => {
                     selectOption1(el.target.valueOf());
                   }} className="option">text3</span>
                   <span onClick={(el) => {
                     selectOption1(el.target.valueOf());
                   }} className="option">text4</span>
                   <span onClick={(el) => {
                     selectOption1(el.target.valueOf());
                   }} className="option">text5</span>
                   <span onClick={(el) => {
                     selectOption1(el.target.valueOf());
                   }} className="option">text6</span>
                   <span onClick={(el) => {
                     selectOption1(el.target.valueOf());
                   }} className="option">text7</span>
                   <span onClick={(el) => {
                     selectOption1(el.target.valueOf());
                   }} className="option">text8</span>
                 </div>
               </div>
             
             </div>
             
             <div
                className={`${active === "step2" ? "active stepBlock" : "stepBlock"} ${step2 === true ? " passed" : " noPassed"}`}>
               
               <p className="overInputPrg">Application type*</p>
               <div className="selectCont">
                 <div onClick={openOptions2} style={{border: openedSelect2.border}} className="selectBlock">
                   <span className="selectedValue">{selectedValue2}</span>
                   <svg style={{transform: openedSelect2.rotate}} xmlns="http://www.w3.org/2000/svg" width="24"
                        height="24" viewBox="0 0 24 24" fill="none">
                     <path d="M6 9L12 15L18 9" stroke={`${openedSelect2.color}`} stroke-width="2" stroke-linecap="round"
                           stroke-linejoin="round"/>
                   </svg>
                 </div>
                 
                 <div style={{
                   height    : optionsBlock2.height,
                   overflow  : optionsBlock2.overflow,
                   visibility: optionsBlock2.visibility,
                 }} className="optionsBlock">
                  <span onClick={(el) => {
                    selectOption2(el.target.valueOf());
                  }} className="option">text1</span>
                   <span onClick={(el) => {
                     selectOption2(el.target.valueOf());
                   }} className="option">text2</span>
                   <span onClick={(el) => {
                     selectOption2(el.target.valueOf());
                   }} className="option">text3</span>
                   <span onClick={(el) => {
                     selectOption2(el.target.valueOf());
                   }} className="option">text4</span>
                   <span onClick={(el) => {
                     selectOption2(el.target.valueOf());
                   }} className="option">text5</span>
                   <span onClick={(el) => {
                     selectOption2(el.target.valueOf());
                   }} className="option">text6</span>
                   <span onClick={(el) => {
                     selectOption2(el.target.valueOf());
                   }} className="option">text7</span>
                   <span onClick={(el) => {
                     selectOption2(el.target.valueOf());
                   }} className="option">text8</span>
                 </div>
               </div>
               
               <p className="overInputPrg">Data server (API)*</p>
               <div className="selectCont">
                 <div onClick={openOptions3} style={{border: openedSelect3.border}} className="selectBlock">
                   <span className="selectedValue">{selectedValue3}</span>
                   <svg style={{transform: openedSelect3.rotate}} xmlns="http://www.w3.org/2000/svg" width="24"
                        height="24" viewBox="0 0 24 24" fill="none">
                     <path d="M6 9L12 15L18 9" stroke={`${openedSelect3.color}`} stroke-width="2" stroke-linecap="round"
                           stroke-linejoin="round"/>
                   </svg>
                 </div>
                 
                 <div style={{
                   height    : optionsBlock3.height,
                   overflow  : optionsBlock3.overflow,
                   visibility: optionsBlock3.visibility,
                 }} className="optionsBlock">
                  <span onClick={(el) => {
                    selectOption3(el.target.valueOf());
                  }} className="option">text1</span>
                   <span onClick={(el) => {
                     selectOption3(el.target.valueOf());
                   }} className="option">text2</span>
                   <span onClick={(el) => {
                     selectOption3(el.target.valueOf());
                   }} className="option">text3</span>
                   <span onClick={(el) => {
                     selectOption3(el.target.valueOf());
                   }} className="option">text4</span>
                   <span onClick={(el) => {
                     selectOption3(el.target.valueOf());
                   }} className="option">text5</span>
                   <span onClick={(el) => {
                     selectOption3(el.target.valueOf());
                   }} className="option">text6</span>
                   <span onClick={(el) => {
                     selectOption3(el.target.valueOf());
                   }} className="option">text7</span>
                   <span onClick={(el) => {
                     selectOption3(el.target.valueOf());
                   }} className="option">text8</span>
                 </div>
               </div>
             
             
             </div>
             
             <div
                className={`${active === "step3" ? "active stepBlock" : "stepBlock"} ${step3 === true ? "passed" : "noPassed"}`}>
               
               <p className="overInputPrg">Design type*</p>
               <div className="selectCont">
                 <div onClick={openOptions4} style={{border: openedSelect4.border}} className="selectBlock">
                   <span className="selectedValue">{selectedValue4}</span>
                   <svg style={{transform: openedSelect4.rotate}} xmlns="http://www.w3.org/2000/svg" width="24"
                        height="24" viewBox="0 0 24 24" fill="none">
                     <path d="M6 9L12 15L18 9" stroke={`${openedSelect4.color}`} stroke-width="2" stroke-linecap="round"
                           stroke-linejoin="round"/>
                   </svg>
                 </div>
                 
                 <div style={{
                   height    : optionsBlock4.height,
                   overflow  : optionsBlock4.overflow,
                   visibility: optionsBlock4.visibility,
                 }} className="optionsBlock">
                  <span onClick={(el) => {
                    selectOption4(el.target.valueOf());
                  }} className="option">text1</span>
                   <span onClick={(el) => {
                     selectOption4(el.target.valueOf());
                   }} className="option">text2</span>
                   <span onClick={(el) => {
                     selectOption4(el.target.valueOf());
                   }} className="option">text3</span>
                   <span onClick={(el) => {
                     selectOption4(el.target.valueOf());
                   }} className="option">text4</span>
                   <span onClick={(el) => {
                     selectOption4(el.target.valueOf());
                   }} className="option">text5</span>
                   <span onClick={(el) => {
                     selectOption4(el.target.valueOf());
                   }} className="option">text6</span>
                   <span onClick={(el) => {
                     selectOption4(el.target.valueOf());
                   }} className="option">text7</span>
                   <span onClick={(el) => {
                     selectOption4(el.target.valueOf());
                   }} className="option">text8</span>
                 </div>
               </div>
               
               <div className="selectFilesCont">
                 <div className="selectsBlock">
                   <p className="overInputPrg">What has already been done?*</p>
                   <div className="selectCont">
                     <div onClick={openOptions5} style={{border: openedSelect5.border}} className="selectBlock">
                       <span className="selectedValue">{selectedValue5}</span>
                       <svg style={{transform: openedSelect5.rotate}} xmlns="http://www.w3.org/2000/svg" width="24"
                            height="24" viewBox="0 0 24 24" fill="none">
                         <path d="M6 9L12 15L18 9" stroke={`${openedSelect5.color}`} stroke-width="2"
                               stroke-linecap="round" stroke-linejoin="round"/>
                       </svg>
                     </div>
                     
                     <div style={{
                       height    : optionsBlock5.height,
                       overflow  : optionsBlock5.overflow,
                       visibility: optionsBlock5.visibility,
                     }} className="optionsBlock">
                  <span onClick={(el) => {
                    selectOption5(el.target.valueOf());
                  }} className="option">text1</span>
                       <span onClick={(el) => {
                         selectOption5(el.target.valueOf());
                       }} className="option">text2</span>
                       <span onClick={(el) => {
                         selectOption5(el.target.valueOf());
                       }} className="option">text3</span>
                       <span onClick={(el) => {
                         selectOption5(el.target.valueOf());
                       }} className="option">text4</span>
                       <span onClick={(el) => {
                         selectOption5(el.target.valueOf());
                       }} className="option">text5</span>
                       <span onClick={(el) => {
                         selectOption5(el.target.valueOf());
                       }} className="option">text6</span>
                       <span onClick={(el) => {
                         selectOption5(el.target.valueOf());
                       }} className="option">text7</span>
                       <span onClick={(el) => {
                         selectOption5(el.target.valueOf());
                       }} className="option">text8</span>
                     </div>
                   </div>
                 </div>
                 <div className="fileBlock">
                   <p className="overInputPrg">What has already been done?*</p>
                   
                   <div className="dropImagesBlock">
                     <div className="images">
                       {imageSrcList.length > 0 && (
                          <div className="imagesCont">
                            {imageSrcList.map((imageSrc, index) => (
                               <div className="imgBlock" key={index}
                                    style={{backgroundImage: `url("${imageSrc}")`, width: "50px", height: "50px"}}>
                                 <button onClick={(index) => {
                                   removeProduct(imageSrc);
                                 }} className="deleteImg">x
                                 </button>
                               </div>
                            ))}
                          
                          </div>
                       )}
                     
                     </div>
                     
                     <div className="dropAddBlock" style={{backgroundImage: `url("${SvgImgData.imgImport}")`}}>
                       <label htmlFor="files" className="btn">Browse Files</label>
                       <input onChange={handleImage} accept="image/*" multiple type="file" id="files"
                              style={{display: "none"}}/>
                     </div>
                   
                   </div>
                 
                 </div>
               
               </div>
               
               <p className="overInputPrg">Number of screens (transitions)*</p>
               <input defaultValue={1} className="Input screens" type="number"/>
               
               <div className="radioBlocks">
                 <div className="radioBlock">
                   <p className="overInputPrg">Screen type*</p>
                   
                   <div className="radioLine">
                     <input defaultChecked className="radioInput" type="radio" id="smart" name="screenType"
                            value="smart"/>
                     <label className="label" htmlFor="smart">Smartphone only</label>
                   </div>
                   
                   <div className="radioLine">
                     <input className="radioInput" type="radio" id="tablet" name="screenType" value="tablet"/>
                     <label className="label" htmlFor="tablet">Tablet only</label>
                   </div>
                   
                   <div className="radioLine">
                     <input className="radioInput" type="radio" id="smartTabletA" name="screenType"
                            value="smartTabletA"/>
                     <label className="label" htmlFor="smartTabletA">Smartphone + tablet adaptive</label>
                   </div>
                   
                   <div className="radioLine">
                     <input className="radioInput" type="radio" id="smartTabletS" name="screenType"
                            value="smartTabletS"/>
                     <label className="label" htmlFor="smartTabletS">Smartphone and tablet separately</label>
                   </div>
                 
                 </div>
                 
                 <div className="radioBlock">
                   <p className="overInputPrg">Screen mode*</p>
                   
                   <div className="radioLine">
                     <input defaultChecked className="radioInput" type="radio" id="vert" name="screenMode"
                            value="vert"/>
                     <label className="label" htmlFor="vert">Vertical (portrait)</label>
                   </div>
                   
                   <div className="radioLine">
                     <input className="radioInput" type="radio" id="horiz" name="screenMode" value="horiz"/>
                     <label className="label" htmlFor="horiz">Horizontal (landscape)</label>
                   </div>
                   
                   <div className="radioLine">
                     <input className="radioInput" type="radio" id="vertHoriz" name="screenMode" value="vertHoriz"/>
                     <label className="label" htmlFor="vertHoriz">Vertical + Horizontal</label>
                   </div>
                 </div>
               </div>
             
             </div>
             
             <div
                className={`${active === "step4" ? "active stepBlock" : "stepBlock"} ${step4 === true ? "passed" : "noPassed"}`}>
               <p className="overInputPrg">Application Description*</p>
               <textarea placeholder="Add Description" className="descriptionArea" name="description" id="description"
                         cols="30" rows="6"></textarea>
               
               <div className="inputsBlock">
                 <div className="eachInputBlock">
                   <p className="overInputPrg">Contact person*</p>
                   <input placeholder="text" className="inputText" type="text"/>
                 </div>
                 <div className="eachInputBlock">
                   <p className="overInputPrg">Company</p>
                   <input placeholder="text" className="inputText" type="text"/>
                 </div>
                 <div className="eachInputBlock">
                   <p className="overInputPrg">Phone*</p>
                   <input placeholder="text" className="inputText" type="number"/>
                 </div>
                 <div className="eachInputBlock">
                   <p className="overInputPrg">Email*</p>
                   <input placeholder="text" className="inputText" type="email"/>
                 </div>
               </div>
             </div>
             
             
             <div className="buttons">
               <button style={{display: prevBtn}} onClick={backFromStep}><img src={SvgImgData.arrowLeft} alt=""/>
               </button>
               <button className="G-link-button" style={{display: nextBtn}} onClick={nextFromStep}>Next</button>
               <button className="G-link-button" style={{display: finishBtn}}>Finish</button>
             </div>
  
  
             <img src={SvgImgData.bck} className="bck" alt=""/>
             <img src={SvgImgData.grid} className="grid" alt=""/>
             <img src={SvgImgData.stars} className="stars" alt=""/>
             <img src={SvgImgData.stars} className="stars1" alt=""/>
           </div>
         </div>
         
         <div className="totalPriceCont" style={{backgroundImage: `url("${SvgImgData.bck}") !important`}}>
           <img className="stars" src={SvgImgData.stars} alt=""/>
           <img className="grid" src={SvgImgData.grid} alt=""/>
           
           <p className="pricePrg">Estimate of the project</p>
           <span className="price"><span>222.000</span> $</span>
           
           <div className="underLine"></div>
           
           <span className="questionPrg">Any questions?</span>
           <button className="G-square-button">Let’s Talk Us</button>
         </div>
       </div>
       
       <div className="vectors">
         <div className="vector" style={{position: "absolute"}}>
           <img src={SvgImgData.vector} alt=""/>
         </div>
         <div className="vector" style={{position: "absolute"}}>
           <img src={SvgImgData.vector} alt=""/>
         </div>
         <div className="vector" style={{position: "absolute"}}>
           <img src={SvgImgData.vector} alt=""/>
         </div>
         <div className="vector" style={{position: "absolute"}}>
           <img src={SvgImgData.vector} alt=""/>
         </div>
       </div>
       <svg className="lineSVG" xmlns="http://www.w3.org/2000/svg" width="100%" height="1731" viewBox="0 0 1695 1731"
            fill="none">
         <path opacity="0.1"
               d="M-606.384 2822.98C-661.321 2712.02 -353.321 2470 -477.291 2276.64C-738.094 1869.87 713.532 2041.49 620.875 1768.82C435.899 1224.47 2040.13 96.6276 2022.54 0.812606M-791.746 2443.01C-682.154 2497.65 -434.339 2536.22 -319.809 2253.36C-176.646 1899.79 -268.142 1489.88 113.808 1352.05C495.759 1214.22 1121.4 1324.97 1103.03 964.144M-624.556 2792.77C-671.658 2689.7 -366.524 2461.03 -479.137 2263.42C-720.703 1859.18 657.44 2003.11 587.384 1736.86C429.405 1211.86 1987.03 143.004 1969.41 34.5691M-642.727 2762.56C-681.994 2667.38 -379.726 2452.07 -480.982 2250.19C-703.312 1848.48 601.35 1964.73 553.894 1704.89C422.911 1199.26 1933.94 189.379 1916.28 68.325M-660.899 2732.35C-692.331 2645.05 -392.929 2443.11 -482.828 2236.96C-685.921 1837.79 545.258 1926.34 520.403 1672.93C416.417 1186.65 1880.84 235.756 1863.15 102.081M-679.069 2702.14C-702.667 2622.73 -406.131 2434.14 -484.672 2223.74C-668.529 1827.1 489.168 1887.96 486.913 1640.97C409.923 1174.05 1827.75 282.132 1810.02 135.838M-697.241 2671.93C-713.004 2600.4 -419.334 2425.18 -486.518 2210.51C-651.139 1816.41 433.077 1849.58 453.422 1609.01C403.429 1161.44 1774.66 328.508 1756.89 169.594M-715.412 2641.72C-723.341 2578.08 -432.537 2416.22 -488.364 2197.29C-633.748 1805.72 376.986 1811.19 419.931 1577.04C396.934 1148.84 1721.56 374.884 1703.76 203.351M-733.584 2611.51C-733.678 2555.75 -445.739 2407.25 -490.209 2184.06C-616.357 1795.02 320.895 1772.81 386.441 1545.08C390.44 1136.24 1668.47 421.26 1650.63 237.107M-751.755 2581.3C-744.015 2533.43 -458.942 2398.29 -492.055 2170.84C-598.966 1784.33 264.804 1734.42 352.95 1513.12C383.946 1123.63 1615.38 467.635 1597.49 270.863M-769.927 2551.09C-754.352 2511.1 -472.145 2389.33 -493.901 2157.61C-581.575 1773.64 208.712 1696.04 319.459 1481.16C377.451 1111.03 1562.28 514.011 1544.36 304.619M-788.098 2520.87C-764.688 2488.78 -485.347 2380.36 -495.746 2144.39C-564.184 1762.95 152.622 1657.66 285.968 1449.19C370.958 1098.42 1509.19 560.387 1491.23 338.375M-806.269 2490.67C-775.024 2466.45 -498.549 2371.4 -497.591 2131.16C-546.793 1752.26 96.531 1619.27 252.478 1417.23C364.464 1085.82 1456.1 606.764 1438.1 372.132M-824.44 2460.46C-785.361 2444.13 -511.752 2362.44 -499.436 2117.94C-529.402 1741.57 40.4402 1580.89 218.988 1385.27C357.97 1073.21 1403.01 653.14 1384.97 405.888M-837.325 2437.1C-790.411 2428.66 -519.669 2360.33 -495.996 2111.57C-506.725 1737.73 -10.365 1549.36 190.783 1360.16C356.761 1067.46 1355.2 706.37 1337.12 446.499M-839.434 2427.72C-784.686 2427.16 -516.809 2372.19 -481.779 2119.17C-473.271 1747.86 -50.3934 1531.8 173.355 1349.02C366.33 1075.69 1318.17 773.574 1300.06 501.083M-839.211 2421.36C-776.628 2428.69 -511.617 2387.08 -465.23 2129.8C-437.486 1761.02 -88.0898 1517.27 158.259 1340.91C378.23 1086.93 1283.47 843.8 1265.32 558.69M-833.263 2422.42C-762.845 2437.64 -500.7 2409.39 -442.955 2147.85C-395.975 1781.61 -120.061 1510.16 148.888 1340.22C395.856 1105.6 1254.49 921.451 1236.31 623.721M-825.041 2426.43C-746.789 2449.53 -487.51 2434.65 -418.408 2168.84C-352.191 1805.14 -149.759 1506 141.79 1342.48C415.754 1127.22 1227.79 1002.05 1209.57 691.7M-816.744 2430.54C-730.656 2461.53 -474.243 2460.01 -393.785 2189.94C-308.331 1828.76 -179.381 1501.94 134.768 1344.84C435.729 1148.94 1201.17 1082.75 1182.91 759.776M-808.421 2434.69C-714.499 2473.56 -460.952 2485.4 -369.136 2211.07C-264.447 1852.43 -208.979 1497.91 127.771 1347.23C455.729 1170.69 1174.57 1163.47 1156.27 827.886M-800.087 2438.85C-698.33 2485.6 -447.649 2510.81 -344.476 2232.21C-220.549 1876.1 -238.563 1493.89 120.787 1349.64C475.741 1192.45 1147.98 1244.22 1129.65 896.011"
               stroke="#3E5D6C" stroke-width="4"/>
       </svg>
     </div>
  );
}

export default PricingCont;
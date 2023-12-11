import React, {useState} from "react";
import "./experiences-main.scss"
import {SvgsData} from "../../svgs/svgsData";
import Block from "./block/block";
import Slider from "react-slick";

function ExperiencesMain (){
  const [speed, setSpeed] = useState(0)
  const [paddingTopS, setPaddingTopS] = useState("200px")
  const [opcS, setOpcS] = useState("0")
  const [paddingTopP, setPaddingTopP] = useState("100px")
  const [opcP, setOpcP] = useState("0")
  const [marginTopH, setMarginTopH] = useState("350px")
  const [marginTopB, setMarginTopB] = useState("100px")
  const [opcH, setOpcH] = useState("0")
  
  const [x, setX] = useState(null)
  
  
  let y
  let widthSet = [200, 400, 550]
  if(window.innerWidth <= 1256){
    widthSet = [100, 150, 250]
    if (window.innerWidth <= 876){
      widthSet = [50, 100, 150]
      if (window.innerWidth <= 576){
        y = 3
      }else{
        y = 4
      }
    }else{
      y = 5
    }
  } else{
   y = 7
  }
  
  
  
  let settings = {
    infinite: true,
    speed: speed,
    slidesToShow: y,
    slidesToScroll: 14,
    arrows        : false,
    autoplay      : true,
    autoplaySpeed : 0,
    easing: "linear",
    cssEase: "linear"
  };

  
  
  window.addEventListener('scroll', function(){
    if (this.scrollY >= widthSet[0]){
      setPaddingTopS("0")
      setOpcS("1")
      setTimeout(()=>{
        setSpeed(25000)
      },1000)
    }
    if (this.scrollY >= widthSet[1]){
      setPaddingTopP("0")
      setOpcS("1")
    }
    if (this.scrollY >= widthSet[2]){
      setMarginTopH("15px")
      setMarginTopB("-75px")
      setOpcH("1")
    }
  })
  
  
  
  return(
     <div className="ExperiencesMain">
        <div style={{opacity: opcS}} className="programs">
          <Slider style={{marginTop: paddingTopS, transition: "1s ease-in-out"}} {...settings}>
            <span><img src={SvgsData.airbnb} alt=""/></span>
            <span><img src={SvgsData.oracle} alt=""/></span>
            <span><img src={SvgsData.binance} alt=""/></span>
            <span><img src={SvgsData.aws} alt=""/></span>
            <span><img src={SvgsData.tesla} alt=""/></span>
            <span><img src={SvgsData.oppo} alt=""/></span>
            <span><img src={SvgsData.vercel} alt=""/></span>
            <span><img src={SvgsData.stripe} alt=""/></span>
          </Slider>
          
        </div>
       
       <div className="experiencesMainBlock">
         <div className="topLine"></div>
         
         
         <div className="vector-radialBlocksMain">
           <div  className="vector" style={{position:"absolute"}}>
             <img src={SvgsData.vector} style={{position:"absolute", left:0, top: 0}} alt=""/>
             <img src={SvgsData.radial} style={{position:"absolute", left:0, top: 0}} alt=""/>
           </div>
           <div  className="vector" style={{position:"absolute"}}>
             <img src={SvgsData.vector} style={{position:"absolute", left:0, top: 0}} alt=""/>
             <img src={SvgsData.radial} style={{position:"absolute", left:0, top: 0}} alt=""/>
           </div>
           <div  className="vector" style={{position:"absolute"}}>
             <img src={SvgsData.vector} style={{position:"absolute", left:0, top: 0}} alt=""/>
             <img src={SvgsData.radial} style={{position:"absolute", left:0, top: 0}} alt=""/>
           </div>
           <div className="vector" style={{position:"absolute"}}>
             <img src={SvgsData.vector} style={{position:"absolute", left:0, top: 0}} alt=""/>
             <img src={SvgsData.radial} style={{position:"absolute", left:0, top: 0}} alt=""/>
           </div>
           <div  className="vector" style={{position:"absolute"}}>
             <img src={SvgsData.vector} style={{position:"absolute", left:0, top: 0}} alt=""/>
             <img src={SvgsData.radial} style={{position:"absolute", left:0, top: 0}} alt=""/>
           </div>
           <div  className="vector" style={{position:"absolute"}}>
             <img src={SvgsData.vector} style={{position:"absolute", left:0, top: 0}} alt=""/>
             <img src={SvgsData.radial} style={{position:"absolute", left:0, top: 0}} alt=""/>
           </div>
           <div  className="vector" style={{position:"absolute"}}>
             <img src={SvgsData.vector} style={{position:"absolute", left:0, top: 0}} alt=""/>
             <img src={SvgsData.radial} style={{position:"absolute", left:0, top: 0}} alt=""/>
           </div>
           <div  className="vector" style={{position:"absolute"}}>
             <img src={SvgsData.vector} style={{position:"absolute", left:0, top: 0}} alt=""/>
             <img src={SvgsData.radial} style={{position:"absolute", left:0, top: 0}} alt=""/>
           </div>
           <div className="vector" style={{position:"absolute"}}>
             <img src={SvgsData.vector} style={{position:"absolute", left:0, top: 0}} alt=""/>
             <img src={SvgsData.radial} style={{position:"absolute", left:0, top: 0}} alt=""/>
           </div>
         </div>
         
         <div className="linear-background">
           <svg xmlns="http://www.w3.org/2000/svg" width="1920" height="2525" viewBox="0 0 1695 2525" fill="none">
             <path opacity="0.1" d="M-101.384 2524.69C-158.786 2415.64 109.406 2204.32 -16.5886 2012.52C-281.649 1609.03 1063.81 1862.54 961.683 1597.17C757.808 1067.39 2162.93 93.1015 2140.82 0.781583M-295.411 2151.41C-191.248 2210.24 39.0177 2262.34 126.775 2000.13C236.472 1672.37 126.898 1276.4 469.556 1168.88C812.214 1061.35 1394.38 1205.63 1355.09 860.932M-119.969 2494.8C-169.677 2393.75 96.7089 2194.96 -19.1066 1999.81C-266.322 1599.93 1009.85 1822.51 928.903 1564.66C751.054 1054.98 2116.99 133.963 2094.06 29.6246M-138.552 2464.91C-180.567 2371.85 84.0128 2185.61 -21.6242 1987.11C-250.994 1590.83 955.888 1782.48 896.125 1532.14C744.3 1042.58 2071.05 174.823 2047.3 58.4672M-157.137 2435.02C-191.458 2349.95 71.316 2176.25 -24.1422 1974.4C-235.666 1581.73 901.928 1742.46 863.345 1499.63C737.546 1030.18 2025.1 215.684 2000.54 87.3102M-175.72 2405.13C-202.347 2328.05 58.6205 2166.9 -26.6591 1961.69C-220.338 1572.63 847.97 1702.43 830.567 1467.12C730.793 1017.77 1979.16 256.546 1953.78 116.154M-194.304 2375.23C-213.238 2306.16 45.9238 2157.55 -29.1772 1948.99C-205.01 1563.53 794.01 1662.4 797.787 1434.61C724.039 1005.37 1933.22 297.406 1907.02 144.997M-212.888 2345.34C-224.129 2284.26 33.2271 2148.2 -31.6953 1936.28C-189.682 1554.43 740.051 1622.37 765.008 1402.1C717.285 992.964 1887.28 338.267 1860.26 173.839M-231.472 2315.45C-235.019 2262.36 20.5309 2138.84 -34.2128 1923.57C-174.354 1545.33 686.092 1582.34 732.229 1369.59C710.531 980.559 1841.34 379.128 1813.5 202.682M-250.056 2285.56C-245.91 2240.46 7.83415 2129.49 -36.7309 1910.87C-159.027 1536.23 632.132 1542.32 699.449 1337.08C703.777 968.155 1795.39 419.989 1766.74 231.525M-268.641 2255.67C-256.8 2218.56 -4.8625 2120.13 -39.2489 1898.16C-143.699 1527.13 578.172 1502.29 666.67 1304.56C697.023 955.751 1749.45 460.85 1719.98 260.368M-287.224 2225.77C-267.69 2196.67 -17.5587 2110.78 -41.7665 1885.45C-128.371 1518.02 524.213 1462.26 633.891 1272.05C690.27 943.346 1703.51 501.71 1673.22 289.21M-305.808 2195.88C-278.58 2174.77 -30.2547 2101.43 -44.2838 1872.75C-113.043 1508.93 470.255 1422.23 601.112 1239.54C683.516 930.943 1657.57 542.572 1626.46 318.054M-324.392 2165.99C-289.471 2152.87 -42.9509 2092.07 -46.8014 1860.04C-97.715 1499.82 416.295 1382.21 568.333 1207.03C676.762 918.538 1611.62 583.432 1579.7 346.897M-337.69 2142.95C-295.075 2137.83 -50.3614 2089.58 -44.0333 1854.19C-77.1013 1497.58 367.622 1349.03 540.839 1181.37C675.294 912.988 1570.97 631.148 1538.22 382.594M-340.211 2133.89C-289.903 2136.76 -46.9954 2101.05 -30.4886 1862.31C-45.7111 1509.3 329.725 1329.83 524.123 1169.69C684.603 921.412 1541.09 692.836 1507.52 432.265M-340.401 2127.85C-282.399 2138.71 -41.2972 2115.55 -14.6117 1873.45C-11.9886 1524.05 294.161 1313.65 509.738 1161.03C696.244 932.858 1513.54 757.548 1479.16 484.958M-334.865 2129.23C-269.17 2148.09 -29.874 2137.47 6.99013 1892.02C27.4589 1546.23 264.321 1304.9 501.079 1159.79C713.61 951.729 1491.72 829.684 1456.52 545.076M-327.056 2133.56C-253.667 2160.41 -16.1776 2162.34 30.8652 1913.54C69.1795 1571.35 236.754 1299.1 494.692 1161.5C733.249 973.547 1472.17 904.767 1436.15 608.141M-319.171 2137.99C-238.089 2172.84 -2.4051 2187.3 54.8163 1935.15C110.976 1596.57 209.264 1293.39 488.382 1163.31C752.964 995.463 1452.7 979.948 1415.86 671.304M-311.261 2142.45C-222.485 2185.29 11.3922 2212.3 78.7923 1956.8C152.798 1621.82 181.798 1287.71 482.096 1165.15C772.703 1017.41 1433.25 1055.16 1395.59 734.501M-303.339 2146.93C-206.87 2197.76 25.202 2237.32 102.781 1978.46C194.632 1647.09 154.345 1282.05 475.823 1167.01C792.456 1039.38 1413.81 1130.39 1375.34 797.712" stroke="#009FFF"/>
           </svg>
         </div>
         
         <div className="header-text">
           <div className="first-header">
             <p style={{paddingTop: paddingTopP}} className="first-header-prg">
               <svg className="star" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                 <path d="M16 8C10.3219 9.28244 9.28244 10.3232 8 16C6.71756 10.3232 5.67809 9.28244 0 8C5.67809 6.71756 6.71756 5.67809 8 0C9.28244 5.67809 10.3232 6.71756 16 8Z" fill="#F9FB6C"/>
               </svg>
               Outstanding Digital Products, and Experiences
             </p>
           </div>
           <div className="headerBlock">
             <h1 style={{marginTop: marginTopH, opacity: opcH}} className="experiencesHeader">We craft brand experiences</h1>
             <p style={{marginTop: marginTopB, opacity: opcH}} className="background-text">Creative technology</p>
           </div>
           
         </div>
         
         <div className="skill-block">
          
          <Block/>
          
         </div>
       </div>
     </div>
  )
}
export default ExperiencesMain
import React, {useState} from "react";
import "./works.scss";
import {ItemsData} from "./itemsData";
import ItemBlock from "./itemBlock/itemBlock";
import vector from "./img-svg/vector.svg"



function Works() {
  const [toggle, setToggle] = useState([true, false, false, false])
  
  function onClickSortBtn (index){
      setToggle(toggle => [false, false, false, false])
    let x = [false, false, false, false]
    x[index] = !x[index]
    setToggle(x)
  }
  
  const [itemsNum, setItemsNum] = useState(5)
  
  
  return (
     <div className="worksBlock">
       <div className="worksCont">
         <div className="projectsNav">
           <h1 className="Header">Projects</h1>
           <div className="sortButtons">
             <button onClick={(event)=>{onClickSortBtn(0)}} className="sortBtn" style={{backgroundColor: `${toggle[0] ? "#F8FB60" : "transparent"}`, color: `${toggle[0] ? "black" : "white"}`, borderColor: `${toggle[0] ? "rgba(248, 251, 96, 0.30)" : "rgba(255, 255, 255, 0.30)"}`}}>All</button>
             <div  className="line"></div>
             <button onClick={(event)=>{onClickSortBtn(1)}} className="sortBtn" style={{backgroundColor: `${toggle[1] ? "#F8FB60" : "transparent"}`, color: `${toggle[1] ? "black" : "white"}`, borderColor: `${toggle[1] ? "rgba(248, 251, 96, 0.30)" : "rgba(255, 255, 255, 0.30)"}`}}>Applications</button>
             <button onClick={(event)=>{onClickSortBtn(2)}} className="sortBtn" style={{backgroundColor: `${toggle[2] ? "#F8FB60" : "transparent"}`, color: `${toggle[2] ? "black" : "white"}`, borderColor: `${toggle[2] ? "rgba(248, 251, 96, 0.30)" : "rgba(255, 255, 255, 0.30)"}`}}>Web</button>
             <button onClick={(event)=>{onClickSortBtn(3)}} className="sortBtn" style={{backgroundColor: `${toggle[3] ? "#F8FB60" : "transparent"}`, color: `${toggle[3] ? "black" : "white"}`, borderColor: `${toggle[3] ? "rgba(248, 251, 96, 0.30)" : "rgba(255, 255, 255, 0.30)"}`}}>Branding</button>
           </div>
      
           <button className="G-square-button">Let’s Talk Us</button>
         </div>
    
         <div className="projectsBlock">
           {ItemsData.map((el, index)=>{
             if (el.id < itemsNum){
               return(<ItemBlock el={el} index={index} />)
             }
           })}
         </div>
         
         <button onClick={()=>{
           setItemsNum(prev => prev+4)
         }} className="G-square-button">Show More</button>
       </div>
  
       <div className="vectors">
         <img className="vector" src={vector} alt=""/>
         <img className="vector" src={vector} alt=""/>
         <img className="vector" src={vector} alt=""/>
         <img className="vector" src={vector} alt=""/>
         <img className="vector" src={vector} alt=""/>
         <img src={vector} alt="" className="vector"/>
       </div>
       <svg className="LineBck" xmlns="http://www.w3.org/2000/svg" width="100%" height="auto" viewBox="0 0 1695 1468" fill="none">
         <path opacity="0.1" d="M-521.895 1467.33C-532.896 1344.59 -204.021 1252.78 -246.477 1027.27C-335.792 552.838 808.398 1304.73 816.297 1020.5C832.067 453.065 2503.96 94.7491 2519.09 1.03061M-557.279 1048.13C-483.788 1142.52 -291.322 1279.24 -109.391 1071.02C118.023 810.739 169.316 403.109 526.961 435.772C884.606 468.434 1366.37 825.697 1462.8 492.438M-527.541 1432.59C-534.518 1320.18 -212.139 1239.26 -243.909 1014.57C-318.142 550.339 774.005 1247.02 798.559 977.875C830.609 439.017 2445.83 114.776 2464.83 9.65089M-533.186 1397.85C-536.139 1295.78 -220.256 1225.74 -241.341 1001.87C-300.492 547.84 739.612 1189.3 780.821 935.251C829.15 424.969 2387.7 134.803 2410.57 18.2709M-538.831 1363.1C-537.761 1271.38 -228.374 1212.22 -238.774 989.177C-282.842 545.341 705.219 1131.59 763.082 892.626C827.692 410.92 2329.56 154.83 2356.31 26.8911M-544.476 1328.36C-539.383 1246.98 -236.491 1198.7 -236.206 976.481C-265.192 542.842 670.827 1073.88 745.345 850.003C826.234 396.873 2271.43 174.858 2302.05 35.5123M-550.121 1293.62C-541.005 1222.58 -244.609 1185.18 -233.639 963.784C-247.542 540.343 636.434 1016.16 727.606 807.378C824.775 382.825 2213.3 194.885 2247.79 44.1324M-555.767 1258.88C-542.627 1198.17 -252.727 1171.66 -231.071 951.087C-229.892 537.844 602.041 958.447 709.868 764.754C823.316 368.776 2155.17 214.911 2193.53 52.7525M-561.412 1224.14C-544.248 1173.77 -260.844 1158.14 -228.503 938.391C-212.242 535.345 567.649 900.732 692.13 722.13C821.858 354.728 2097.04 234.938 2139.27 61.3726M-567.057 1189.39C-545.87 1149.37 -268.961 1144.62 -225.936 925.694C-194.592 532.845 533.256 843.017 674.392 679.505C820.4 340.68 2038.91 254.965 2085.01 69.9927M-572.703 1154.65C-547.493 1124.96 -277.079 1131.1 -223.369 912.997C-176.943 530.346 498.863 785.302 656.653 636.881C818.941 326.631 1980.78 274.992 2030.75 78.613M-578.348 1119.91C-549.114 1100.56 -285.196 1117.58 -220.801 900.3C-159.292 527.847 464.47 727.588 638.915 594.256C817.483 312.583 1922.65 295.019 1976.49 87.233M-583.993 1085.17C-550.736 1076.16 -293.314 1104.06 -218.233 887.604C-141.642 525.349 430.078 669.874 621.177 551.633C816.024 298.536 1864.52 315.047 1922.23 95.8542M-589.638 1050.42C-552.357 1051.76 -301.431 1090.54 -215.665 874.907C-123.992 522.849 395.685 612.159 603.439 509.009C814.566 284.487 1806.38 335.073 1867.97 104.474M-593.043 1024.04C-551.739 1035.72 -307.308 1085.38 -210.858 870.572C-104.102 528.711 363.532 562.806 587.941 474.746C815.347 278.8 1750.49 363.461 1815.95 121.455M-591.881 1014.71C-546.554 1036.72 -308.619 1097.27 -201.483 883.281C-79.6451 551.618 335.947 530.497 577.01 457.527C820.696 290.157 1699.17 408.894 1768.5 155.482M-589.73 1009.06C-540.379 1041.41 -308.94 1112.84 -191.119 899.678C-54.1992 578.212 309.35 501.876 567.068 443.996C827.034 305.203 1648.84 458.015 1722.03 193.195M-585.154 1012.47C-531.779 1055.16 -306.836 1137.47 -178.33 925.131C-26.3274 613.863 285.179 482.311 559.551 439.522C835.797 329.304 1600.93 516.191 1678 239.965M-579.614 1019.47C-522.216 1072.5 -303.768 1165.7 -164.577 954.179C2.50788 653.109 261.972 466.341 552.998 438.643C845.524 357.001 1553.98 577.963 1634.92 290.331M-574.041 1026.59C-512.62 1089.96 -300.667 1194.04 -150.791 983.347C31.3757 692.474 238.797 450.491 546.478 437.883C855.284 384.817 1507.07 639.855 1591.88 340.815M-568.458 1033.75C-503.014 1107.46 -297.557 1222.43 -136.996 1012.55C60.2537 731.88 215.632 434.681 539.968 437.163C865.053 412.674 1460.16 701.786 1548.85 391.34M-562.87 1040.93C-493.402 1124.99 -294.441 1250.83 -123.194 1041.78C89.1374 771.304 192.473 418.89 533.464 436.462C874.828 440.549 1413.27 763.737 1505.82 441.884" stroke="#009FFF"/>
       </svg>
     </div>
     
  );
}

export default Works;
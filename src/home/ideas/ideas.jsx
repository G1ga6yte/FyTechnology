import React, {useState} from "react";
import "./ideas.scss"
import {SvgsData} from "../../svgs/svgsData";
import {PriceTabImgData} from "../priceTab/img-svg/priceTabImgData";

function Ideas (){
    const [settings, setSettings] = useState([
      {marginTop: "50px", opacity: "0"},
      {marginTop: "150px", opacity: "0"},
      {marginTop: "120px", opacity: "0"},
      {marginTop: "40px", opacity: "0"},
      {marginTop: "120px", opacity: "0"},
      {marginTop: "40px", opacity: "0"},
      {marginTop: "120px", opacity: "0"},
      {marginTop: "40px", opacity: "0"},
      {marginTop: "120px", opacity: "0"}
    ])
  
  window.addEventListener('scroll', function(){
    if (this.scrollY >= 8300){
      setSettings(prevState => [{marginTop: "0", opacity: "1"}, {...settings[1]}, {...settings[2]}, {...settings[3]}, {...settings[4]}, {...settings[5]}, {...settings[6]}, {...settings[7]}, {...settings[8]} ])
    }
    if(this.scrollY >= 8400){
      setSettings(prevState => [ {...settings[0]}, {marginTop: "0", opacity: "1"}, {...settings[2]}, {...settings[3]}, {...settings[4]}, {...settings[5]}, {...settings[6]}, {...settings[7]}, {...settings[8]} ])
    }
    if(this.scrollY >= 8500){
      setSettings(prevState => [ {...settings[0]}, {...settings[1]}, {marginTop: "0", opacity: "1"}, {...settings[3]}, {...settings[4]}, {...settings[5]}, {...settings[6]}, {...settings[7]}, {...settings[8]} ])
    }
    if(this.scrollY>= 8550){
      setSettings(prevState => [ {...settings[0]}, {...settings[1]},  {...settings[2]}, {marginTop: "0", opacity: "1"}, {...settings[4]}, {...settings[5]}, {...settings[6]}, {...settings[7]}, {...settings[8]} ])
    }
    if (this.scrollY >= 8650){
      setSettings(prevState => [ {...settings[0]}, {...settings[1]},  {...settings[2]}, {...settings[3]}, {marginTop: "0", opacity: "1"}, {...settings[5]}, {...settings[6]}, {...settings[7]}, {...settings[8]} ])
    }
    if (this.scrollY >= 8700){
      setSettings(prevState => [ {...settings[0]}, {...settings[1]},  {...settings[2]}, {...settings[3]}, {...settings[4]}, {marginTop: "0", opacity: "1"}, {...settings[6]}, {...settings[7]}, {...settings[8]} ])
    }
    if(this.scrollY >= 8800){
      setSettings(prevState => [ {...settings[0]}, {...settings[1]},  {...settings[2]}, {...settings[3]}, {...settings[4]}, {...settings[5]}, {marginTop: "0", opacity: "1"}, {...settings[7]}, {...settings[8]} ])
    }
    if(this.scrollY >= 8900){
      setSettings(prevState => [ {...settings[0]}, {...settings[1]},  {...settings[2]}, {...settings[3]}, {...settings[4]}, {...settings[5]}, {...settings[6]}, {marginTop: "0", opacity: "1"}, {...settings[8]} ])
    }
    if(this.scrollY >= 9000){
      setSettings(prevState => [ {...settings[0]}, {...settings[1]},  {...settings[2]}, {...settings[3]}, {...settings[4]}, {...settings[5]}, {...settings[6]}, {...settings[7]}, {marginTop: "0", opacity: "1"} ])
    }
  })
  
  
  return(
     <div className="ideasCont">
       <div className="ideasContBck">
         <img className="bigBall" src={PriceTabImgData.bigball} alt=""/>
         
         <div className="overHeaderBlock">
           <p style={{marginTop: settings[0].marginTop, opacity: settings[0].opacity}} className="over-header">
             <svg style={{marginRight: "5px"}} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
               <path d="M16 8C10.3219 9.28244 9.28244 10.3232 8 16C6.71756 10.3232 5.67809 9.28244 0 8C5.67809 6.71756 6.71756 5.67809 8 0C9.28244 5.67809 10.3232 6.71756 16 8Z" fill="#F9FB6C"/>
             </svg>
             Empowering Businesses to Enhance Their Online Exposure
           </p>
         </div>
         
         <div className="ideasHeaderBlock">
           <h2 style={{marginTop: settings[1].marginTop, opacity: settings[1].opacity}} className="ideasHeader">Discover our new ideas that evolves with your business</h2>
         </div>
         <div className="descriptionBlock">
           <p style={{marginTop: settings[2].marginTop, opacity: settings[2].opacity}} className="description">
             Unlock the potential and identity of your brand with our innovative and ever-evolving concept. We pride ourselves on staying at the forefront of industry trends and continuously adapting our strategies to ensure your brand's success. Discover the power of our dynamic approach and watch your brand evolve to new heights, leaving a lasting impression on your audience
           </p>
         </div>
         
         <div className="smallHeaderBlock">
           <h4 style={{marginTop: settings[3].marginTop, opacity: settings[3].opacity}} className="smallHeader">Select the plan that suits your requirements and budget</h4>
         </div>
         <div className="descriptionBlock">
           <p style={{marginTop: settings[4].marginTop, opacity: settings[4].opacity}} className="description">
             Begin your digital journey by meticulously choosing the strategic plan that aligns perfectly with your business objectives. Our diverse range of plans is designed to cater to your specific needs, whether you're aiming to dominate the market, enhance brand recognition, or drive exceptional sales growth.
           </p>
         </div>
        
         <div className="smallHeaderBlock">
           <h4 style={{marginTop: settings[5].marginTop, opacity: settings[5].opacity}} className="smallHeader">Share your vision, and we'll work tirelessly to bring it to life</h4>
         </div>
         <div className="descriptionBlock">
           <p style={{marginTop: settings[6].marginTop, opacity: settings[6].opacity}} className="description">
             Our streamlined process makes submitting your request a breeze. Share crucial details about your business goals, and any unique preferences you have in mind. Our seasoned digital marketing professionals will swiftly channel your vision into an actionable strategy that leverages cutting-edge digital tools and trends.
           </p>
         </div>
         
         <div className="smallHeaderBlock">
           <h4 style={{marginTop: settings[7].marginTop, opacity: settings[7].opacity}} className="smallHeader">We’ll refine the designs until you’re fully satisfied</h4>
         </div>
         <div className="descriptionBlock">
           <p style={{marginTop: settings[8].marginTop, opacity: settings[8].opacity}} className="description">
             We pride ourselves on transparency and teamwork. After implementing your personalized digital strategy, we enter a continuous review and refinement phase. Our dedicated team closely monitors the performance metrics, scrutinizes data, and generates regular reports.
           </p>
         </div>
         
         
         <button className="G-link-button">Schedule a Call</button>
  
  
         <svg style={{position:"absolute", top: "-300px"}} xmlns="http://www.w3.org/2000/svg" width="1920" height="609" viewBox="0 0 1695 609" fill="none">
           <path opacity="0.2" fill-rule="evenodd" clip-rule="evenodd" d="M1698.94 550.243C1615.69 587.558 1399.55 645.289 1200.81 577.687C1169.73 567.116 1148.19 554.142 1133.61 539.487C1119.03 524.826 1111.45 508.504 1108.27 491.283C1105.09 474.073 1106.32 455.977 1109.32 437.762C1111.48 424.609 1114.58 411.366 1117.63 398.339L1117.63 398.337L1117.63 398.328C1118.8 393.326 1119.97 388.355 1121.07 383.433C1129.02 347.873 1133.65 314.918 1114.55 290.214C1095.44 265.497 1052.44 248.855 964.516 246.435C832.191 242.793 741.481 274.635 664.677 301.595L664.676 301.595C639.468 310.444 615.759 318.766 592.567 325.136C545.644 338.024 500.863 342.899 450.178 327.864C399.508 312.834 342.992 277.921 272.556 211.342C202.214 144.852 143.449 125.048 90.9617 131.101C38.4366 137.158 -7.92511 169.118 -53.4412 206.458C-64.4434 215.484 -75.3969 224.825 -86.3746 234.187C-120.772 263.521 -155.407 293.059 -192.529 313.738C-241.54 341.042 -294.953 352.95 -358 328.684L-357.641 327.75C-294.937 351.885 -241.838 340.063 -193.016 312.865C-155.989 292.238 -121.461 262.793 -87.0822 233.475L-87.082 233.475C-76.0903 224.101 -65.1137 214.74 -54.0755 205.685C-8.55313 168.339 38.0067 136.201 90.8472 130.108C143.726 124.01 202.77 144.002 273.243 210.615C343.622 277.14 400.003 311.938 450.462 326.906C500.907 341.869 545.485 337.031 592.302 324.172C615.41 317.825 639.067 309.52 664.241 300.684C741.067 273.714 832.015 241.788 964.544 245.435C1052.48 247.855 1095.93 264.489 1115.34 289.602C1134.76 314.727 1129.98 348.156 1122.04 383.651C1120.94 388.591 1119.77 393.572 1118.6 398.579L1118.6 398.597L1118.6 398.604C1115.55 411.618 1112.46 424.809 1110.3 437.924C1107.31 456.087 1106.11 474.053 1109.25 491.102C1112.4 508.14 1119.89 524.274 1134.32 538.782C1148.75 553.296 1170.15 566.203 1201.13 576.74C1399.55 644.231 1615.41 586.588 1698.53 549.33L1698.94 550.243ZM1227.01 534.664C1425.75 602.266 1641.9 544.535 1725.14 507.22L1724.73 506.307C1641.61 543.565 1425.75 601.208 1227.33 533.717C1196.35 523.18 1174.96 510.273 1160.52 495.759C1146.09 481.251 1138.6 465.117 1135.46 448.079C1132.31 431.03 1133.51 413.064 1136.5 394.901C1138.66 381.785 1141.75 368.595 1144.8 355.581L1144.8 355.574L1144.8 355.558L1144.81 355.545C1145.98 350.542 1147.14 345.565 1148.24 340.628C1156.18 305.133 1160.96 271.704 1141.54 246.579C1122.13 221.466 1078.68 204.832 990.745 202.412C858.216 198.764 767.269 230.691 690.442 257.66C665.268 266.497 641.611 274.802 618.504 281.149C571.687 294.008 527.108 298.846 476.664 283.883C426.205 268.915 369.823 234.117 299.444 167.592C228.972 100.979 169.927 80.9866 117.048 87.0845C64.208 93.178 17.6481 125.316 -27.8742 162.662C-38.9124 171.717 -49.889 181.078 -60.8807 190.452L-60.8811 190.452C-95.2603 219.77 -129.788 249.215 -166.814 269.842C-215.637 297.04 -268.736 308.862 -331.44 284.727L-331.799 285.66C-268.751 309.927 -215.339 298.019 -166.328 270.715C-129.206 250.035 -94.5703 220.498 -60.1734 191.164C-49.1956 181.802 -38.2421 172.461 -27.24 163.435C18.2762 126.095 64.6378 94.1351 117.163 88.0779C169.65 82.0251 228.415 101.829 298.757 168.319C369.194 234.898 425.71 269.811 476.379 284.841C527.064 299.876 571.845 295.001 618.769 282.113C641.96 275.743 665.669 267.421 690.877 258.572L690.878 258.572C767.682 231.612 858.393 199.77 990.718 203.412C1078.64 205.832 1121.64 222.474 1140.75 247.19C1159.85 271.895 1155.22 304.85 1147.27 340.41C1146.17 345.328 1145.01 350.296 1143.84 355.295L1143.83 355.304L1143.83 355.314L1143.83 355.316L1143.83 355.318C1140.78 368.344 1137.68 381.586 1135.52 394.739C1132.52 412.954 1131.3 431.05 1134.47 448.26C1137.65 465.481 1145.23 481.803 1159.81 496.464C1174.39 511.119 1195.93 524.093 1227.01 534.664ZM1751.34 464.196C1668.09 501.511 1451.95 559.242 1253.21 491.64C1222.13 481.07 1200.58 468.095 1186.01 453.44C1171.43 438.779 1163.85 422.458 1160.67 405.237C1157.49 388.026 1158.71 369.931 1161.71 351.715C1163.88 338.564 1166.98 325.322 1170.03 312.296L1170.03 312.294L1170.03 312.292L1170.03 312.291L1170.03 312.279L1170.03 312.272L1170.06 312.159C1171.22 307.197 1172.37 302.267 1173.47 297.386C1181.41 261.826 1186.04 228.872 1166.95 204.167C1147.84 179.45 1104.84 162.808 1016.91 160.388C884.59 156.746 793.879 188.588 717.075 215.548C691.867 224.397 668.157 232.72 644.966 239.089C598.043 251.977 553.261 256.853 502.577 241.818C451.907 226.787 395.391 191.874 324.955 125.295C254.612 58.8054 195.847 39.0015 143.36 45.0542C90.8351 51.1115 44.4734 83.0709 -1.04269 120.411C-12.0449 129.437 -22.9983 138.778 -33.9761 148.14C-68.373 177.474 -103.009 207.012 -140.13 227.692C-189.142 254.995 -242.554 266.903 -305.601 242.637L-305.242 241.703C-242.539 265.838 -189.439 254.016 -140.617 226.818C-103.591 206.191 -69.063 176.746 -34.6838 147.428L-34.6835 147.428C-23.6917 138.054 -12.7152 128.693 -1.67697 119.638C43.8454 82.2927 90.4052 50.1544 143.246 44.0608C196.124 37.9629 255.169 57.9554 325.642 124.569C396.02 191.093 452.402 225.891 502.861 240.859C553.305 255.823 597.884 250.984 644.701 238.125C667.808 231.779 691.465 223.474 716.638 214.637L716.639 214.637C793.466 187.667 884.414 155.741 1016.94 159.388C1104.88 161.809 1148.33 178.442 1167.74 203.555C1187.16 228.68 1182.38 262.109 1174.44 297.604C1173.34 302.545 1172.17 307.526 1171 312.533L1171 312.55L1170.99 312.558C1167.95 325.571 1164.86 338.762 1162.7 351.878C1159.71 370.041 1158.51 388.007 1161.65 405.055C1164.8 422.093 1172.29 438.228 1186.72 452.735C1201.15 467.249 1222.55 480.156 1253.53 490.694C1451.95 558.184 1667.81 500.541 1750.93 463.283L1751.34 464.196ZM1777.53 421.172C1694.29 458.488 1478.15 516.219 1279.4 448.617C1248.33 438.046 1226.78 425.072 1212.21 410.417C1197.63 395.756 1190.05 379.434 1186.87 362.213C1183.69 345.003 1184.91 326.907 1187.91 308.692C1190.08 295.54 1193.18 282.298 1196.22 269.272L1196.22 269.27L1196.23 269.269L1196.23 269.267L1196.23 269.258C1197.4 264.255 1198.56 259.284 1199.66 254.363C1207.61 218.803 1212.24 185.848 1193.14 161.143C1174.04 136.427 1131.03 119.785 1043.11 117.365C910.786 113.723 820.076 145.564 743.272 172.525C718.064 181.373 694.354 189.696 671.162 196.066C624.239 208.954 579.458 213.829 528.773 198.794C478.103 183.764 421.587 148.851 351.151 82.2719C280.809 15.782 222.043 -4.02197 169.557 2.03082C117.031 8.08801 70.6697 40.0475 25.1536 77.3877C14.154 86.4115 3.20306 95.7505 -7.77206 105.11L-7.77966 105.117L-7.77985 105.117C-42.1768 134.451 -76.8124 163.988 -113.934 184.668C-162.945 211.972 -216.358 223.88 -279.405 199.613L-279.046 198.68C-216.342 222.814 -163.243 210.993 -114.421 183.795C-77.3942 163.168 -42.8666 133.723 -8.48737 104.405L-8.48499 104.403L-8.4826 104.401L-8.48022 104.399C2.50919 95.0269 13.4834 85.6681 24.5193 76.6146C70.0417 39.2693 116.602 7.13092 169.442 1.03735C222.321 -5.06055 281.365 14.932 351.838 81.5451C422.216 148.069 478.598 182.867 529.057 197.835C579.501 212.799 624.08 207.96 670.897 195.102C694.004 188.755 717.661 180.451 742.834 171.614L742.835 171.613C819.662 144.644 910.61 112.717 1043.14 116.365C1131.07 118.785 1174.52 135.418 1193.93 160.532C1213.36 185.657 1208.57 219.085 1200.64 254.581C1199.53 259.528 1198.36 264.515 1197.19 269.529C1194.15 282.544 1191.06 295.737 1188.9 308.854C1185.91 327.017 1184.7 344.983 1187.85 362.032C1190.99 379.069 1198.49 395.204 1212.92 409.712C1227.35 424.226 1248.74 437.133 1279.72 447.67C1478.14 515.161 1694.01 457.518 1777.12 420.26L1777.53 421.172Z" fill="#008BE8"/>
         </svg>
         <svg style={{position:"absolute", top: "-300px"}} xmlns="http://www.w3.org/2000/svg" width="1920" height="604" viewBox="0 0 1695 604" fill="none">
           <path opacity="0.2" fill-rule="evenodd" clip-rule="evenodd" d="M1702.91 58.3597C1620.51 21.4189 1406.53 -35.7326 1209.78 31.1909C1179.02 41.6555 1157.69 54.5 1143.26 69.0082C1128.83 83.5228 1121.32 99.6815 1118.17 116.73C1115.03 133.769 1116.24 151.683 1119.21 169.716C1121.35 182.737 1124.42 195.848 1127.44 208.745L1127.45 208.769C1128.6 213.717 1129.75 218.632 1130.84 223.499C1138.71 258.702 1143.29 291.323 1124.39 315.778C1105.48 340.244 1062.91 356.719 975.869 359.115C844.874 362.72 755.077 331.199 679.044 304.509L679.044 304.509C654.089 295.749 630.617 287.51 607.658 281.204C561.206 268.446 516.874 263.619 466.697 278.503C416.535 293.383 360.587 327.946 290.858 393.856C221.223 459.677 163.049 479.281 111.092 473.29C59.096 467.294 13.2012 435.656 -31.8576 398.691C-42.749 389.756 -53.5923 380.509 -64.4596 371.241C-98.511 342.202 -132.799 312.96 -169.548 292.488C-218.068 265.458 -270.946 253.669 -333.361 277.693L-333.002 278.626C-270.93 254.735 -218.366 266.437 -170.035 293.362C-133.381 313.781 -99.2009 342.929 -65.1672 371.953C-54.2858 381.233 -43.4194 390.5 -32.4919 399.464C12.5732 436.434 58.6662 468.251 110.977 474.283C163.327 480.32 221.779 460.527 291.545 394.583C361.216 328.727 417.03 294.28 466.981 279.462C516.918 264.649 561.047 269.439 607.394 282.169C630.268 288.451 653.688 296.673 678.608 305.421C754.663 332.119 844.698 363.725 975.896 360.114C1062.95 357.718 1105.96 341.252 1125.18 316.389C1144.41 291.515 1139.67 258.419 1131.82 223.281C1130.72 218.384 1129.57 213.446 1128.41 208.483L1128.41 208.481C1125.39 195.598 1122.33 182.538 1120.2 169.553C1117.23 151.573 1116.04 133.788 1119.16 116.912C1122.27 100.046 1129.69 84.0745 1143.97 69.7133C1158.26 55.3458 1179.44 42.5692 1210.11 32.1376C1406.53 -34.6744 1620.22 22.3888 1702.5 59.2722L1702.91 58.3597ZM1235.72 73.7806C1432.47 6.85714 1646.44 64.0086 1728.85 100.949L1728.44 101.862C1646.16 64.9786 1432.46 7.91537 1236.04 74.7274C1205.37 85.1589 1184.19 97.9356 1169.91 112.303C1155.62 126.664 1148.21 142.636 1145.09 159.502C1141.98 176.378 1143.17 194.163 1146.13 212.143C1148.27 225.128 1151.33 238.186 1154.34 251.07L1154.34 251.071L1154.34 251.072C1155.5 256.036 1156.66 260.973 1157.75 265.871C1165.61 301.009 1170.35 334.105 1151.12 358.979C1131.9 383.842 1088.88 400.308 1001.83 402.704C870.634 406.315 780.599 374.709 704.544 348.01C679.623 339.262 656.204 331.041 633.329 324.758C586.983 312.029 542.853 307.239 492.917 322.052C442.966 336.869 387.152 371.317 317.48 437.173C247.715 503.117 189.262 522.91 136.913 516.873C84.6018 510.84 38.5088 479.024 -6.55621 442.054C-17.4837 433.089 -28.3502 423.823 -39.2315 414.543C-73.2653 385.519 -107.445 356.371 -144.1 335.951C-192.43 309.027 -244.995 297.324 -307.066 321.216L-307.426 320.282C-245.01 296.259 -192.133 308.048 -143.613 335.078C-106.864 355.55 -72.5754 384.791 -38.524 413.831C-27.6566 423.099 -16.8134 432.346 -5.92197 441.281C39.1368 478.246 85.0316 509.883 137.027 515.88C188.985 521.871 247.158 502.267 316.793 436.446C386.522 370.536 442.471 335.973 492.633 321.093C542.809 306.209 587.142 311.035 633.594 323.794C656.553 330.1 680.024 338.339 704.979 347.099L704.98 347.099C781.012 373.788 870.81 405.31 1001.8 401.704C1088.84 399.309 1131.41 382.833 1150.33 358.367C1169.23 333.913 1164.65 301.292 1156.78 266.089C1155.69 261.223 1154.54 256.308 1153.38 251.361L1153.38 251.334C1150.36 238.438 1147.29 225.327 1145.14 212.306C1142.17 194.273 1140.96 176.359 1144.11 159.32C1147.26 142.271 1154.76 126.113 1169.2 111.598C1183.63 97.0898 1204.95 84.2453 1235.72 73.7806ZM1754.79 143.543C1672.38 106.602 1458.41 49.4509 1261.66 116.374C1230.89 126.839 1209.56 139.684 1195.13 154.192C1180.7 168.706 1173.19 184.865 1170.05 201.914C1166.9 218.952 1168.11 236.867 1171.08 254.899C1173.23 267.921 1176.29 281.032 1179.31 293.928L1179.32 293.956C1180.48 298.902 1181.63 303.817 1182.71 308.683C1190.58 343.886 1195.17 376.507 1176.26 400.961C1157.35 425.427 1114.78 441.903 1027.74 444.298C896.746 447.904 806.949 416.382 730.917 389.693C705.962 380.933 682.49 372.694 659.531 366.388C613.078 353.629 568.746 348.803 518.569 363.687C468.407 378.567 412.459 413.13 342.73 479.04C273.095 544.861 214.922 564.465 162.964 558.473C110.968 552.477 65.0733 520.84 20.0146 483.875C9.12314 474.94 -1.72009 465.692 -12.5874 456.425C-46.6389 427.385 -80.9272 398.144 -117.676 377.671C-166.196 350.642 -219.073 338.853 -281.489 362.876L-281.13 363.809C-219.058 339.918 -166.494 351.621 -118.163 378.545C-81.509 398.964 -47.3288 428.113 -13.295 457.137C-2.41364 466.416 8.45279 475.683 19.3803 484.648C64.4453 521.618 110.538 553.434 162.849 559.467C215.199 565.504 273.652 545.711 343.417 479.766C413.088 413.911 468.903 379.463 518.854 364.646C568.79 349.833 612.92 354.623 659.266 367.352C682.141 373.635 705.56 381.856 730.48 390.604C806.535 417.303 896.57 448.909 1027.77 445.298C1114.82 442.902 1157.83 426.436 1177.05 401.573C1196.28 376.698 1191.54 343.603 1183.69 308.464C1182.6 303.567 1181.44 298.63 1180.28 293.666L1180.28 293.665L1180.28 293.664L1180.28 293.661C1177.26 280.779 1174.21 267.721 1172.07 254.737C1169.11 236.756 1167.91 218.972 1171.03 202.095C1174.14 185.23 1181.56 169.258 1195.84 154.897C1210.13 140.529 1231.31 127.753 1261.98 117.321C1458.4 50.5091 1672.1 107.572 1754.38 144.456L1754.79 143.543ZM1780.72 186.133C1698.31 149.192 1484.34 92.0407 1287.59 158.964C1256.83 169.429 1235.5 182.273 1221.07 196.782C1206.64 211.296 1199.13 227.455 1195.98 244.504C1192.84 261.542 1194.05 279.456 1197.02 297.489C1199.16 310.511 1202.23 323.622 1205.25 336.518L1205.25 336.546C1206.41 341.492 1207.56 346.407 1208.65 351.272C1216.52 386.476 1221.1 419.097 1202.2 443.551C1183.28 468.017 1140.71 484.492 1053.68 486.888C922.682 490.493 832.884 458.972 756.852 432.283C731.897 423.523 708.425 415.284 685.466 408.978C639.014 396.219 594.681 391.393 544.505 406.277C494.343 421.157 438.394 455.72 368.665 521.63C299.03 587.451 240.857 607.055 188.9 601.063C136.904 595.067 91.0089 563.429 45.9501 526.464C35.0587 517.529 24.2155 508.282 13.3481 499.014C-20.7033 469.975 -54.9916 440.734 -91.7408 420.261C-140.261 393.232 -193.138 381.442 -255.554 405.466L-255.194 406.399C-193.123 382.508 -140.558 394.211 -92.2274 421.135C-55.5734 441.554 -21.3932 470.703 12.6405 499.727C23.5219 509.006 34.3883 518.273 45.3159 527.238C90.3809 564.208 136.474 596.024 188.785 602.057C241.134 608.093 299.587 588.301 369.352 522.356C439.024 456.501 494.838 422.053 544.789 407.236C594.725 392.423 638.855 397.212 685.201 409.942C708.076 416.225 731.496 424.446 756.416 433.194C832.471 459.893 922.506 491.499 1053.7 487.888C1140.75 485.492 1183.77 469.026 1202.99 444.163C1222.22 419.288 1217.48 386.193 1209.63 351.054C1208.53 346.157 1207.38 341.219 1206.21 336.256L1206.21 336.255L1206.21 336.253L1206.21 336.251C1203.2 323.369 1200.14 310.31 1198 297.327C1195.04 279.346 1193.85 261.562 1196.97 244.685C1200.08 227.819 1207.5 211.848 1221.78 197.487C1236.07 183.119 1257.25 170.343 1287.91 159.911C1484.34 93.099 1698.03 150.162 1780.31 187.046L1780.72 186.133Z" fill="#0099FF"/>
         </svg>
  
         <div  className="vector" style={{position:"absolute", right: "270px"}}>
           <img src={SvgsData.vector} style={{position:"absolute", left:0, top: 0}} alt=""/>
           <img src={SvgsData.radial} style={{position:"absolute", left:0, top: 0}} alt=""/>
         </div>
         <div  className="vector" style={{position:"absolute", left: "120px", top: "20px"}}>
           <img src={SvgsData.vector} style={{position:"absolute", left:0, top: 0}} alt=""/>
           <img src={SvgsData.radial} style={{position:"absolute", left:0, top: 0}} alt=""/>
         </div>
         <div  className="vector" style={{position:"absolute", top: "50px", left: "60%"}}>
           <img src={SvgsData.vector} style={{position:"absolute", left:0, top: 0}} alt=""/>
           <img src={SvgsData.radial} style={{position:"absolute", left:0, top: 0}} alt=""/>
         </div>
         <div  className="vector" style={{position:"absolute", left: "250px", bottom: "0"}}>
           <img src={SvgsData.vector} style={{position:"absolute", left:0, top: 0}} alt=""/>
           <img src={SvgsData.radial} style={{position:"absolute", left:0, top: 0}} alt=""/>
         </div>
         <div  className="vector" style={{position:"absolute", right: "20%", top: "250px"}}>
           <img src={SvgsData.vector} style={{position:"absolute", left:0, top: 0}} alt=""/>
           <img src={SvgsData.radial} style={{position:"absolute", left:0, top: 0}} alt=""/>
         </div>
       </div>
       
       
     </div>
  )
}
export default Ideas
import "./middle.css";
import Phone from "../phone/phone";
import React, { useEffect } from "react";
import Fade from "react-reveal/Fade";
import { motion } from "framer-motion";
import Home from "../Assets/Home.png";
import Investment from "../Assets/Investment.png";
import Coupons from "../Assets/Coupons.png";
import thirdpage from "../Assets/thirdpage.png";
var flgscl = 0;
function Middle(props) {
  const basicStyle = {
    display: "none",
  };

  // useEffect(() => {
  //   console.log(flgscl, "Phone ele");
  //   if (flgscl == 0) {

  //     console.log(flgscl, "Phone ele");
  //     // console.log("1st called for phone")
  //     if (props.front == 10) {
  //       document.querySelector(".first").style.display = "none";
  //       document.querySelector(".second").style.display = "block";
  //       flgscl = 10;
  //     }
  //   } else if (flgscl == 10) {
  //   console.log(flgscl, "Phone ele");

  //     if (props.front == 10) {
  //       document.querySelector(".second").style.display = "none";
  //       document.querySelector(".third").style.display = "block";
  //       flgscl = 20;
  //     } else if (props.back == -10) {
  //       document.querySelector(".second").style.display = "none";
  //       document.querySelector(".first").style.display = "block";
  //       flgscl = 0;
  //     }

  //   } else if (flgscl == 20) {
  //   console.log(flgscl, "Phone ele");

  //     console.log(flgscl, "Hey this is the Value of flg");
  //     if (props.front == 10) {
  //       document.querySelector(".third").style.display = "none";
  //       document.querySelector(".four").style.display = "block";
  //       flgscl = 30;
  //     } else if (props.back == -10) {
  //       document.querySelector(".second").style.display = "block";
  //       document.querySelector(".third").style.display = "none";
  //       flgscl = 10;
  //     }
  //   } else if (flgscl == 30) {
  //   console.log(flgscl, "Phone ele");

  //     if (props.back == -10) {
  //       document.querySelector(".third").style.display = "block";
  //       document.querySelector(".four").style.display = "none";
  //       flgscl = 10;
  //     }
  //   }
  // }, [props.back, props.front , flgscl]);

  useEffect(() => {
    console.log('props==>',props)
    switch (props.pageCount) {
      case 0:
        document.querySelector(".first").style.display = "block";
        document.querySelector(".second").style.display = "none";
        document.querySelector(".third").style.display = "none";
        document.querySelector(".fourth").style.display = "none";
        break;
    
      case 1:
        document.querySelector(".first").style.display = "none";
        document.querySelector(".second").style.display = "block";
        document.querySelector(".third").style.display = "none";
        document.querySelector(".fourth").style.display = "none";
        break;
    
      case 2:
        document.querySelector(".first").style.display = "none";
        document.querySelector(".second").style.display = "none";
        document.querySelector(".third").style.display = "block";
        document.querySelector(".fourth").style.display = "none";
        break;
    
      case 3:
        document.querySelector(".first").style.display = "none";
        document.querySelector(".second").style.display = "none";
        document.querySelector(".third").style.display = "none";
        document.querySelector(".fourth").style.display = "block";
        break;
    
      default:
        document.querySelector(".first").style.display = "block";
        document.querySelector(".second").style.display = "none";
        document.querySelector(".third").style.display = "none";
        document.querySelector(".fourth").style.display = "none";
        break;
    }

  }, [props.pageCount]);

  return (
    <div className="phone">
      <div className="outercontainer">
        {/* <Phone front={props.front} back={props.back}/> */}
        <div className="phone" style={{ overflow: "hidden" }}>
          
          <div className="first">
            <Fade left>
              <img className="svg" src={Home} />
            </Fade>
          </div>

          <div className="second" style={basicStyle}>
            <Fade left>
              <img className="svg" src={Investment} />
            </Fade>
          </div>

          <div className="third" style={basicStyle}>
            <Fade left>
              <img className="svg" src={thirdpage} />
            </Fade>
          </div>

          <div className="fourth" style={basicStyle}>
            <Fade left>
              <img className="svg" src={Coupons} />
            </Fade>
          </div>

          {/* <div className='five' style={basicStyle}>
      <Fade left> 
         <img className="svg"  src={Tos} /> 
      </Fade>
      </div> */}

          {/* </div> */}
        </div>
      </div>
    </div>
  );
}

export default Middle;

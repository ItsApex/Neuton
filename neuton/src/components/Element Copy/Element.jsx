import "./Element.css";
import React,{ useEffect,useState } from "react";
import Fade from "react-reveal/Fade";
import styled from "styled-components";
//Element import
import Element from "../Assets/Elementsvg.svg";
import { motion, animate , useAnimation } from "framer-motion";
//  <motion.div animate={{ opacity: isVisible ? 1 : 0 }} />

var flgscl = 0  
function Phone(props) {
// const image = document.querySelector(".deemag")
// console.log
    // Animation vaala part
const [isRotated, setIsRotated] = useState(false);
const [isBottom, setIsBottom] = useState(false);

useEffect(() => {
  const handleWheel = (event) => {
    setIsRotated(!isRotated);
    setIsBottom(!isBottom);
  };

  window.addEventListener('wheel', handleWheel);

  return () => {
    window.removeEventListener('wheel', handleWheel);
  };
}, [isRotated, isBottom]);
// Animation vaala part khatam
  
  const basicStyle = {
    display: "none",
  };

  useEffect(() => {

    if(flgscl == 0 ){
      // console.log("1st called for phone")
    //   if(props.front == 10){
    //     // image.style.position = "absolute";
    //     image.style.bottom = "0";
      
    //     // image.style.position = "relative";
    //     image.style.transform = "rotate(180deg)";
    //     // image.style.bottom = "0px";
    //     flgscl = 10
    //     console.log("Phone change karo ")
    //  }
    } 
    
    else if (flgscl == 10){
      // console.log("2nd called for phone")
     
    
      if(props.front == 10){
        document.querySelector(".second").style.display = "none";
        document.querySelector(".third").style.display = "block";
        flgscl = 20
      console.log("2nd PROS FRONT = 10 called ")
        
     }
      
     else if(props.back == -10){
      document.querySelector(".second").style.display = "none";
      document.querySelector(".first").style.display = "block";
      flgscl = 0
      console.log("2nd PROS FRONT = -10 called ")
      
      }
    
      // else if(props.front == 10 ){
      //   document.querySelector(".second").style.display = "none";
      //   document.querySelector(".third").style.display = "block";
       
      // }
    }
    
    
    else if (flgscl == 20){
      // console.log("3rd called for phone")
    
    
     if(props.back == -10){
      document.querySelector(".second").style.display = "block";
      document.querySelector(".third").style.display = "none";
      flgscl = 10
     }
    console.log(props.front)
    }
   
  },[props.back , props.front])

  return (
    <div className="deemag">
    {/* //  <img className="rotatingSvg" src={Element} xmlns="http://www.w3.org/2000/svg" alt="element" viewBox="0 0 100 100" style={{
    //    position : 'absolute',
    //    //  maxWidth : '120%';
    //    maxWidth: 'calc(100% + 100%)' ,
    //   }}/> */}
    
    </div>
  )
}

export default Phone;
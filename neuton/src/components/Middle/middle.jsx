import "./middle.css";
import Phone from "../phone/phone";
import React,{ useEffect } from "react";
import Fade from "react-reveal/Fade";
import {motion} from "framer-motion";

var flgscl = 0  
function Middle(props) {

  
  const basicStyle = {
    display: "none",
  };

  useEffect(() => {

    if(flgscl == 0 ){
      
      if(props.front == 10){
        
        document.querySelector(".first").style.display = "none";
        document.querySelector(".second").style.display = "block";
        flgscl = 10
       
     }
    } 
    
    else if (flgscl == 10){
     
     
    
      if(props.front == 10){
        document.querySelector(".second").style.display = "none";
        document.querySelector(".third").style.display = "block";
        flgscl = 20
        
        
     }
      
     else if(props.back == -10){
      document.querySelector(".second").style.display = "none";
      document.querySelector(".first").style.display = "block";
      flgscl = 0
      
      }
    
      // else if(props.front == 10 ){
      //   document.querySelector(".second").style.display = "none";
      //   document.querySelector(".third").style.display = "block";
       
      // }
    }
    
    
    else if (flgscl == 20){
    
    
     if(props.back == -10){
      document.querySelector(".second").style.display = "block";
      document.querySelector(".third").style.display = "none";
      flgscl = 10
     }
    }
   
  },[props.back , props.front])

  return (
    <div className="phone">
   
      <div className="outercontainer">   
      
      <Phone/>
      </div>
      
     
    
   
    </div>
  )
}

export default Middle;
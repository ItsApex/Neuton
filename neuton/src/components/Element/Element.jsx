// document.querySelector(".element").style.position ="absolute"
//           document.querySelector(".element").style.top = "0"
//           document.querySelector(".element").style.transform = "rotate(180deg)"
// document.querySelector(".element").style.bottom = "0"
import "./Element.css";
import React,{ useEffect,useState } from "react";
import Fade from "react-reveal/Fade";
import styled from "styled-components";
//Element import
import Element from "../Assets/Elementsvg.svg";
import { motion,Variant } from "framer-motion";
 
var flgscl = 0
function BackEle(props) {
  var elem = document.querySelector(".element") 
  var [up,setUp] = useState(false)


  useEffect(() => {

    if(flgscl == 0 ){
      
      if(props.front == 10){
        console.log("2nd for svg")
        
        document.querySelector(".element").style.position ="absolute"
        document.querySelector(".element").style.top = "0"
        document.querySelector(".element").style.transform = "rotate(180deg)"
       
        // document.querySelector(".first").style.display = "none";
        // document.querySelector(".second").style.display = "block";
        flgscl = 10
       
     }
    } 
    
    else if (flgscl == 10){
     
     
    
      if(props.front == 10){
        document.querySelector(".element").style.position ="absolute"
        document.querySelector(".element").style.top= "28%"
       

        document.querySelector(".element").style.transform = "rotate(360deg)"
        // document.querySelector(".second").style.display = "none";
        // document.querySelector(".third").style.display = "block";
        console.log("3rd for svg")
        flgscl = 20
        
        
     }
      
     else if(props.back == -10){
      // document.querySelector(".second").style.display = "none";
      // document.querySelector(".first").style.display = "block";
      document.querySelector(".element").style.top = "28%"
      document.querySelector(".element").style.transform = "rotate(0deg)"
      flgscl = 0
      console.log("1st for svg")
      }
    
      // else if(props.front == 10 ){
      //   document.querySelector(".second").style.display = "none";
      //   document.querySelector(".third").style.display = "block";
       
      // }
    }
    
    
    else if (flgscl == 20){
    
    
     if(props.back == -10){
      console.log("2nd for svg")
      document.querySelector(".element").style.top = "0"
      document.querySelector(".element").style.transform = "rotate(180deg)"
      // document.querySelector(".second").style.display = "block";
      // document.querySelector(".third").style.display = "none";
      flgscl = 10
     }
    }
   
  },[props.back , props.front])
 


  return(
 <img className="element" src={Element} />
  )
}

export default BackEle
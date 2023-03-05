import "./left.css";
import styled from "styled-components";
import React,{ useEffect } from "react";
import Fade from "react-reveal/Fade";
import Details from "../Details/Details";
// import React from "react";
var flgscl = 0   

function Left(props) {
  // console.log("back", props.back , "front", props.front)
    const basicStyle = {
        display: "none",
      };

// console.log(flgscl , "flagSCL")

useEffect(() => {

  if(flgscl == 0 ){
    // console.log("1st called")
    if(props.front == 10){
      document.querySelector(".one").style.display = "none";
      document.querySelector(".two").style.display = "block";
      flgscl = 10
      // console.log("1st PROS FRONT = 10 called ")
   }
  } 
  
  else if (flgscl == 10){
    // console.log("2nd called")
   
  
    if(props.front == 10){
      document.querySelector(".two").style.display = "none";
      document.querySelector(".three").style.display = "block";
      flgscl = 20
    // console.log("2nd PROS FRONT = 10 called ")
      
   }
    
   else if(props.back == -10){
    document.querySelector(".two").style.display = "none";
    document.querySelector(".one").style.display = "block";
    flgscl = 0
    // console.log("2nd PROS FRONT = -10 called ")
    
    }
  
    // else if(props.front == 10 ){
    //   document.querySelector(".two").style.display = "none";
    //   document.querySelector(".three").style.display = "block";
     
    // }
  }
  
  
  else if (flgscl == 20){
    // console.log("3rd called")
  
  
   if(props.back == -10){
    document.querySelector(".two").style.display = "block";
    document.querySelector(".three").style.display = "none";
    flgscl = 10
   }
  // console.log(props.front)
  }
  


},[props.back , props.front])




  return (
    <>

      <div className="Main-Text ">


      <div className='one' >
        <Fade left>
          <div className="middlecontent">
            <div className="big">Centralized Apps</div>
            <div className="small">First content</div>
            <div className="downcontent"> 01 Protecting the Data</div>
          </div>
        </Fade>
      </div>

      <div className='two' style={basicStyle}>
        <Fade left>
          <div className="middlecontent">
            <div className="big"> Top Notch Features</div>
            <div className="small">Second content</div>
            <div className="downcontent"> 02 Market Analysis</div>
          </div>
        </Fade>
      </div>

      <div className='three' style={basicStyle}>
        <Fade left>
          <div className="middlecontent">
            <div className="big"> Web Solution</div>
            <div className="small"> 03 Managing Asset</div>
          </div>
        </Fade>
      </div>

      <div className='four' style={basicStyle}>
        <Fade left>
          <div className="middlecontent">
            <div className="big"> Coupons</div>
            <div className="small"> 04 Get Exciting coupons </div>
          </div>
        </Fade>
      </div>

      <div className='five' style={basicStyle}>
        <Fade left>
          <div className="middlecontent">
            <div className="big">TOS</div>
            <div className="small"> 05 End of the display </div>
          </div>
        </Fade>
      </div>

      
      </div>

    

     
    </>
  );
}

export default Left;

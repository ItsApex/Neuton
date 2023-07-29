import "./left.css";
import styled from "styled-components";
import React,{ useEffect } from "react";
import Fade from "react-reveal/Fade";
import Details from "../Details/Details";
// import React from "react";
var flgscl = 0   

function Left(props) {
    const basicStyle = {
        display: "none",
      };

useEffect(() => {
  const first = document.querySelector('.one')
  const second = document.querySelector('.two')
  const third = document.querySelector('.third')
  const fourth = document.querySelector('.four')

  if(flgscl == 0 ){
    if(props.front == 10 ){
      document.querySelector(".two").style.display = "block";
      document.querySelector(".one").style.display = "none";
      
      flgscl = 10
   }
  } 
  
  else if (flgscl == 10){
    if(props.front == 10){
      document.querySelector(".two").style.display = "none";
      document.querySelector(".three").style.display = "block";
      flgscl = 20
   }
    
   else if(props.back == -10){
    document.querySelector(".two").style.display = "none";
    document.querySelector(".one").style.display = "block";
    flgscl = 0
    
    }
  
  }
  
  
  else if (flgscl == 20){
    // console.log("3rd called")
  
    if(props.front == 10){
      document.querySelector(".three").style.display = "none";
      document.querySelector(".four").style.display = "block";
      flgscl = 30
   }
   if(props.back == -10){
    document.querySelector(".two").style.display = "block";
    document.querySelector(".three").style.display = "none";
    flgscl = 10
   }
  // console.log(props.front)
  }
  else if (flgscl == 30){
    // console.log("3rd called")
   if(props.back == -10){
    document.querySelector(".three").style.display = "block";
    document.querySelector(".four").style.display = "none";
    flgscl = 20
   }
  // console.log(props.front)
  }


},[props.back , props.front])




  return (
    <>

      <div className="Main-Text">


      <div className='one' >
        <Fade left>
          <div className="middlecontent">
           
            <div className="big">The savings account that can keep up with your demands</div>
            <div className="big">Tokens,Gems and Levels to keep you motivated</div>
           <div className="big">Portfolio clarity to keep your wealth</div>
          
          </div>
        </Fade>
      </div>

      <div className='two' style={basicStyle}>
        <Fade left>
          <div className="middlecontent">
            <div className="big"> Curated investment options to choose to build the perfect portfolio</div>
            <div className="big">SAFE,SIMPLE & EASY. Grow your wealth with the right assets </div>
          </div>
        </Fade>
      </div>

      <div className='three' style={basicStyle}>
        <Fade left>
          <div className="middlecontent">
         
            <div className="big">Create chests to fulfill your dreams with speed and ease</div>
            <div className="big">Invest in model portfolios according to your goal's tenure</div>
          
          </div>
        </Fade>
      </div>

      <div className='four' style={basicStyle}>
        <Fade left>
          <div className="middlecontent">
           
            <div className="big">1.	Quick-Cash for emergencies and building your credit score. Provided by RBI-regulated NBFC only.</div>
          <div className="big"> 2. Reach out to us for any personal loan, gold loan or insurance needs. We work with more than 50+ partners to get you the best deal possible. Reach out to us at loans@justmny.in. </div>
      
          </div>
        </Fade>
      </div>

      
      </div>

    

     
    </>
  );
}

export default Left;

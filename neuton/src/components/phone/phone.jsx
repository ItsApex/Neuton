import "./phone.css";

import React,{ useEffect } from "react";
import Fade from "react-reveal/Fade";
//images import
import Home from '../Assets/Home.png';
import Investment from '../Assets/Quickcash.png';
import Quickcash from '../Assets/Quickcash.png';
import Coupons from '../Assets/Coupons.png';
import Tos from '../Assets/TOS.png';

var flgscl = 0  
function Phone(props) {

  
  const basicStyle = {
    display: "none",
  };

  useEffect(() => {

    if(flgscl == 0 ){
      console.log("1st called for phone")
      if(props.front == 10){
        document.querySelector(".first").style.display = "none";
        document.querySelector(".second").style.display = "block";
        flgscl = 10
        console.log("Phone change karo ")
     }
    } 
    
    else if (flgscl == 10){
      console.log("2nd called for phone")
     
    
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
      console.log("3rd called for phone")
    
    
     if(props.back == -10){
      document.querySelector(".second").style.display = "block";
      document.querySelector(".third").style.display = "none";
      flgscl = 10
     }
    console.log(props.front)
    }
   
  },[props.back , props.front])

  return (
    <div className="phone" style={{overflow: "hidden"}}>
    
      {/* <div className="outercontainer">   */}
      <div className='first'> 
       <Fade left>
          <img className="svg"  src={Home}/> 
      </Fade>
      </div> 

      <div className='second' style={basicStyle}>
        <Fade left> 
        <img className="svg"  src={Investment}/>  
        </Fade> 
        </div>

      <div className='third' style={basicStyle}>
      <Fade left> 
         <img className="svg"  src={Quickcash} /> 
      </Fade>
      </div>

      <div className='four' style={basicStyle}>
      <Fade left> 
         <img className="svg"  src={Coupons} /> 
      </Fade>
      </div>

      <div className='five' style={basicStyle}>
      <Fade left> 
         <img className="svg"  src={Tos} /> 
      </Fade>
      </div>

      {/* </div> */}
   
    </div>
  )
}

export default Phone;
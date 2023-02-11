import "./left.css";
import styled from "styled-components";
import React from "react";
import Fade from "react-reveal/Fade";

// import React from "react";

function Left(props) {
console.log("lamoo",props.front)
    const basicStyle = {
        display: "none",
      };

      
 if(props.front == 10){
    document.querySelector(".one").style.display = "none";
    document.querySelector(".two").style.display = "block";
 }
 else if(props.back == -10){
    document.querySelector(".two").style.display = "none";
    document.querySelector(".one").style.display = "block";
 }

  return (
    <>
      <div className='one' >
        <Fade left>
          <div className="middlecontent">
            <div className="big">Centralized Apps</div>
            <div className="small">First content</div>
          </div>
        </Fade>
      </div>

      <div className='two' style={basicStyle}>
        <Fade left>
          <div className="middlecontent">
            <div className="big"> second Centralized Apps</div>
            <div className="small">Second content</div>
          </div>
        </Fade>
      </div>
    </>
  );
}

export default Left;

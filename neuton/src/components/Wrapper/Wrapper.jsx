// import './App.css';
import "./Wrapper.css";
import styled from "styled-components";
import React, { useState } from "react";
import Fade from "react-reveal/Fade";
import Left from  "../Left/Left"
const mainfunc = document.querySelector(".Main-div");
const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
  height: 150em;
`;

const basicStyle = {
  display: "none",
  // transition: "All 2s",
};

// var frontcount = 0;
// var backcount = 0;

function App() {
  const [frontcount,setFrontcount] = useState(0);
const [backcount,setBackcount] = useState(0);
  // const[data,setdata] =useState("helllllo")
  function scroll(wheel, elem) {
    console.log(wheel.deltaY);

    if (wheel.deltaY >= 90) {
      // console.log(wheel.deltaY)
      if (frontcount == 10) {
        // document.querySelector(".one").style.display = "none";
        // document.querySelector(".two").style.display = "block";
        // frontcount = 0;
      } else {
        setFrontcount(frontcount + 5)
        setBackcount(backcount - 5)
      }
    }
    
    else if (wheel.deltaY <= 90) {
      console.log("backcount is :", backcount);
      if (backcount == -10) {
        // document.querySelector(".two").style.display = "none";
        // document.querySelector(".one").style.display = "block";
        console.log("BACKwork");

        // backcount = 0;
      } else {
        setFrontcount(frontcount - 5)
        setBackcount(backcount + 5) ;
      }
    }

    // console.log(wheel.deltax)
  }

  document.addEventListener("wheel", (e) => {
    scroll(e, mainfunc);
  });

  return (
    <div className="wrapper">
      <div className="wrapper-inner">

        {/* my code */}

        <div  >
        <Left front={frontcount} back={backcount}/>
       </div>

        {/* <div className="one" style={basicStyle}>
          <Fade left>
            <div className="middlecontent">
              <div className="big">Centralized Apps</div>
              <div className="small">First content</div>
            </div>
          </Fade>
        </div> */}

        {/* <div className='one' style={basicStyle}>
          <Fade left> ONE </Fade>
          </div>
        <div div className='two' style={basicStyle}>
        <Fade left> TWO </Fade>
           </div>
        <div className='three'> THREE </div> */}

       

        {/* <div className='two' style={basicStyle}>
          <Fade/>
         </div> */}
        {/* <div className='three'> THREE </div> */}

        {/* <div className='one' style={basicStyle}>
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
      </div> */}

      </div>
    </div>
  );
}

export default App;

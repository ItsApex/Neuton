// import './App.css';
import "./Wrapper.css";
import styled from "styled-components";
import React, { useState } from "react";
// import Fade from "react-reveal/Fade";
import Left from  "../Left/Left"
import Middle from "../Middle/middle"
import Bottom from "../bottom/Bottom";
import Details from "../Details/Details";
const mainfunc = document.querySelector(".Main-div");

// const Title = styled.h1`
//   font-size: 1.5em;
//   text-align: center;
//   color: palevioletred;
//   height: 150em;
// `;

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
  function scroll(wheel) {
    console.log("wheel value is",wheel.deltaY);

    if (wheel.deltaY >= 90) {
      // console.log(wheel.deltaY)
      if (frontcount == 30) {     //small changes made here..change to 30
        setFrontcount(0)
        setBackcount(0)
        console.log("Front");
      } else {
        setFrontcount(frontcount + 5)
      }
    }
    
    else if (wheel.deltaY <= 90) {
      if (backcount == -30) {

        setFrontcount(0)
        setBackcount(0)

        console.log("Back");
        
        // backcount = 0;
      } else {
        setBackcount(backcount - 5);
      }
    }


    // yaha pe changes kiye hei...just change the value 30 in line 62 to 25 
    // console.log("frontcount value for checking details page is ",frontcount)
    if(frontcount  >30){
      console.log("details page show hona chaiye")
      document.querySelector(".threepages").style.display = "none";
      document.querySelector(".detailspage").style.display = "block";
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

        <div className="header-section">
          <div className="header">
          foton.
          </div>
        

        {/* <div className="menuicon" >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="14" viewBox="0 0 20 14"><g fill="none" fill-rule="evenodd" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" transform="translate(1 1)"><path d="M0 6h18M0 0h18M0 12h18"/></g></svg>
        </div> */}
        </div>

       

{/* middle section */}
<div className="threepages">
        <div className="middle-section">

       
        <Left  front={frontcount} back={backcount}/>
          

       <div className="MiddleContent">
        <Middle front={frontcount} back={backcount}/>
       </div>

       <div className="thirdmiddlecontent"></div>

       </div>

       {/* bottom section */}

      
       <div className="bottom">
        <Bottom/>
       </div>
       </div>

        <div className="detailspage" style={basicStyle}>
          <Details/>
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

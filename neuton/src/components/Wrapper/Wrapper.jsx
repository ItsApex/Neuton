// import './App.css';
import { motion, useAnimation } from "framer-motion" ;
import { useRef,useEffect } from 'react';
import Element from "../Assets/Elementsvg.svg"
import "./Wrapper.css";
import styled from "styled-components";
import React, { useState } from "react";
// import Fade from "react-reveal/Fade";
import Left from  "../Left/Left"
import Middle from "../Middle/middle"
import Bottom from "../bottom/Bottom";
import Details from "../Details/Details";
import Elementsvg from "../Element/Element"

const mainfunc = document.querySelector(".Main-div");
const basicStyle = {
  display: "none",

};



function App() {
  // animation vaala part
  // const animation = useAnimation();
  //   const [scrollY, setScrollY] = useState(0);
  //   const wrapperInnerRef = useRef(null);
  

  //   useEffect(() => {
  //       function handleScroll() {
  //           setScrollY(wrapperInnerRef.current.scrollTop);
  //       }
  //       wrapperInnerRef.current.addEventListener("scroll", handleScroll);
  //       return () => {
  //           wrapperInnerRef.current.removeEventListener("scroll", handleScroll);
  //       };
  //   }, []);
  //   useEffect(() => {
        
  //       animation.start({
  //           rotate:scrollY,
  //       });
  //   }, [scrollY]);
// animation khatam

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
    if(frontcount  > 30){
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
        {/* <img className="elementSvg" src={Element} /> */}
        {/* <motion.img style={{ originX: 0.5 , originY : 0.8 }} className='moving-image' animate={animation} src={Element} /> */}
        {/* <motion.img style={{ originX: 0.5 , originY : 0.8 }} className='moving-image' src={Element} /> */}


{/* Image vaala code hei  */}
     {/* <img className="rotatingSvg" src={Element} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" style={{
     transform: isRotated ? 'rotate(180deg)' : 'none',
     transition: 'transform 0.5s ease-out, top 0.5s ease-out',
     position: 'absolute',
     top: isBottom ? 'auto' : '20px',
     bottom: isBottom ? '20px' : 'auto',
     maxWidth: 'calc(100% - 3%)' 
    }}/> */}
    <div className="element">
    <Elementsvg front={frontcount} back={backcount}/>
    </div>
    
  
        <div className="header-section">
          <div className="header">
          foton.
          </div>
        
         
        <div className="menuicon" >
        <svg  xmlns="http://www.w3.org/2000/svg"   width="20" height="14" viewBox="0 0 20 14"><g fill="red" fill-rule="evenodd" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" transform="translate(1 1)"><path d="M0 6h18M0 0h18M0 12h18"/></g></svg>
        {/* <img src={menuicon} className="svgicon" alt="menubar"/> */}
        </div>
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
      </div>
    </div>
  );
}

export default App;

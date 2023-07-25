import { useRef, useEffect } from "react";
import "./Wrapper.css";
import React, { useState } from "react";         
import Details from "../Details/Details";
import Elementsvg from "../Element/Element";
import Header from "../Newheader/Header";
import Newmiddle from "../Newmiddle/Newmiddle";


const mainfunc = document.querySelector(".Main-div");
const basicStyle = {
  display: "none",
};

function App() {
  const [isRotated, setIsRotated] = useState(false);
  const [isBottom, setIsBottom] = useState(false);


  // hooks
  useEffect(() => {
    const handleWheel = (event) => {
      setIsRotated(!isRotated);
      setIsBottom(!isBottom);
    };

    window.addEventListener("wheel", handleWheel);              

    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, [isRotated, isBottom]);   //useEffect closed
  

  const [frontcount, setFrontcount] = useState(0);
  const [backcount, setBackcount] = useState(0);
  function scroll(wheel) {
    // console.log("wheel value is",wheel.deltaY);

    if (wheel.deltaY >= 0) {
      // console.log(`wheel count is ${wheel.deltaY}`)
      if (frontcount == 40) {
        //small changes made here..change to 30
        setFrontcount(0);
        setBackcount(0);
        // console.log("Front");
      } else {
        setFrontcount(frontcount + 5);
        // console.log("value of the front count is",frontcount)
      }
    } 
    else if (wheel.deltaY <= 0) {
      if (backcount == -40) {
        setFrontcount(0);
        setBackcount(0);

        // console.log("Back");

        // backcount = 0;
      } else {
        setBackcount(backcount - 5);
      }
    }

  }
  
  document.addEventListener("wheel", (e) => {
    scroll(e, mainfunc);
  });

  document.addEventListener("touchstart", (e) => {
    console.log('touchstart')
   
  });
  
  document.addEventListener("touchmove", (e) => {
    console.log('touchmove')
  });

  return (
    <div className="wrapper">
      <div className="wrapper-inner">
      
        <Elementsvg front={frontcount} back={backcount} />
        <Header/>  {/* header ko call kiya */}
        <Newmiddle front={frontcount} back={backcount}/>  {/* middle section */}
        {/* <Details />    details vaala */}
        
      </div>
    </div>
  );
}

export default App;

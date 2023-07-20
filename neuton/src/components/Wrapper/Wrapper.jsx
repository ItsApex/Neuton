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

    if (wheel.deltaY >= 90) {
      // console.log(`wheel count is ${wheel.deltaY}`)
      if (frontcount == 50) {
        //small changes made here..change to 30
        setFrontcount(0);
        setBackcount(0);
        // console.log("Front");
      } else {
        setFrontcount(frontcount + 5);
        // console.log("value of the front count is",frontcount)
      }
    } else if (wheel.deltaY <= 90) {
      if (backcount == -50) {
        setFrontcount(0);
        setBackcount(0);

        // console.log("Back");

        // backcount = 0;
      } else {
        setBackcount(backcount - 5);
      }
    }

    // yaha pe changes kiye hei...just change the value 30 in line 62 to 25
    // console.log("frontcount value for checking details page is ",frontcount)
    // if (frontcount > 30) {
    //   console.log("details page show hona chaiye");
    //   document.querySelector(".threepages").style.display = "none";
    //   document.querySelector(".detailspage").style.display = "block";
    // }

    // console.log(wheel.deltax)
  }

  document.addEventListener("wheel", (e) => {
    scroll(e, mainfunc);
  });

  return (
    <div className="wrapper">
      <div className="wrapper-inner">
        {/* my code */}
        <Elementsvg front={frontcount} back={backcount} />
        <Header/>  {/* header ko call kiya */}
        <Newmiddle front={frontcount} back={backcount}/>  {/* middle section */}
        {/* <Details />    details vaala */}
        
      </div>
    </div>
  );
}

export default App;

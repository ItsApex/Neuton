import React, { useRef, useEffect, useState } from "react";
import "./Wrapper.css";
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
    const handleScroll = (event) => {
      setIsRotated(!isRotated);
      setIsBottom(!isBottom);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isRotated, isBottom]);

  const [frontcount, setFrontcount] = useState(false);
  const [backcount, setBackcount] = useState(false);
  const [currentCount, setcurrentCount] = useState(0);
  const [pageCount, setPageCount] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  
  // function scroll(e) {
  //   if (e.deltaY >= 20 || e > 0) {
  //     if (frontcount >= 40 && frontcount <= 50) {
  //       console.log('during front it is ', e.deltaY);
  //       setFrontcount(0);
  //       setBackcount(0);
  //     } else if (frontcount <= 40) {
  //       setFrontcount(frontcount + 5);
  //     }
  //     console.log('Front count===>',frontcount)
  //   } else if (e.deltaY <= -20 || e > 0) {
  //     if (backcount === -40) {
  //       console.log('during back it is ', e.deltaY);
  //       setFrontcount(0);
  //       setBackcount(0);
  //     } else {
  //       setBackcount(backcount - 5);
  //     }
  //     console.log('Back count===>',backcount)
  //   }
  // }

  const handleScroll = () => {
    let timeoutId;
    if (!isScrolling) {
      setIsScrolling(true);
    }

    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      setIsScrolling(false);
    }, 1000); // Adjust the timeout value as per your preference for the "scroll stop" delay
  };



  const scroll = (e) => {
    let increment = 0
     //? increment = 1

    console.log('isScrolling',isScrolling)
    if (e.deltaY > currentCount) {
      if (pageCount < 3) {
        setPageCount(pageCount + 1);
      }
    } else if (e.deltaY < currentCount) {
      if (pageCount > 0) {
        setPageCount(pageCount - 1);
      }
    }
    setcurrentCount(e.deltaY + currentCount);

  };

  document.addEventListener("wheel", (e) => {
    scroll(e, mainfunc);
    handleScroll()
  });

  return (
    <div className="wrapper">
      <div className="wrapper-inner">
        <Elementsvg front={frontcount} back={backcount} pageCount />
        <Header />
        <Newmiddle
          front={frontcount}
          back={backcount}
          pageCount={pageCount}
          setBackcount={setBackcount}
          setFrontcount={setFrontcount}
        />
        {/* <Details /> */}
      </div>
    </div>
  );
}

export default App;

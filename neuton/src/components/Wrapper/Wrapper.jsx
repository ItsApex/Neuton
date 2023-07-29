import React, { useRef, useEffect ,useState } from "react";
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

  const [frontcount, setFrontcount] = useState(0);
  const [backcount, setBackcount] = useState(0);

  function scroll(e) {
    if (e.deltaY >= 20 || e > 0) {
      if (frontcount >= 40 && frontcount <= 50) {
        console.log('during front it is ', e.deltaY);
        setFrontcount(0);
        setBackcount(0);
      } else if (frontcount <= 40) {
        setFrontcount(frontcount + 5);
      }
      console.log('Front count===>',frontcount)
    } else if (e.deltaY <= -20 || e > 0) {
      if (backcount === -40) {
        console.log('during back it is ', e.deltaY);
        setFrontcount(0);
        setBackcount(0);
      } else {
        setBackcount(backcount - 5);
      }
      console.log('Back count===>',backcount)
    }
  }

  document.addEventListener("wheel", (e) => {
    console.log("Scrolled");
    scroll(e, mainfunc);
  });

  return (
    <div className="wrapper">
      <div className="wrapper-inner">
        <Elementsvg front={frontcount} back={backcount} />
        <Header />
        <Newmiddle front={frontcount} back={backcount} />
        {/* <Details /> */}
      </div>
    </div>
  );
}

export default App;

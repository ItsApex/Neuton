import "./Bottom.css";
import styled from "styled-components";
import React, {useEffect} from "react";
import Fade from "react-reveal/Fade";
import Apple from "../Assets/apple-14.svg"
import Google from "../Assets/google-play.svg"
import WebFont from 'webfontloader';


function Bottom() {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Barlow', 'Inter']
      }
    });
   }, []);
  return (
    
      <div className="bottom-section">
        <Fade top>
        <div className="boxes" style={{color: "purple" , borderColor:"white"}}>
          <img className="logo" src={Apple}  />
          App Store
        </div>

        <div className="boxes" style={{color: "red" , borderColor:"white"}}>
        <img className="logo" src={Google} />
          Google Play
        </div>
        </Fade>
      </div>
      
  
  )
}

export default Bottom
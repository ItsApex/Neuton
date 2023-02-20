import "./Bottom.css";
import styled from "styled-components";
import React from "react";
import Fade from "react-reveal/Fade";




function Bottom() {
  return (
    
         <div className="bottom-section">
            <Fade top>
        <div className="boxes">
          I app Store
        </div>

        <div className="boxes">
          Google Play
        </div>
        </Fade>
       </div>
      
  
  )
}

export default Bottom
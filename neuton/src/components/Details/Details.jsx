import React from "react";
import "./Details.css";
import Fade from "react-reveal/Fade";
const basicStyle = {
  display: "none",
};
function Details() {
  return (
    <div   style={basicStyle} className="lastpage">
    <Fade Bottom>
    <div className="details">
        <p id="big-text">Contact us Now <br/> and step into the future</p>
        <div className="firstbox">

            <div >
            <input  className="text-box" type="text" placeholder="First Name" />
            </div >
          
            <div >
            <input className="text-box" type="text" placeholder="Email" />
            </div>

        </div>

        <div>
          <input className="textboxAll" type={Number} placeholder="Phone Number"/>
        </div>

        <div>
          <input  className="textboxAll" placeholder="Your Message"/>
        </div>


        <button className="send">Send</button>
    </div>
    </Fade>
    </div>
  )
}

export default Details
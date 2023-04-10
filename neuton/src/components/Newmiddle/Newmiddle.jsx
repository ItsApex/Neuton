import React from "react";
import Left from "../Left/Left";
import Middle from "../Middle/middle";
import Bottom from "../bottom/Bottom";
import "../Newmiddle/Newmiddle.css"
function Newmiddle(props) {
    return (
      
            <div className="threepages">
                <div className="middle-section">
                   <div><Left front={props.front} back={props.back} /></div> 

                    <div className="MiddleContent">
                        <Middle front={props.front} back={props.back} />
                    </div>

                    <div className="thirdmiddlecontent"></div>
                </div>

                {/* bottom section */}

                <div className="bottom">
                    <Bottom />
                </div>
            </div>
        
    );
}

export default Newmiddle;

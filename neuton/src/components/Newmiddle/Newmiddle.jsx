import React from "react";
import Left from "../Left/Left";
import Middle from "../Middle/middle";
import Bottom from "../bottom/Bottom";
function Newmiddle(props) {
    return (
        <div>
            <div className="threepages">
                <div className="middle-section">
                    <Left front={props.front} back={props.back} />

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
        </div>
    );
}

export default Newmiddle;

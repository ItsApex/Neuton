import React from "react";
import "../Newheader/Header.css"
function Header() {
  return (
    <div>
         <div className="header-section">
          <div className="header" style={{color:'white'}}>GigaDes.</div>
    
          <div className="buttonDiv">
            <button className="join">Join</button>
          </div>
        </div>
    </div>
  )
}

export default Header
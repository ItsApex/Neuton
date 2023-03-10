import React from "react";
import "../Newheader/Header.css"
function Header() {
  return (
    <div>
         <div className="header-section">
          <div className="header" style={{color:'white'}}>GigaDes.</div>
    
          <div className="menuicon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 14"  fill="red">
              <g
               
                fill-rule="evenodd"
                stroke="#000"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                transform="translate(1 1)"
              >
                <path d="M0 6h18M0 0h18M0 12h18" />
              </g>
            </svg>
            {/* <img src={menuicon} className="svgicon" alt="menubar"/> */}
          </div>
        </div>
    </div>
  )
}

export default Header
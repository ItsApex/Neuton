import "./Element.css";
import React,{ useEffect,useState } from "react";
//Element import
import Element from "../Assets/Elementsvg.svg";

 
var flgscl = 0
function BackEle(props) {
  var elem = document.querySelector(".element") 
  var [up,setUp] = useState(false)


  //  useEffect(()=>{
  //   if (flgscl == 0){
  //     if (props.front == 10){
  //       document.querySelector(".element").style.position ="absolute"
  //       document.querySelector(".element").style.transform = "rotate(180deg)"
  //       flgscl = 10
  //     }
  //   }

  //   if (flgscl == 10){
  //     if (props.front == 10){
  //       document.querySelector(".element").style.position ="absolute"
  //       document.querySelector(".element").style.transform = "rotate(360deg)"
  //       flgscl = 20
  //     }
  //   }

  //  },[props.front,props.back])
  let isEffectOnCooldown = false;

 function handleEffect(){

    if(!isEffectOnCooldown){

      if(flgscl == 0 ){
        
        if(props.front == 10){
          // console.log("2nd for svg")
          
          document.querySelector(".element").style.position ="absolute"
          document.querySelector(".element").style.transform = "rotate(180deg)"
          flgscl = 10
          
        }
      } 
      
      else if (flgscl == 10){
      if(props.front == 10){
        document.querySelector(".element").style.position ="absolute"
        // document.querySelector(".element").style.top= "0"
        // document.querySelector(".element").style.removeProperty('bottom')
        
        document.querySelector(".element").style.transform = "rotate(360deg)"
        // document.querySelector(".second").style.display = "none";
        // document.querySelector(".third").style.display = "block";
        // console.log("3rd for svg")
        flgscl = 20
        
      }
      else if(props.back == -10){
        document.querySelector(".element").style.transform = "rotate(0deg)"
        flgscl = 0
        // console.log("1st again for svg")
      }
    }
    
    
    else if (flgscl == 20){
      if(props.front == 10){
        document.querySelector(".element").style.position ="absolute"
        // document.querySelector(".element").style.top= "0"
        // document.querySelector(".element").style.removeProperty('bottom')
        
        document.querySelector(".element").style.transform = "rotate(540deg)"
        // document.querySelector(".second").style.display = "none";
        // document.querySelector(".third").style.display = "block";
        // console.log("3rd for svg")
        flgscl = 30
        
      }
      else if(props.back == -10){
        // console.log("2nd again for svg")
        document.querySelector(".element").style.transform = "rotate(180deg)"
        flgscl = 10
      }
    }

    else if (flgscl == 30){
      if(props.back == -10){
      // console.log("2nd again for svg")
      document.querySelector(".element").style.transform = "rotate(360deg)"
      flgscl = 20
    }
  }
  
}
  isEffectOnCooldown = true;
  setTimeout(() => {
    isEffectOnCooldown = false;
  }, 500); // 500 milliseconds (0.5 seconds) cooldown
  
  }


  useEffect(() => {
    handleEffect();
  }, [props.back, props.front]);
 


  return(
      <img className="element" src={Element} />
)
}

export default BackEle
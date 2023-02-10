// import './App.css';
import styled from 'styled-components';
const mainfunc =  document.querySelector('.Main-div')

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
  height:150em;
`;

const basicStyle ={
  display: "none",
  transition: "All 2s",
};

var frontcount = 0 
var backcount = 0 

function App() {
  function scroll(wheel , elem){
    console.log(wheel.deltaY)

    if(wheel.deltaY >= 90){
      if (frontcount == 10  ){
        document.querySelector('.one').style.display = 'block'
        frontcount = 0;
      }
      else{
        frontcount +=1 
      }
    }
    else if(wheel.deltaY <= 90){
      if (backcount == 10 ){
        document.querySelector('.one').style.display = 'none'
        console.log("BACKwork")
        backcount = 0;
      }
      else{
        backcount += 1 
      }
      
    }
    
    // console.log(wheel.deltax)
  }

  document.addEventListener('wheel', (e) =>{
    scroll(e,mainfunc)
  } );
  
  return (
    <div className='Main-div'>
      <div>
      <div className='one' style={basicStyle}> ONE </div>
        <div div className='two' style={basicStyle}> TWO </div>
        <div className='three'> THREE </div>
      </div>
    </div>
  );
}

export default App;

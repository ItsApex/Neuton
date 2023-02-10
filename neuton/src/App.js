// import logo from './logo.svg';
import './App.css';

function App() {
  document.addEventListener("wheel", wheelScroll);
  function  wheelScroll() {
    console.log(wheel.deltaY)
  }
  return (
    <div>
      <h1>Hello</h1>
    </div>
  );
}

export default App;

import React, { useState } from 'react'
import '../styles/App.css';
const App = () => {
const [limit,setLimit] = useState(50);
const [Fontsize,setFont] = useState(16);
const [inputval,inputVAl2] = useState("");

 const getWord =()=> {
  return inputval== null || inputval == "" ? 0 : inputval.trim().split(" ").length;
 }
 const getChar =()=> {
  return inputval== null || inputval == "" ? 0 : inputval.split("").length;
 }
       


  return (
    <div id="main">
      <h1>Font Picker</h1>
      <input type="range" value={Fontsize} min="16" max="32" onChange={(e)=> setFont(e.target.value)}/>
      <br />
      <input id="char-limit-input" type="number" onChange={(e)=> setLimit(e.target.value)}/>
      <br />
      <textarea onChange={(e)=> inputVAl2(e.target.value)} style={{fontSize: Fontsize + "px"}} maxLength={limit}>{inputval}</textarea>
      <div id="word-counter">Number of words:{getWord()}</div>
      <div id="char-counter">Number of character:{getChar()}</div>

    </div>
  )
}


export default App;

import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios';


function App() {
  const [nasaImg, setImg] = useState(0);
  
  useEffect(() => {
    async function fetchData() {
      try {
        const nasaData = await axios.get('https://api.nasa.gov/planetary/apod?api_key=NAiBVbBWUEMwQapNNOSb7drcvy0f0vTdYpF1aRmP')
        console.log(nasaData);
        setImg(nasaData.data);
      }



  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p>
    </div>
  );
}

export default App;

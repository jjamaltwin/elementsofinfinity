import "./App.css";
import { Image } from "react-bootstrap";
import React from "react";



function App() {
  return (
    <div className="App">
      <div className="side-bar" opacity="1">
        <Image className="logo" src="dalelogo.png" alt="queen" opacity="1" />
        <p>
          Infinite Credit Success is dedicated to help as many families as
          become Financial Educated with Financial Literacy tools and Build
          Generational Wealth!
        </p>
      </div>
      <div className="main">
        <div className="main-wrapper" opacity="1">
          <h1 text-align="center">Infinity</h1>
          <Image className="firstpic" src="dale.png" alt="queen" opacity="1" />
        </div>
      </div>
    </div>
  );
}

export default App;
